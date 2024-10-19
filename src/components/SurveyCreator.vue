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
import { setLicenseKey } from 'survey-core'

const emits = defineEmits(['save'])
const props = defineProps({
  showLogicTab: { type: Boolean },
  showJSONEditorTab: { type: Boolean },
  showThemeTab: { type: Boolean },
  themeColor: { type: String },
  componentBind: { type: String },
  licenseKey: { type: String },
  showBoolean: { type: Boolean },
  showCheckbox: { type: Boolean },
  showComment: { type: Boolean },
  showDropdown: { type: Boolean },
  showTagbox: { type: Boolean },
  showExpression: { type: Boolean },
  showFile: { type: Boolean },
  showHtml: { type: Boolean },
  showImage: { type: Boolean },
  showImagepicker: { type: Boolean },
  showMatrix: { type: Boolean },
  showMatrixdropdown: { type: Boolean },
  showMatrixdynamic: { type: Boolean },
  showMultipletext: { type: Boolean },
  showPanel: { type: Boolean },
  showPaneldynamic: { type: Boolean },
  showRadiogroup: { type: Boolean },
  showRating: { type: Boolean },
  showRanking: { type: Boolean },
  showSignaturepad: { type: Boolean },
  showText: { type: Boolean },
})

setLicenseKey(props.licenseKey)

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
  showThemeTab: props.showThemeTab,
  questionTypes: [
    props.showBoolean && 'boolean',
    props.showCheckbox && 'checkbox',
    props.showComment && 'comment',
    props.showDropdown && 'dropdown',
    props.showTagbox && 'tagbox',
    props.showExpression && 'expression',
    props.showFile && 'file',
    props.showHtml && 'html',
    props.showImage && 'image',
    props.showImagepicker && 'imagepicker',
    props.showMatrix && 'matrix',
    props.showMatrixdropdown && 'matrixdropdown',
    props.showMatrixdynamic && 'matrixdynamic',
    props.showMultipletext && 'multipletext',
    props.showPanel && 'panel',
    props.showPaneldynamic && 'paneldynamic',
    props.showRadiogroup && 'radiogroup',
    props.showRating && 'rating',
    props.showRanking && 'ranking',
    props.showSignaturepad && 'signaturepad',
    props.showText && 'text'
  ].filter(Boolean)
}
const creator = new SurveyCreatorModel(options)
new SurveyTemplatesTabPlugin(creator)
creator.saveSurveyFunc = function (saveNo, callback) {
  emit('save', creator.text)
  callback(saveNo, true)
}

if (props.componentBind) creator.text = typeof props.componentBind === 'string' ? props.componentBind : JSON.stringify(props.componentBind);

onMounted(() => {
  document.documentElement.style.setProperty('--primary', props.themeColor)
})
</script>
