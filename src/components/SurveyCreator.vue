<template>
  <SurveyCreatorComponent :model="creator" />
</template>

<script setup>
import { SurveyCreatorModel } from 'survey-creator-core'
import { SurveyCreatorComponent } from 'survey-creator-vue'
import 'survey-core/survey.i18n.js'
import 'survey-creator-core/survey-creator-core.i18n.js'
import 'survey-core/defaultV2.min.css'
import 'survey-creator-core/survey-creator-core.min.css'

class SurveyTemplatesTabPlugin {
  constructor(creator) {
    this.model = creator
  }

  // Do nothing when the tab is activated or deactivated
  activate() { }
  deactivate() {
    return true
  }
}

const options = {
  showLogicTab: true,
  showJSONEditorTab: true
}
const creator = new SurveyCreatorModel(options)
new SurveyTemplatesTabPlugin(creator)
</script>
