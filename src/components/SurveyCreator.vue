<template>
  <SurveyCreatorComponent :model="creator" />
</template>

<script setup>
import { getCurrentInstance, onMounted, computed } from 'vue'
import { SurveyCreatorModel } from 'survey-creator-core'
import { SurveyCreatorComponent } from 'survey-creator-vue'
import 'survey-core/survey.i18n.js'
import 'survey-creator-core/survey-creator-core.i18n.js'
import 'survey-core/defaultV2.min.css'
import 'survey-creator-core/survey-creator-core.min.css'
import { setLicenseKey, Serializer } from 'survey-core'
import SurveyEmbedTab from './SurveyEmbedTab.vue'

Serializer.addProperty('question', {
  name: 'restrict',
  type: 'boolean'
})

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
  themeBind: { type: String },
  storeDataAsText: { type: Boolean, default: true }
})

setLicenseKey(props.licenseKey)

class SurveyTemplatesTabPlugin {
  constructor(creator) {
    this.model = { ...creator, surveyApiUrl: props.surveyApiUrl, surveyId: props.surveyId }
    creator.addPluginTab(
      'survey-embed',
      this,
      'Embed Form',
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
creator.onElementAllowOperations.add(function (sender, options) {
  if (options.obj?.jsonObj?.restrict) {
    options.allowDelete = false
    options.allowEdit = false
    options.allowCopy = false
    options.allowAddToToolbox = false
    options.allowChangeType = false
    options.allowChangeRequired = false
    options.allowShowSettings = false
    options.allowChangeInputType = false
  }
})
creator.onElementDeleting.add(function (sender, options) {
  if (options.element?.jsonObj?.restrict) {
    options.allowing = false;
  }
})
creator.onSelectedElementChanging.add(function (sender, options) {
  // logic for restrict attribute
  if (options.newSelectedElement?.jsonObj?.restrict) {
    creator.showSidebar = false
  } else {
    creator.showSidebar = true
  }

  // logic for upload force storeDataAsText
  if (options?.newSelectedElement?.jsonObj?.type === 'signaturepad' || options?.newSelectedElement?.jsonObj?.type === 'file') {
    setTimeout(() => {
      const isStoreDataAsTextInput = document.querySelector('input[name="storeDataAsText"]')
      if (isStoreDataAsTextInput) isStoreDataAsTextInput.disabled = true
      if (props.storeDataAsText) {
        isStoreDataAsTextInput.value = true
        isStoreDataAsTextInput.disabled = true
      } else {
        isStoreDataAsTextInput.disabled = false
      }
    }, 1000)
  }
})


function preprocessEmitEvent() {
  const original = JSON.parse(creator.text)
  emits('save', JSON.stringify({ json: original, theme: creator.theme }))
}

onMounted(() => {
  document.documentElement.style.setProperty('--primary', props.themeColor)
  document.documentElement.style.setProperty('--sjs-font-size', `${props.fontSize}`)
  if (props.componentBind) creator.text = typeof props.componentBind === 'string' ? props.componentBind : JSON.stringify(props.componentBind);
  if (props.themeBind) creator.theme = typeof props.themeBind === 'string' ? JSON.parse(props.themeBind) : props.themeBind
})

const menuGeneralDisplay = computed(() => (!props.showMenuGeneral ? 'none' : 'block'))
const menuLogoInSurveyHeaderDisplay = computed(() =>
  !props.showMenuLogoInTheSurveyHeader ? 'none' : 'block'
)
const menuNavigationDisplay = computed(() => (!props.showMenuNavigation ? 'none' : 'block'))
const menuQuestionSettingsDisplay = computed(() =>
  !props.showMenuQuestionSettings ? 'none' : 'block'
)
const menuPagesDisplay = computed(() => (!props.showMenuPages ? 'none' : 'block'))
const menuConditionsDisplay = computed(() => (!props.showMenuConditions ? 'none' : 'block'))
const menuDataDisplay = computed(() => (!props.showMenuData ? 'none' : 'block'))
const menuValidationDisplay = computed(() => (!props.showMenuValidation ? 'none' : 'block'))
const menuThankYouPageDisplay = computed(() => (!props.showMenuThankYouPage ? 'none' : 'block'))
const menuQuizModeDisplay = computed(() => (!props.showMenuQuizMode ? 'none' : 'block'))
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

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='Navigation']) {
  display: v-bind('menuNavigationDisplay');
}

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='General']) {
  display: v-bind('menuGeneralDisplay');
}

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='Logo in the Survey Header']) {
  display: v-bind('menuLogoInSurveyHeaderDisplay');
}

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='Question Settings']) {
  display: v-bind('menuQuestionSettingsDisplay');
}

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='Pages']) {
  display: v-bind('menuPagesDisplay');
}

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='Conditions']) {
  display: v-bind('menuConditionsDisplay');
}

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='Data']) {
  display: v-bind('menuDataDisplay');
}

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='Validation']) {
  display: v-bind('menuValidationDisplay');
}

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='"Thank You" Page']) {
  display: v-bind('menuThankYouPageDisplay');
}

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='Quiz Mode']) {
  display: v-bind('menuQuizModeDisplay');
}

div.spg-row.spg-clearfix.sd-page__row:has(h4[aria-label='Others']) {
  display: none;
}

.spg-selectbase__label:has(input[name='storeDataAsText'][disabled]) {
  cursor: not-allowed;
}

.spg-row.spg-clearfix:has(input[name='storeDataAsText'][disabled]) {
  display: none;
}
</style>
