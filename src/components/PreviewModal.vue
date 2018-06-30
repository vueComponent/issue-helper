<script>
const Remarkable = require('remarkable');
const md = new Remarkable();

export default {
  functional: true,
  render(createElement, context) {
    const { visible, content } = context.props;
    const { cancel, create } = context.listeners
    const { parent } = context
    const props = {
      domProps: {
        innerHTML: md.render(content)
      }
    }
    return (
      <a-modal
        title={parent.i18n('previewModal.title')}
        cancelText=""
        width="680px"
        visible={visible}
        onCancel={cancel}
        footer={(
          <a-button onClick={create} type="primary">
            {parent.i18n('issue.create')}
          </a-button>
        )}
      >
        <div
          class="paragraph"
          {...props}
        />
      </a-modal>
    )
  }
}
</script>
