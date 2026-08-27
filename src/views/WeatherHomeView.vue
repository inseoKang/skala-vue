<script setup>
import { ref, computed, watch, watchEffect, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import DataView from 'primevue/dataview'
import ProgressSpinner from 'primevue/progressspinner'

import WeatherToolbar from '@/components/exercise/WeatherToolbar.vue'
import WeatherCard from '@/components/exercise/WeatherCard.vue'
import UnitToggler from '@/components/exercise/UnitToggler.vue'

import { cities } from '@/data/cities'
import { getCurrentWeather } from '@/services/weatherApi'

const router = useRouter()

const weatherList = ref([])

const searchQuery = ref('')
const selectedCityInfo = ref('원하는 도시를 선택해 상세 날씨를 확인해 보세요.')

const sortKey = ref('default')
const rows = ref(10)
const layout = ref('grid')

const loading = ref(false)
const errorMessage = ref('')

const loadWeatherList = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    const weatherRequests = cities.map(async (city) => {
      const data = await getCurrentWeather(city.lat, city.lon)

      return {
        id: city.id,
        name: city.name,
        lat: city.lat,
        lon: city.lon,
        temp: Math.round(data.main.temp),
        status: data.weather[0]?.description ?? '정보 없음',
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0]?.icon,
      }
    })

    weatherList.value = await Promise.all(weatherRequests)
  } catch (error) {
    console.error('날씨 데이터를 가져오는 중 오류가 발생했습니다.', error)

    errorMessage.value = '날씨 정보를 불러오지 못했습니다.'
  } finally {
    loading.value = false
  }
}

const filteredWeatherList = computed(() => {
  const query = searchQuery.value.trim()

  if (!query) {
    return weatherList.value
  }

  return weatherList.value.filter((city) => city.name.includes(query))
})

const displayedWeatherList = computed(() => {
  const result = [...filteredWeatherList.value]

  switch (sortKey.value) {
    case 'temp-desc':
      return result.sort((a, b) => b.temp - a.temp)

    case 'temp-asc':
      return result.sort((a, b) => a.temp - b.temp)

    case 'name':
      return result.sort((a, b) => a.name.localeCompare(b.name, 'ko'))

    default:
      return result
  }
})

const dataViewKey = computed(() => {
  return `${searchQuery.value}-${sortKey.value}-${rows.value}-${layout.value}`
})

const updateSearchQuery = (value) => {
  searchQuery.value = value
}

const updateSort = (value) => {
  sortKey.value = value
}

const updateRows = (value) => {
  rows.value = value
}

const updateLayout = (value) => {
  layout.value = value
}

const selectCity = (cityName) => {
  selectedCityInfo.value = `${cityName}을(를) 선택했습니다. 상세 정보를 확인해 보세요.`
}

const goToDetail = (city) => {
  router.push('/weather/' + city.id)
}

watch(selectedCityInfo, (newValue, oldValue) => {
  console.log('[watch] selectedCityInfo 변경')
  console.log('이전 값:', oldValue)
  console.log('현재 값:', newValue)
})

watchEffect(() => {
  console.log(`[watchEffect] 현재 검색어: ${searchQuery.value}`)
})

onMounted(() => {
  loadWeatherList()
})
</script>

<template>
  <section class="weather-page">
    <header class="page-header">
      <div>
        <h1>오늘의 날씨</h1>

        <p>현재 날씨를 확인하고 원하는 지역을 찾아보세요.</p>
      </div>
    </header>

    <section class="toolbar-panel">
      <WeatherToolbar
        :current-query="searchQuery"
        :sort-key="sortKey"
        :rows="rows"
        :layout="layout"
        @update-query="updateSearchQuery"
        @update-sort="updateSort"
        @update-rows="updateRows"
        @update-layout="updateLayout"
      />
    </section>

    <section class="weather-section">
      <div class="section-heading">
        <div>
          <h2>지역별 날씨</h2>

          <p>실시간 기온과 습도, 바람 정보를 확인할 수 있습니다.</p>
        </div>

        <div class="section-actions">
          <UnitToggler />

          <span class="result-count"> {{ displayedWeatherList.length }}개 결과 </span>
        </div>
      </div>

      <div v-if="loading" class="loading-area">
        <ProgressSpinner style="width: 42px; height: 42px" stroke-width="5" />

        <p>최신 날씨를 확인하고 있어요.</p>
      </div>

      <div v-else-if="errorMessage" class="error-message">
        <strong>날씨 정보를 불러오지 못했습니다.</strong>
        <span>잠시 후 다시 시도해 주세요.</span>
      </div>

      <template v-else>
        <DataView
          v-if="displayedWeatherList.length > 0"
          :key="dataViewKey"
          :value="displayedWeatherList"
          :layout="layout"
          paginator
          :rows="rows"
        >
          <template #grid="slotProps">
            <div class="weather-grid">
              <WeatherCard
                v-for="city in slotProps.items"
                :key="city.id"
                :city-item="city"
                layout="grid"
                @select-card="selectCity"
                @click-detail="goToDetail"
              />
            </div>
          </template>

          <template #list="slotProps">
            <div class="weather-list">
              <WeatherCard
                v-for="city in slotProps.items"
                :key="city.id"
                :city-item="city"
                layout="list"
                @select-card="selectCity"
                @click-detail="goToDetail"
              />
            </div>
          </template>
        </DataView>

        <div v-else class="empty-message">
          <strong>검색 결과가 없습니다.</strong>
          <span>다른 도시 이름으로 검색해 보세요.</span>
        </div>
      </template>
    </section>

    <div class="selection-note">
      <span class="selection-dot"></span>
      {{ selectedCityInfo }}
    </div>
  </section>
</template>

<style scoped>
.weather-page {
  box-sizing: border-box;
  width: calc(100% - 48px);
  max-width: 1180px;
  margin: 0 auto;
  padding: 48px 0 64px;
}

.page-header {
  margin-bottom: 28px;
}

.page-header h1 {
  margin: 0;
  color: var(--text);
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.page-header p {
  margin: 9px 0 0;
  color: var(--muted);
  font-size: 14px;
}

.toolbar-panel {
  padding: 20px;
  background-color: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(35, 56, 85, 0.04);
}

.weather-section {
  margin-top: 36px;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;
}

.section-heading h2 {
  margin: 0;
  color: var(--text);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.section-heading p {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 13px;
}

.section-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.result-count {
  padding: 8px 12px;
  color: var(--primary-dark);
  font-size: 12px;
  font-weight: 700;
  background-color: var(--primary-soft);
  border-radius: 999px;
  white-space: nowrap;
}

.weather-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.weather-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.loading-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 80px 20px;
}

.loading-area p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.error-message,
.empty-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 70px 20px;
  text-align: center;
  background-color: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
}

.error-message strong {
  color: #b75050;
}

.empty-message strong {
  color: var(--text);
}

.error-message span,
.empty-message span {
  color: var(--muted);
  font-size: 13px;
}

.selection-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 22px;
  color: var(--muted);
  font-size: 12px;
}

.selection-dot {
  width: 7px;
  height: 7px;
  background-color: var(--mint);
  border-radius: 50%;
}

:deep(.p-dataview-content) {
  background-color: transparent;
}

:deep(.p-paginator) {
  margin-top: 26px;
  padding: 10px;
  background-color: transparent;
  border: 0;
}

@media (max-width: 960px) {
  .weather-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .weather-page {
    width: calc(100% - 28px);
    padding: 30px 0 48px;
  }

  .page-header h1 {
    font-size: 27px;
  }

  .section-heading {
    flex-direction: column;
    align-items: flex-start;
  }

  .section-actions {
    width: 100%;
    justify-content: space-between;
  }

  .weather-grid {
    grid-template-columns: 1fr;
  }
}
</style>
