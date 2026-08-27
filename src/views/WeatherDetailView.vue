<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Button from 'primevue/button'
import Tag from 'primevue/tag'
import ProgressSpinner from 'primevue/progressspinner'

import { useConfigStore } from '@/stores/configStore'
import { cities } from '@/data/cities'

import { getCurrentWeather, getWeatherForecast, getAirQuality } from '@/services/weatherApi'

const route = useRoute()
const router = useRouter()
const configStore = useConfigStore()

const city = ref(null)
const forecastList = ref([])
const airQuality = ref(null)

const loading = ref(false)
const errorMessage = ref('')

const airQualityState = computed(() => {
  const aqi = Number(airQuality.value?.aqi)

  if (!Number.isFinite(aqi)) {
    return null
  }

  if (aqi <= 50) {
    return {
      label: '좋음',
      severity: 'success',
    }
  }

  if (aqi <= 100) {
    return {
      label: '보통',
      severity: 'info',
    }
  }

  if (aqi <= 150) {
    return {
      label: '민감군 주의',
      severity: 'warn',
    }
  }

  return {
    label: '나쁨',
    severity: 'danger',
  }
})

const formatForecastTime = (dateTime) => {
  if (!dateTime) {
    return ''
  }

  const [datePart, timePart] = dateTime.split(' ')
  const [, month, day] = datePart.split('-')

  return `${Number(month)}월 ${Number(day)}일 ${timePart.slice(0, 5)}`
}

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
  <section class="detail-page">
    <Button label="날씨 목록으로" text size="small" class="back-button" @click="goHome" />

    <div v-if="loading" class="loading-area">
      <ProgressSpinner style="width: 44px; height: 44px" stroke-width="5" />

      <p>날씨 정보를 불러오고 있어요.</p>
    </div>

    <div v-else-if="errorMessage" class="error-state">
      <strong>{{ errorMessage }}</strong>

      <p>날씨 목록으로 돌아가 다시 선택해 주세요.</p>

      <Button label="날씨 목록으로 돌아가기" @click="goHome" />
    </div>

    <template v-else-if="city">
      <header class="detail-header">
        <div>
          <h1>{{ city.name }} 날씨</h1>

          <p>현재 날씨와 앞으로의 예보를 확인해 보세요.</p>
        </div>

        <span class="updated-label"> 실시간 정보 </span>
      </header>

      <section class="current-weather-card">
        <div class="current-summary">
          <span class="summary-label"> 현재 날씨 </span>

          <strong class="current-temperature">
            {{ configStore.formatTemperature(city.temp) }}
          </strong>

          <p class="current-status">
            {{ city.status }}
          </p>

          <span class="feels-like">
            체감
            {{ configStore.formatTemperature(city.feelsLike) }}
          </span>
        </div>

        <div class="current-metrics">
          <div class="metric-card humidity">
            <span>습도</span>
            <strong>{{ city.humidity }}%</strong>
            <small>현재 상대습도</small>
          </div>

          <div class="metric-card wind">
            <span>바람</span>
            <strong>{{ city.windSpeed.toFixed(1) }} m/s</strong>
            <small>현재 풍속</small>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-title">
          <div>
            <h2>시간대별 예보</h2>

            <p>앞으로의 기온 변화를 확인해 보세요.</p>
          </div>
        </div>

        <div class="forecast-grid">
          <article v-for="forecast in forecastList" :key="forecast.dateTime" class="forecast-card">
            <span class="forecast-time">
              {{ formatForecastTime(forecast.dateTime) }}
            </span>

            <strong class="forecast-temp">
              {{ configStore.formatTemperature(forecast.temp) }}
            </strong>

            <span class="forecast-status">
              {{ forecast.status }}
            </span>
          </article>
        </div>
      </section>

      <section v-if="airQuality" class="content-section air-section">
        <div class="section-title">
          <div>
            <h2>대기질</h2>

            <p>현재 지역의 미세먼지와 대기질 정보입니다.</p>
          </div>

          <Tag
            v-if="airQualityState"
            :value="airQualityState.label"
            :severity="airQualityState.severity"
            rounded
          />
        </div>

        <div class="air-grid">
          <article class="air-card aqi-card">
            <span>US AQI</span>

            <strong>
              {{ airQuality.aqi ?? '-' }}
            </strong>

            <small>대기질 지수</small>
          </article>

          <article class="air-card pm10-card">
            <span>PM10</span>

            <strong>
              {{ airQuality.pm10 ?? '-' }}
            </strong>

            <small>μg/m³</small>
          </article>

          <article class="air-card pm25-card">
            <span>PM2.5</span>

            <strong>
              {{ airQuality.pm25 ?? '-' }}
            </strong>

            <small>μg/m³</small>
          </article>
        </div>
      </section>

      <div class="detail-footer">
        <Button label="다른 지역 날씨 보기" outlined @click="goHome" />
      </div>
    </template>
  </section>
</template>

<style scoped>
.detail-page {
  box-sizing: border-box;
  width: calc(100% - 48px);
  max-width: 980px;
  margin: 0 auto;
  padding: 34px 0 70px;
}

.back-button {
  margin-bottom: 22px;
  padding-left: 0;
  color: var(--muted);
  font-size: 12px;
}

.detail-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 26px;
}

.detail-header h1 {
  margin: 0;
  color: var(--text);
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.detail-header p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 14px;
}

.updated-label {
  padding: 7px 11px;
  color: var(--primary-dark);
  font-size: 11px;
  font-weight: 700;
  background-color: var(--primary-soft);
  border-radius: 999px;
}

.current-weather-card {
  display: grid;
  grid-template-columns: minmax(260px, 1.15fr) minmax(300px, 1fr);
  gap: 24px;
  padding: 30px;
  background: linear-gradient(135deg, #edf6ff 0%, #f8fbff 55%, #fff7e9 100%);
  border: 1px solid #dce9f6;
  border-radius: 20px;
  box-shadow: 0 12px 34px rgba(35, 71, 111, 0.07);
}

.current-summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.summary-label {
  padding: 6px 10px;
  color: var(--primary-dark);
  font-size: 11px;
  font-weight: 800;
  background-color: rgba(255, 255, 255, 0.72);
  border-radius: 999px;
}

.current-temperature {
  margin-top: 24px;
  color: var(--text);
  font-size: 60px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.07em;
}

.current-status {
  margin: 13px 0 0;
  color: var(--text-subtle);
  font-size: 16px;
  font-weight: 700;
}

.feels-like {
  margin-top: 8px;
  color: var(--muted);
  font-size: 13px;
}

.current-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  align-self: center;
}

.metric-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 15px;
}

.metric-card.humidity {
  border-bottom: 3px solid #76b7eb;
}

.metric-card.wind {
  border-bottom: 3px solid var(--mint);
}

.metric-card span {
  color: var(--muted);
  font-size: 11px;
}

.metric-card strong {
  margin-top: 8px;
  color: var(--text);
  font-size: 21px;
  font-weight: 800;
}

.metric-card small {
  margin-top: 5px;
  color: #9aa6b6;
  font-size: 10px;
}

.content-section {
  margin-top: 36px;
}

.section-title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 16px;
}

.section-title h2 {
  margin: 0;
  color: var(--text);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.section-title p {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 12px;
}

.forecast-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
}

.forecast-card {
  display: flex;
  flex-direction: column;
  min-height: 128px;
  padding: 17px;
  background-color: var(--surface);
  border: 1px solid var(--line);
  border-radius: 15px;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.forecast-card:nth-child(odd) {
  border-top: 3px solid #a9cdf2;
}

.forecast-card:nth-child(even) {
  border-top: 3px solid #f1c77f;
}

.forecast-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(35, 56, 85, 0.06);
}

.forecast-time {
  color: var(--muted);
  font-size: 11px;
  line-height: 1.4;
}

.forecast-temp {
  margin-top: 18px;
  color: var(--text);
  font-size: 22px;
  font-weight: 800;
}

.forecast-status {
  margin-top: auto;
  color: var(--text-subtle);
  font-size: 11px;
}

.air-section {
  padding-top: 4px;
}

.air-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.air-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: var(--surface);
  border: 1px solid var(--line);
  border-radius: 15px;
}

.aqi-card {
  background-color: var(--primary-soft);
  border-color: #d5e7fa;
}

.pm10-card {
  background-color: var(--mint-soft);
  border-color: #d9eee9;
}

.pm25-card {
  background-color: var(--sun-soft);
  border-color: #f3e2c3;
}

.air-card span {
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
}

.air-card strong {
  margin-top: 9px;
  color: var(--text);
  font-size: 26px;
  font-weight: 800;
}

.air-card small {
  margin-top: 4px;
  color: var(--muted);
  font-size: 10px;
}

.detail-footer {
  display: flex;
  justify-content: center;
  margin-top: 42px;
}

.loading-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 130px 20px;
}

.loading-area p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 90px 20px;
  text-align: center;
  background-color: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
}

.error-state strong {
  color: var(--text);
  font-size: 17px;
}

.error-state p {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 13px;
}

@media (max-width: 800px) {
  .current-weather-card {
    grid-template-columns: 1fr;
  }

  .forecast-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .detail-page {
    width: calc(100% - 28px);
    padding-top: 24px;
  }

  .detail-header {
    align-items: flex-start;
  }

  .detail-header h1 {
    font-size: 27px;
  }

  .current-weather-card {
    padding: 22px;
  }

  .current-temperature {
    font-size: 50px;
  }

  .current-metrics {
    grid-template-columns: 1fr;
  }

  .forecast-grid {
    grid-template-columns: 1fr;
  }

  .air-grid {
    grid-template-columns: 1fr;
  }
}
</style>
