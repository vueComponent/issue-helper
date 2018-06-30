<script>

export default {
  functional: true,
  render(createElement, context) {
    const { getFieldDecorator } = context.props.form;
    const { parent } = context
    return (
      <div>
        <a-form-item
          label={parent.i18n('issue.motivation')}
          help={<i18n id="motivationHelp" />}
        >
          {getFieldDecorator('motivation', {
            rules: [{ required: true }],
          })(<a-textarea autosize={{ minRows: 2 }} />)}
        </a-form-item>
        <a-form-item
          label={parent.i18n('issue.proposal')}
          help={<i18n id="proposalHelp" />}
        >
          {getFieldDecorator('proposal', {
            rules: [{ required: true }],
          })(<a-textarea autosize={{ minRows: 2 }} />)}
        </a-form-item>
      </div>
    )
  }
}
</script>
