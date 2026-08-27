<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tag from 'primevue/tag'

import { useConfigStore } from '@/stores/configStore'

defineProps({
  cityItem: {
    type: Object,
    required: true,
  },

  layout: {
    type: String,
    default: 'grid',
  },
})

const emit = defineEmits(['select-card', 'click-detail'])

const configStore = useConfigStore()
</script>

<template>
  <Card
    class="weather-card"
    :class="{ 'list-card': layout === 'list' }"
    @click="emit('select-card', cityItem.name)"
  >
    <template #title>
      <div class="card-title">
        <div>
          <span class="city-name">{{ cityItem.name }}</span>

          <span class="weather-status">
            {{ cityItem.status }}
          </span>
        </div>

        <span class="temperature">
          {{ configStore.formatTemperature(cityItem.temp) }}
        </span>
      </div>
    </template>

    <template #content>
      <div class="weather-content">
        <div class="weather-meta">
          <Tag v-if="cityItem.temp >= 25" value="🔥 더움" severity="danger" />

          <Tag v-else value="❄️ 선선함" severity="info" />

          <span v-if="cityItem.humidity !== undefined"> 💧 습도 {{ cityItem.humidity }}% </span>

          <span v-if="cityItem.windSpeed !== undefined"> 💨 {{ cityItem.windSpeed }} m/s </span>
        </div>

        <Button
          label="상세보기"
          severity="info"
          outlined
          size="small"
          @click.stop="emit('click-detail', cityItem)"
        />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.weather-card {
  height: 100%;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.weather-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.1);
}

.card-title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.city-name {
  display: block;
  color: #172033;
  font-size: 18px;
  font-weight: 800;
}

.weather-status {
  display: block;
  margin-top: 5px;
  color: #7b8494;
  font-size: 13px;
  font-weight: 500;
}

.temperature {
  color: #2563eb;
  font-size: 24px;
  font-weight: 800;
  white-space: nowrap;
}

.weather-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.weather-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  color: #64748b;
  font-size: 13px;
}

.list-card .weather-content {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .card-title {
    flex-direction: column;
  }

  .list-card .weather-content {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
