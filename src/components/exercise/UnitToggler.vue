<script setup>
import { useConfigStore } from '@/stores/configStore'

const configStore = useConfigStore()
</script>

<template>
  <button class="unit-toggle" @click="configStore.toggleUnit">
    {{ configStore.unit === 'celsius' ? '°F로 변경' : '°C로 변경' }}
  </button>
</template>

<style scoped>
.unit-toggle {
  padding: 8px 12px;
  color: #2563eb;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
}

.unit-toggle:hover {
  background-color: #dbeafe;
}
</style>
