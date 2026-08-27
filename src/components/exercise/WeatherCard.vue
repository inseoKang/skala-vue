<script setup>
import { computed } from 'vue'

import Card from 'primevue/card'
import Button from 'primevue/button'
import Tag from 'primevue/tag'

import { useConfigStore } from '@/stores/configStore'

const props = defineProps({
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

const temperatureState = computed(() => {
  if (props.cityItem.temp >= 30) {
    return {
      label: '높은 기온',
      severity: 'warn',
      className: 'hot',
    }
  }

  if (props.cityItem.temp >= 25) {
    return {
      label: '따뜻함',
      severity: 'info',
      className: 'warm',
    }
  }

  return {
    label: '선선함',
    severity: 'success',
    className: 'cool',
  }
})
</script>

<template>
  <Card
    class="weather-card"
    :class="[temperatureState.className, { 'list-card': layout === 'list' }]"
    @click="emit('select-card', cityItem.name)"
  >
    <template #content>
      <div class="card-main">
        <div class="card-heading">
          <div>
            <div class="city-line">
              <h3>{{ cityItem.name }}</h3>

              <Tag :value="temperatureState.label" :severity="temperatureState.severity" rounded />
            </div>

            <p class="weather-status">
              {{ cityItem.status }}
            </p>
          </div>

          <strong class="temperature">
            {{ configStore.formatTemperature(cityItem.temp) }}
          </strong>
        </div>

        <div class="weather-meta">
          <span v-if="cityItem.humidity !== undefined" class="meta-item">
            <small>습도</small>
            <strong>{{ cityItem.humidity }}%</strong>
          </span>

          <span v-if="cityItem.windSpeed !== undefined" class="meta-item">
            <small>바람</small>
            <strong>{{ cityItem.windSpeed.toFixed(1) }} m/s</strong>
          </span>
        </div>

        <div class="card-footer">
          <Button
            label="자세히 보기"
            text
            size="small"
            class="detail-button"
            @click.stop="emit('click-detail', cityItem)"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.weather-card {
  position: relative;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--surface);
  border: 1px solid var(--line);
  border-top: 3px solid #b7d6f5;
  border-radius: 16px;
  box-shadow: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.weather-card.hot {
  border-top-color: var(--sun);
}

.weather-card.warm {
  border-top-color: #78b2ed;
}

.weather-card.cool {
  border-top-color: var(--mint);
}

.weather-card:hover {
  transform: translateY(-3px);
  border-color: #c9d7e7;
  box-shadow: 0 12px 30px rgba(35, 56, 85, 0.08);
}

:deep(.p-card-body),
:deep(.p-card-content) {
  height: 100%;
  padding: 0;
}

.card-main {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
}

.card-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.city-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

h3 {
  margin: 0;
  color: var(--text);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.weather-status {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 13px;
}

.temperature {
  color: var(--text);
  font-size: 27px;
  font-weight: 800;
  letter-spacing: -0.05em;
  white-space: nowrap;
}

.weather-meta {
  display: flex;
  gap: 24px;
  margin-top: 28px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-item small {
  color: var(--muted);
  font-size: 11px;
}

.meta-item strong {
  color: var(--text-subtle);
  font-size: 13px;
  font-weight: 700;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 20px;
}

.detail-button {
  color: var(--primary-dark);
  font-size: 12px;
}

.list-card .card-main {
  display: grid;
  grid-template-columns: minmax(180px, 1fr) 220px auto;
  align-items: center;
  gap: 24px;
}

.list-card .weather-meta {
  margin-top: 0;
}

.list-card .card-footer {
  margin-top: 0;
  padding-top: 0;
}

@media (max-width: 700px) {
  .list-card .card-main {
    display: flex;
    align-items: stretch;
  }

  .list-card .weather-meta {
    margin-top: 24px;
  }

  .list-card .card-footer {
    margin-top: auto;
    padding-top: 20px;
  }
}
</style>
