<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

import BaseDashboardCard from '@/components/exercise/BaseDashboardCard.vue'
import SearchBar from '@/components/exercise/SearchBar.vue'
import WeatherCard from '@/components/exercise/WeatherCard.vue'

const router = useRouter()

const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
  { id: 'city_04', name: '대구', temp: 30, status: '맑음' },
  { id: 'city_09', name: '제주', temp: 29, status: '맑음' },
  { id: 'city_10', name: '강릉', temp: 21, status: '흐림' },
])

const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')

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
</script>

<template>
  <section class="weather-container">
    <div class="title-area">
      <p class="eyebrow">WEATHER DASHBOARD</p>

      <h1>🌤️ 과제 4: 날씨 (Vue Router)</h1>

      <p class="subtitle">Vue Router를 활용해 날씨 목록과 상세 페이지를 구성합니다.</p>
    </div>

    <BaseDashboardCard>
      <SearchBar :current-query="searchQuery" @update-query="updateSearchQuery" />
    </BaseDashboardCard>

    <BaseDashboardCard>
      <h2>🏙️ 지역별 날씨 현황</h2>

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
