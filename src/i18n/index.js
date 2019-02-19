import marked from 'marked'
import qs from 'qs'

const req = require.context('./locales', true, /\.md$/)
const reqVars = require.context('./locales', true, /\.js$/)
const texts = { en: {}, zh: {} }
const vars = {en: {}, zh: {}}

req.keys().forEach((mod) => {
  const matches = mod.match('./(.+)/(.+).md');
  const locale = matches[1];
  const id = matches[2];
  texts[locale][id] = req(mod);
})

reqVars.keys().forEach((mod) => {
  const matches = mod.match('./(.+).js');
  const locale = matches[1];
  vars[locale] = reqVars(mod).default;
})

export default Vue => {
  // add locale and lang to root instance.
  // $lang is reactive.
  Vue.mixin({
    beforeCreate () {
      if (this.$root === this) {
        this.$texts = texts
        this.$vars = vars
        const query = qs.parse(window.location.search.slice(1))
        Vue.util.defineReactive(this, '$lang', query && query.lang || 'en')
      }
    }
  })

  const notFound = (lang, id) =>
    `[i18n content not found for { lang: "${lang}", id: "${id}" }`

  // global i18n method for simple phrases in text interpolations
  Vue.prototype.i18n = function (id) {
    const { $vars, $lang } = this.$root
    const locale = $vars[$lang]
    return locale[id] || notFound($lang, id)
  }

  // component for rendering an i18n locale markdown file
  Vue.component('i18n', {
    props: ['id'],
    render (h) {
      const { $texts, $lang } = this.$root
      const locale = $texts[$lang]
      const content = locale[this.id]
      return h('div', {
        domProps: {
          innerHTML: content
            ? marked(content.trim())
            : `<div style="color:red">${notFound($lang, this.id)}</div>`
        }
      })
    },
    mounted: processLinks,
    updated: processLinks,
  })

  function processLinks () {
    [...this.$el.querySelectorAll('a')].forEach(a => {
      // avoid interferring with form input tab focus
      a.setAttribute('tabindex', '-1')
      const href = a.getAttribute('href')
      if (href) {
        if (href.charAt(0) !== '#') {
          // make external links open in new tab
          a.setAttribute('target', '_blank')
        } else {
          // hash link, emit event
          a.addEventListener('click', () => {
            this.$emit(`click-${href.slice(1)}`)
          })
        }
      }
    })
  }
}
