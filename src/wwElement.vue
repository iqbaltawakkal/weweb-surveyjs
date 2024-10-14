<template>
  <SurveyCreator :key="updateComponent" :showLogicTab="content.showLogicTab"
    :showJSONEditorTab="content.showJSONEditorTab" />
</template>

<script setup>
import SurveyCreator from './components/SurveyCreator.vue'
import { watch, ref } from 'vue'
const props = defineProps({
  content: { type: Object, required: true },
})

const updateComponent = ref(0);
watch(() => props.content, () => (updateComponent.value += 1), { deep: true });
</script>
