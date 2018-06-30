<template>
  <div class="form-intro paragraph">
    <i18n
      id="reproHelp"
      class="repro bg-faded"
      @click-repro-modal="show = true"
    />
    <a-modal
      :visible="show"
      :title="i18n('repro.about')"
      class="medium"
      :width="680"
      @cancel="show = false"
    >
      <div class="default-body">
        <i18n id="reproModal"/>
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

