<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useConfigStore } from '@/stores/configStore'
import { cities } from '@/data/cities'

import { getCurrentWeather, getWeatherForecast, getAirQuality } from '@/services/weatherApi'
import Button from 'primevue/button'

const route = useRoute()
const router = useRouter()
const configStore = useConfigStore()

const city = ref(null)
const forecastList = ref([])
const airQuality = ref(null)

const loading = ref(false)
const errorMessage = ref('')

const loadWeatherDetail = async () => {
  const cityId = route.params.cityId
  const targetCity = cities.find((cityItem) => cityItem.id === cityId)

  if (!targetCity) {
    errorMessage.value = '요청한 도시 정보를 찾을 수 없습니다.'
    return
  }

  loading.value = true
  errorMessage.value = ''

  try {
    const [weatherData, forecastData, airData] = await Promise.all([
      getCurrentWeather(targetCity.lat, targetCity.lon),
      getWeatherForecast(targetCity.lat, targetCity.lon),
      getAirQuality(targetCity.lat, targetCity.lon),
    ])

    city.value = {
      ...targetCity,
      temp: Math.round(weatherData.main.temp),
      feelsLike: Math.round(weatherData.main.feels_like),
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
      status: weatherData.weather[0]?.description ?? '정보 없음',
    }

    forecastList.value = forecastData.list.slice(0, 5).map((forecast) => ({
      dateTime: forecast.dt_txt,
      temp: Math.round(forecast.main.temp),
      status: forecast.weather[0]?.description ?? '정보 없음',
    }))

    airQuality.value = {
      pm10: airData.current?.pm10,
      pm25: airData.current?.pm2_5,
      aqi: airData.current?.us_aqi,
    }
  } catch (error) {
    console.error('상세 날씨 데이터를 가져오는 중 오류가 발생했습니다.', error)

    errorMessage.value = '상세 날씨 정보를 불러오지 못했습니다.'
  } finally {
    loading.value = false
  }
}

const goHome = () => {
  router.push('/')
}

onMounted(() => {
  loadWeatherDetail()
})
</script>

<template>
  <section class="detail-container">
    <div class="title-area">
      <p class="eyebrow">WEATHER DETAIL</p>

      <h1>🌤️ 날씨 상세 정보</h1>

      <p class="subtitle">실제 날씨 API를 활용한 도시별 상세 정보입니다.</p>
    </div>

    <p v-if="loading" class="loading-message">상세 날씨 정보를 불러오는 중입니다...</p>

    <div v-else-if="errorMessage" class="error-area">
      <p class="error-message">
        {{ errorMessage }}
      </p>

      <Button label="메인 대시보드로 돌아가기" @click="goHome" />
    </div>

    <template v-else-if="city">
      <div class="detail-card">
        <h2>📍 현재 날씨</h2>

        <div class="detail-row">
          <span>도시 ID</span>
          <strong>{{ city.id }}</strong>
        </div>

        <div class="detail-row">
          <span>도시</span>
          <strong>{{ city.name }}</strong>
        </div>

        <div class="detail-row">
          <span>현재 기온</span>
          <strong>
            {{ configStore.formatTemperature(city.temp) }}
          </strong>
        </div>

        <div class="detail-row">
          <span>체감 온도</span>
          <strong>
            {{ configStore.formatTemperature(city.feelsLike) }}
          </strong>
        </div>

        <div class="detail-row">
          <span>날씨 상태</span>
          <strong>{{ city.status }}</strong>
        </div>

        <div class="detail-row">
          <span>습도</span>
          <strong>{{ city.humidity }}%</strong>
        </div>

        <div class="detail-row">
          <span>풍속</span>
          <strong>{{ city.windSpeed }} m/s</strong>
        </div>
      </div>

      <div class="detail-card">
        <h2>🕒 시간대별 날씨 예보</h2>

        <div v-for="forecast in forecastList" :key="forecast.dateTime" class="forecast-row">
          <span class="forecast-time">
            {{ forecast.dateTime }}
          </span>

          <strong>
            {{ configStore.formatTemperature(forecast.temp) }}
          </strong>

          <span class="forecast-status">
            {{ forecast.status }}
          </span>
        </div>
      </div>

      <div v-if="airQuality" class="detail-card">
        <h2>🌫️ 대기질 정보</h2>

        <div class="detail-row">
          <span>PM10</span>
          <strong>{{ airQuality.pm10 }} μg/m³</strong>
        </div>

        <div class="detail-row">
          <span>PM2.5</span>
          <strong>{{ airQuality.pm25 }} μg/m³</strong>
        </div>

        <div class="detail-row">
          <span>US AQI</span>
          <strong>{{ airQuality.aqi }}</strong>
        </div>
      </div>

      <button @click="goHome">메인 대시보드로 돌아가기</button>
    </template>
  </section>
</template>

<style scoped>
.detail-container {
  box-sizing: border-box;
  width: calc(100% - 48px);
  max-width: 900px;
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
  margin: 0 0 16px;
  color: #263246;
  font-size: 17px;
}

.subtitle {
  margin: 8px 0 0;
  color: #7b8494;
  font-size: 14px;
}

.detail-card {
  margin-bottom: 24px;
  padding: 22px;
  background-color: #f8fafc;
  border: 1px solid #e3e8ef;
  border-radius: 14px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #e5e7eb;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-row span {
  color: #7b8494;
}

.detail-row strong {
  color: #263246;
  text-align: right;
}

.forecast-row {
  display: grid;
  grid-template-columns: 1.5fr 0.7fr 1fr;
  align-items: center;
  gap: 16px;
  padding: 15px 0;
  border-bottom: 1px solid #e5e7eb;
}

.forecast-row:last-child {
  border-bottom: none;
}

.forecast-time {
  color: #667085;
  font-size: 14px;
}

.forecast-row strong {
  color: #263246;
  text-align: center;
}

.forecast-status {
  color: #667085;
  text-align: right;
  font-size: 14px;
}

.loading-message,
.error-message {
  margin: 0 0 24px;
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

.error-area {
  text-align: center;
}

button {
  padding: 10px 16px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  background-color: #3b82f6;
  border: none;
  border-radius: 9px;
}

button:hover {
  background-color: #2563eb;
}

@media (max-width: 768px) {
  .detail-container {
    width: calc(100% - 24px);
    margin: 20px auto;
    padding: 24px 18px;
  }

  h1 {
    font-size: 23px;
  }

  .forecast-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .forecast-row strong,
  .forecast-status {
    text-align: left;
  }
}
</style>
