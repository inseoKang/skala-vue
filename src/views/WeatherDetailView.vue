<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useConfigStore } from '@/stores/configStore'

const route = useRoute()
const router = useRouter()
const configStore = useConfigStore()

const city = ref(null)

const mockWeatherData = [
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
  { id: 'city_04', name: '대구', temp: 30, status: '맑음' },
  { id: 'city_09', name: '제주', temp: 29, status: '맑음' },
  { id: 'city_10', name: '강릉', temp: 21, status: '흐림' },
]

onMounted(() => {
  const cityId = route.params.cityId

  city.value = mockWeatherData.find((cityItem) => cityItem.id === cityId)
})

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <section class="detail-container">
    <template v-if="city">
      <div class="title-area">
        <p class="eyebrow">WEATHER DETAIL</p>

        <h1>🌤️ {{ city.name }} 날씨 상세 정보</h1>

        <p class="subtitle">선택한 도시의 상세 날씨 정보입니다.</p>
      </div>

      <div class="detail-card">
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
          <strong>{{ configStore.formatTemperature(city.temp) }}</strong>
        </div>

        <div class="detail-row">
          <span>날씨 상태</span>
          <strong>{{ city.status }}</strong>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="title-area">
        <p class="eyebrow">WEATHER DETAIL</p>

        <h1>도시 정보를 찾을 수 없습니다.</h1>

        <p class="subtitle">요청한 도시 ID에 해당하는 Mock Data가 없습니다.</p>
      </div>
    </template>

    <button @click="goHome">메인 대시보드로 돌아가기</button>
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
</style>
