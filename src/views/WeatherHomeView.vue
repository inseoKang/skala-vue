<script setup>
import { ref, computed, watch, watchEffect, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import BaseDashboardCard from '@/components/exercise/BaseDashboardCard.vue'
import SearchBar from '@/components/exercise/SearchBar.vue'
import WeatherCard from '@/components/exercise/WeatherCard.vue'

import { cities } from '@/data/cities'
import { getCurrentWeather } from '@/services/weatherApi'

const router = useRouter()

const weatherList = ref([])
const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')

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

const updateSearchQuery = (value) => {
  searchQuery.value = value
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
      <p class="eyebrow">WEATHER DASHBOARD</p>

      <h1>🌤️ 과제 6: 날씨 (Axios)</h1>

      <p class="subtitle">OpenWeatherMap API를 활용해 실제 지역별 날씨 정보를 조회합니다.</p>
    </div>

    <BaseDashboardCard>
      <SearchBar :current-query="searchQuery" @update-query="updateSearchQuery" />
    </BaseDashboardCard>

    <BaseDashboardCard>
      <h2>🏙️ 지역별 실시간 날씨 현황</h2>

      <p v-if="loading" class="loading-message">날씨 정보를 불러오는 중입니다...</p>

      <p v-else-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>

      <template v-else>
        <WeatherCard
          v-for="city in filteredWeatherList"
          :key="city.id"
          :city-item="city"
          @select-card="selectCity"
          @click-detail="goToDetail"
        />

        <p v-if="searchQuery && filteredWeatherList.length === 0" class="empty-message">
          "{{ searchQuery }}"와 일치하는 도시가 없습니다.
        </p>
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
  max-width: 1100px;
  margin: 40px auto;
  padding: 36px 40px;
  background-color: #ffffff;
  border: 1px solid #e7ebf0;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.title-area {
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
}

.eyebrow {
  margin: 0 0 6px;
  color: #3b82f6;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0;
  color: #172033;
  font-size: 28px;
}

h2 {
  margin: 0 0 14px;
  color: #263246;
  font-size: 17px;
}

.subtitle {
  margin: 8px 0 0;
  color: #7b8494;
  font-size: 14px;
}

.guide-message {
  margin: 0;
  padding: 14px;
  color: #15803d;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  background-color: #ecfdf3;
  border: 1px solid #bbf7d0;
  border-radius: 10px;
}

.loading-message,
.error-message {
  margin: 0;
  padding: 30px 20px;
  text-align: center;
  border-radius: 10px;
}

.loading-message {
  color: #2563eb;
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
}

.error-message {
  color: #dc2626;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
}

.empty-message {
  margin: 0;
  padding: 30px 20px;
  color: #7b8494;
  text-align: center;
  background-color: white;
  border: 1px dashed #d4dbe5;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .weather-container {
    width: calc(100% - 24px);
    margin: 20px auto;
    padding: 24px 18px;
  }

  h1 {
    font-size: 23px;
  }
}
</style>
