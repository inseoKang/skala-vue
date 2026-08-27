<script setup>
import { ref, computed, watch, watchEffect, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import DataView from 'primevue/dataview'
import ProgressSpinner from 'primevue/progressspinner'

import BaseDashboardCard from '@/components/exercise/BaseDashboardCard.vue'
import WeatherToolbar from '@/components/exercise/WeatherToolbar.vue'
import WeatherCard from '@/components/exercise/WeatherCard.vue'

import { cities } from '@/data/cities'
import { getCurrentWeather } from '@/services/weatherApi'

const router = useRouter()

const weatherList = ref([])

const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')

const sortKey = ref('default')
const rows = ref(5)
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
  selectedCityInfo.value = `${cityName}이(가) 선택되었습니다.`
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
  <section class="weather-container">
    <div class="title-area">
      <div>
        <p class="eyebrow">WEATHER DASHBOARD</p>

        <h1>🌤️ 실시간 날씨 대시보드</h1>

        <p class="subtitle">
          PrimeVue UI Library를 활용하여 날씨 정보를 검색하고 정렬할 수 있습니다.
        </p>
      </div>

      <div class="city-count">
        <strong>{{ displayedWeatherList.length }}</strong>
        <span>개 도시</span>
      </div>
    </div>

    <BaseDashboardCard>
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
    </BaseDashboardCard>

    <BaseDashboardCard>
      <div class="section-header">
        <div>
          <h2>🏙️ 지역별 실시간 날씨</h2>

          <p>원하는 도시를 선택해 상세 날씨를 확인해 보세요.</p>
        </div>

        <span class="result-count"> 총 {{ displayedWeatherList.length }}건 </span>
      </div>

      <div v-if="loading" class="loading-area">
        <ProgressSpinner style="width: 44px; height: 44px" stroke-width="5" />

        <p>날씨 정보를 불러오는 중입니다...</p>
      </div>

      <p v-else-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>

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

        <p v-else class="empty-message">"{{ searchQuery }}"와 일치하는 도시가 없습니다.</p>
      </template>
    </BaseDashboardCard>

    <p class="guide-message">
      {{ selectedCityInfo }}
    </p>
  </section>
</template>

<style scoped>
.weather-container {
  box-sizing: border-box;
  width: calc(100% - 48px);
  max-width: 1180px;
  margin: 40px auto;
}

.title-area {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 7px;
  color: #3b82f6;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

h1 {
  margin: 0;
  color: #172033;
  font-size: 30px;
}

.subtitle {
  margin: 8px 0 0;
  color: #7b8494;
  font-size: 14px;
}

.city-count {
  display: flex;
  align-items: baseline;
  gap: 5px;
  padding: 13px 18px;
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
}

.city-count strong {
  color: #2563eb;
  font-size: 22px;
}

.city-count span {
  color: #64748b;
  font-size: 13px;
}

.section-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.section-header h2 {
  margin: 0;
  color: #263246;
  font-size: 18px;
}

.section-header p {
  margin: 6px 0 0;
  color: #94a3b8;
  font-size: 13px;
}

.result-count {
  padding: 7px 11px;
  color: #2563eb;
  font-size: 12px;
  font-weight: 700;
  background-color: #eff6ff;
  border-radius: 999px;
  white-space: nowrap;
}

.weather-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.weather-list {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.loading-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 45px 20px;
}

.loading-area p {
  margin: 0;
  color: #2563eb;
  font-size: 14px;
  font-weight: 600;
}

.error-message {
  margin: 0;
  padding: 30px 20px;
  color: #dc2626;
  text-align: center;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
}

.empty-message {
  margin: 0;
  padding: 45px 20px;
  color: #7b8494;
  text-align: center;
  background-color: #f8fafc;
  border: 1px dashed #d4dbe5;
  border-radius: 12px;
}

.guide-message {
  margin: 20px 0 0;
  padding: 14px;
  color: #15803d;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  background-color: #ecfdf3;
  border: 1px solid #bbf7d0;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .weather-container {
    width: calc(100% - 24px);
    margin: 24px auto;
  }

  .title-area {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 24px;
  }

  .weather-grid {
    grid-template-columns: 1fr;
  }

  .section-header {
    flex-direction: column;
  }
}
</style>
