<script setup>
import Button from 'primevue/button'

import { useConfigStore } from '@/stores/configStore'

const configStore = useConfigStore()
</script>

<template>
  <Button
    :label="configStore.unit === 'celsius' ? '°F로 보기' : '°C로 보기'"
    outlined
    size="small"
    class="unit-button"
    @click="configStore.toggleUnit"
  />
</template>

<style scoped>
.unit-button {
  min-width: 78px;
  color: var(--primary-dark);
  font-size: 12px;
  font-weight: 700;
  background-color: var(--surface);
  border-color: #bfd7f2;
}

.unit-button:hover {
  color: var(--primary-dark);
  background-color: var(--primary-soft);
  border-color: #9dc5ec;
}
</style>
