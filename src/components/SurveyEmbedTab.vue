<template>
  <div class="wrapper-custom-component">
    <div class="container-custom-component">
      <div class="custom-component">
        <div class="svc-custom-embedded-tab__code-header"><span>Embed on your own site:</span></div>
        <pre>
            <code :class="`content-js language-js`">
  {{ `<div id="adhesion-connect-form"></div>
  <script src="${model.surveyApiUrl || 'https://api.adhesionconnect.com/api:0ENcNw61/request_form/data/js'}"
  form-id="${props.model.surveyId || 'SURVEY_ID'}"></script>` }}   
            </code>
          </pre>
      </div>
      <div class="custom-component">
        <div class="svc-custom-embedded-tab__code-header"><span>Direct link:</span></div>
        <pre>
            <code :class="`content-js language-js`">
  {{ `https://forms.adhesionconnect.com/public/${props.model.surveyId || 'SURVEY_ID'}` }}   
            </code>
          </pre>
      </div>
    </div>
  </div>
</template>
<script setup>
import Prism from 'prismjs'
import { onMounted } from 'vue'

const props = defineProps({
  model: Object
})

onMounted(() => {
  setTimeout(() => {
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  }, 0)
})
</script>

<style lang="scss">
.wrapper-custom-component {
  width: 100%;
  overflow: auto;
}

.container-custom-component {
  max-width: calc(90 * (var(--sjs-base-unit, var(--base-unit, 8px))));
  margin-left: auto;
  margin-right: auto;
  padding-top: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
  padding-bottom: calc(10 * (var(--sjs-base-unit, var(--base-unit, 8px))));
  width: 100%;
}

.svc-custom-embedded-tab__code-header {
  font-weight: 700;
  color: var(--ctr-code-viewer-title-color, var(--sjs-layer-3-foreground-100, rgba(0, 0, 0, 0.91)));
  font-size: var(--ctr-font-medium-size, calc(var(--base-unit, 8px) * 3));
  font-family: var(--ctr-medium-bold-font-family, 'Open Sans');
  line-height: var(--ctr-font-medium-line-height, calc(var(--base-unit, 8px) * 4));
  margin: 0;
}

.custom-component {
  margin-bottom: 32px;
}

@import 'prismjs/themes/prism';

pre[class*='language-'] {
  background: white;
  border-radius: 8px;
}

.content-js {
  user-select: text !important;
}
</style>