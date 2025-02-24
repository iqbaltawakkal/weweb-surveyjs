<template>
  <SurveyCreator :key="updateComponent" v-bind="content" @save="e => $emit('trigger-event', {
    name: 'json:save',
    event: e,
  })" @theme="e => $emit('trigger-event', {
    name: 'theme:save',
    event: e,
  })" />
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
