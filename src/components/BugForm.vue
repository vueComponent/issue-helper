<script>
import ReproModal from './ReproModal.vue'

export default {
  functional: true,
  render(createElement, context) {
    const { form: { getFieldDecorator }, versions, similarIssues } = context.props;
    const { parent } = context
    return (
      <div>
        <a-form-item>
          <a-col span={11}>
            <a-form-item
              label={parent.i18n('issue.version')}
              help={parent.i18n('issue.versionHelp')}
            >
              {getFieldDecorator('version', {
                initialValue: versions[0],
              })(
                <a-select showSearch={true}>
                  {versions.map(version =>
                    <a-select-option key={version}>{version}</a-select-option>,
                  )}
                </a-select>,
              )}
            </a-form-item>
          </a-col>
          <a-col span={12} offset={1}>
            <a-form-item
              label={parent.i18n('issue.reproduction')}
              help={<ReproModal />}
            >
              {getFieldDecorator('reproduction', {
                rules: [{ required: true }],
              })(<a-input type="url" />)}
            </a-form-item>
          </a-col>
        </a-form-item>
        <a-form-item
          label={parent.i18n('issue.environment')}
          help={parent.i18n('issue.environmentHelp')}
        >
          {getFieldDecorator('environment', {
            rules: [{ required: true }],
          })(<a-input />)}
        </a-form-item>
        <a-form-item
          label={parent.i18n('issue.steps')}
          help={<i18n id="stepsHelp" />}
        >
          {getFieldDecorator('steps', {
            rules: [{ required: true }],
          })(<a-textarea autosize={{ minRows: 2 }} />)}
        </a-form-item>
        <a-form-item
          label={parent.i18n('issue.expected')}
        >
          {getFieldDecorator('expected', {
            rules: [{ required: true }],
          })(<a-textarea autosize={{ minRows: 2 }} />)}
        </a-form-item>
        <a-form-item
          label={parent.i18n('issue.actually')}
        >
          {getFieldDecorator('actual', {
            rules: [{ required: true }],
          })(<a-textarea autosize={{ minRows: 2 }} />)}
        </a-form-item>
        <a-form-item
          label={parent.i18n('issue.extra')}
          help={parent.i18n('issue.extraHelp')}
        >
          {getFieldDecorator('extra', {})(<a-textarea autosize={{ minRows: 2 }} />)}
        </a-form-item>
      </div>
    )
  }
}
</script>
