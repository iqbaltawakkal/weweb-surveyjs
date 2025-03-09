<template>
  <SurveyCreatorComponent :model="creator" />
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue'
import { SurveyCreatorModel } from 'survey-creator-core'
import { SurveyCreatorComponent } from 'survey-creator-vue'
import 'survey-core/survey.i18n.js'
import 'survey-creator-core/survey-creator-core.i18n.js'
import 'survey-core/defaultV2.min.css'
import 'survey-creator-core/survey-creator-core.min.css'
import { setLicenseKey } from 'survey-core'
import SurveyEmbedTab from './SurveyEmbedTab.vue'

const app = getCurrentInstance().appContext.app
app.component('svc-tab-survey-embed', SurveyEmbedTab)

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
  showMenuGeneral: { type: Boolean },
  showMenuLogoInTheSurveyHeader: { type: Boolean },
  showMenuNavigation: { type: Boolean },
  showMenuQuestionSettings: { type: Boolean },
  showMenuPages: { type: Boolean },
  showMenuConditions: { type: Boolean },
  showMenuData: { type: Boolean },
  showMenuValidation: { type: Boolean },
  showMenuThankYouPage: { type: Boolean },
  showMenuQuizMode: { type: Boolean },
  fontSize: { type: String },
  surveyId: { type: String },
  surveyApiUrl: { type: String },
  injectedQuestions: { type: [String, Array] },
})

setLicenseKey(props.licenseKey)

class SurveyTemplatesTabPlugin {
  constructor(creator) {
    this.model = { ...creator, surveyApiUrl: props.surveyApiUrl, surveyId: props.surveyId }
    creator.addPluginTab(
      'survey-embed',
      this,
      'Embed Survey',
      'svc-tab-survey-embed',
      4
    )
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
  preprocessEmitEvent()
  callback(saveNo, true)
}
creator.saveThemeFunc = function (saveNo, callback) {
  preprocessEmitEvent()
  callback(saveNo, true)
}
creator.onGetPropertyReadOnly.add(function (sender, options) {
  if (options.obj?.jsonObj?.readOnly) {
    options.readOnly = true
  }
})
creator.onElementAllowOperations.add(function (sender, options) {
  if (options.obj?.jsonObj?.readOnly) {
    options.allowDelete = false
    options.allowEdit = false
    options.allowCopy = false
    options.allowAddToToolbox = false
    options.allowDragging = false
    options.allowChangeType = false
    options.allowChangeRequired = false
    options.allowShowSettings = false
  }
})
creator.onElementDeleting.add(function (sender, options) {
  if (options.obj?.jsonObj?.readOnly) {
    options.allowing = false;
  }
})


function preprocessEmitEvent() {
  const injectedQuestions =
    typeof props.injectedQuestions === 'string'
      ? JSON.parse(props.injectedQuestions)
      : props.injectedQuestions
  const original = JSON.parse(creator.text)
  original.pages[0].elements.unshift(...injectedQuestions)
  emits('save', JSON.stringify({ json: original, theme: creator.theme }))
}

onMounted(() => {
  document.documentElement.style.setProperty('--primary', props.themeColor)
  document.documentElement.style.setProperty('--sjs-font-size', `${props.fontSize}`)
  if (props.componentBind) creator.text = typeof props.componentBind === 'string' ? props.componentBind : JSON.stringify(props.componentBind);
  showHidePanelMenuDesigner()
})

function showHidePanelMenuDesigner() {
  const doc = wwLib.getFrontDocument() || document
  doc.querySelectorAll('.spg-row.spg-clearfix.sd-page__row')[0].style.display = props.showMenuGeneral ? 'block' : 'none'
  doc.querySelectorAll('.spg-row.spg-clearfix.sd-page__row')[1].style.display = props.showMenuLogoInTheSurveyHeader ? 'block' : 'none'
  doc.querySelectorAll('.spg-row.spg-clearfix.sd-page__row')[2].style.display = props.showMenuNavigation ? 'block' : 'none'
  doc.querySelectorAll('.spg-row.spg-clearfix.sd-page__row')[3].style.display = props.showMenuQuestionSettings ? 'block' : 'none'
  doc.querySelectorAll('.spg-row.spg-clearfix.sd-page__row')[4].style.display = props.showMenuPages ? 'block' : 'none'
  doc.querySelectorAll('.spg-row.spg-clearfix.sd-page__row')[5].style.display = props.showMenuConditions ? 'block' : 'none'
  doc.querySelectorAll('.spg-row.spg-clearfix.sd-page__row')[6].style.display = props.showMenuData ? 'block' : 'none'
  doc.querySelectorAll('.spg-row.spg-clearfix.sd-page__row')[7].style.display = props.showMenuValidation ? 'block' : 'none'
  doc.querySelectorAll('.spg-row.spg-clearfix.sd-page__row')[8].style.display = props.showMenuThankYouPage ? 'block' : 'none'
  doc.querySelectorAll('.spg-row.spg-clearfix.sd-page__row')[9].style.display = props.showMenuQuizMode ? 'block' : 'none'
}
</script>


<style>
.svc-text--normal,
.spg-panel__title,
.spg-question__title,
.spg-checkbox__caption,
.spg-input,
.spg-matrixdynamic__placeholder-text,
.spg-matrixdynamic__add-btn,
.spg-input-container__input {
  font-size: var(--sjs-font-size,
      calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))))) !important;
}

.spg-input {
  align-items: center;
}

.sv-action-bar-item:not([disabled])[title='Save Theme'] use {
  fill: var(--ctr-menu-toolbar-button-text-color-selected,
      var(--sjs-primary-backcolor, var(--primary, #19b394)));
}
</style>
