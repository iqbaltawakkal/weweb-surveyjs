<template>
    <div class="wrapper-custom-component">
        <div class="container-custom-component">
            <div class="custom-component">
                <div class="svc-custom-embedded-tab__code-header"><span>index.js</span></div>
                <pre>
            <code :class="`content-js language-js`">
  {{ index }}
            </code>
          </pre>
            </div>
            <div class="custom-component">
                <div class="svc-custom-embedded-tab__code-header"><span>index.html</span></div>
                <pre>
            <code :class="`content-js language-js`">
  {{ `<!DOCTYPE html>
  <html>
    <head>
      <meta name="robots" content="noindex">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script src="https://unpkg.com/survey-core@1.12.22/survey.core.min.js"></script>
      <script src="https://unpkg.com/survey-core@1.12.22/survey.i18n.min.js"></script>
      <script src="https://unpkg.com/survey-core@1.12.22/themes/index.min.js"></script>
      <script src="https://unpkg.com/survey-js-ui@1.12.22/survey-js-ui.js"></script>
      <link rel="stylesheet" href="https://unpkg.com/survey-core@1.12.22/defaultV2.min.css" />
      <link rel="stylesheet" href ="./index.css" />
    </head>
    <body>
      <div id="surveyElement" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-height: 100%; height:100%"></div>
      <script src="./json.js"></script>
      <script src="./theme.js"></script>
      <script src="./index.js"></script>
    </body>
  </html>`}}   
            </code>
          </pre>
            </div>
            <div class="custom-component">
                <div class="svc-custom-embedded-tab__code-header"><span>json.js</span></div>
                <pre>
            <code :class="`content-js language-js`">
  {{ json }}   
            </code>
          </pre>
            </div>
            <div class="custom-component">
                <div class="svc-custom-embedded-tab__code-header"><span>theme.js</span></div>
                <pre>
            <code :class="`content-js language-js`">
  {{ theme }}   
            </code>
          </pre>
            </div>
        </div>
    </div>
</template>
<script setup>
/*eslint-disable no-unused-vars */
import Prism from 'prismjs'
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
    model: Object
})

const json = ref('')
const theme = ref('')
const index = computed(
    () => `
  const survey = new Survey.Model(json);
  survey.applyTheme(theme)
  survey.onComplete.add((sender, options) => {
      fetch("${props.model.surveyApiUrl || 'https://example.com/api/data'}", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...sender.data, id: "${props.model.surveyId || 'your id'}"})
      })
  });
  survey.render(document.getElementById("surveyElement"));
  `
)

onMounted(() => {
    json.value = `const json = ${window._creator.text}`
    theme.value = `const theme = ${window._creator.theme}`
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