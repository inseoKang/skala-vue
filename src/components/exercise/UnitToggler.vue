<script setup>
import Button from 'primevue/button'

import { useConfigStore } from '@/stores/configStore'

const configStore = useConfigStore()
</script>

<template>
  <Button
    :label="configStore.unit === 'celsius' ? '°F로 변경' : '°C로 변경'"
    severity="info"
    outlined
    size="small"
    @click="configStore.toggleUnit"
  />
</template>
