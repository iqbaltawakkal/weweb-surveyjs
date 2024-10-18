<template>
  <SurveyCreatorComponent :model="creator" />
</template>

<script setup>
import { onMounted } from 'vue'
import { SurveyCreatorModel } from 'survey-creator-core'
import { SurveyCreatorComponent } from 'survey-creator-vue'
import 'survey-core/survey.i18n.js'
import 'survey-creator-core/survey-creator-core.i18n.js'
import 'survey-core/defaultV2.min.css'
import 'survey-creator-core/survey-creator-core.min.css'

const props = defineProps({
  showLogicTab: { type: Boolean },
  showJSONEditorTab: { type: Boolean },
  showThemeTab: { type: Boolean },
  themeColor: { type: String }
})

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
  showLogicTab: props.showLogicTab,
  showJSONEditorTab: props.showJSONEditorTab,
  showThemeTab: props.showThemeTab
}
const creator = new SurveyCreatorModel(options)
new SurveyTemplatesTabPlugin(creator)

onMounted(() => {
  document.documentElement.style.setProperty('--primary', props.themeColor)
})
</script>
