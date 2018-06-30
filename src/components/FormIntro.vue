<template>
  <div class="form-intro paragraph">
    <i18n
      id="intro"
      class="intro bg-faded"
      @click-intro-modal="show = true"
    />
    <a-modal
      :visible="show"
      :title="i18n('intro.modal')"
      class="medium"
      :width="680"
      @cancel="show = false"
    >
      <div class="default-body">
        <i18n id="introModal"/>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
    }
  },
}
</script>

