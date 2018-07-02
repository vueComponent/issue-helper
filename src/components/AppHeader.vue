<template>
  <nav class="header ant-layout-header">
    <div class="headerContainer">
      <div class="logo">
        <img
          alt="logo"
          src="https://raw.githubusercontent.com/vueComponent/ant-design/master/logo.png"
        />
        <h1>
          Issue Helper
        </h1>
      </div>
      <div class="locale">
        <a-button size="small" @click="handleLocaleChange">
          {{lang === 'en' ? '中文' : 'English'}}
        </a-button>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  props: ['lang'],
  methods: {
    handleLocaleChange() {
      const lang = this.lang === 'en' ? 'zh' : 'en'
      this.$emit('change-lang', lang)
    }
  },
}
</script>
