<script setup>
import { ref } from 'vue'

const weatherList = ref([
  {
    id: 'city_01',
    name: '서울',
    temp: 28,
    status: '맑음',
  },
  {
    id: 'city_02',
    name: '수원',
    temp: 24,
    status: '비',
  },
  {
    id: 'city_03',
    name: '부산',
    temp: 26,
    status: '구름',
  },
  {
    id: 'city_04',
    name: '대구',
    temp: 30,
    status: '맑음',
  },
  {
    id: 'city_09',
    name: '제주',
    temp: 29,
    status: '맑음',
  },
  {
    id: 'city_10',
    name: '강릉',
    temp: 21,
    status: '흐림',
  },
])

const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')

const handleSearch = (event) => {
  searchQuery.value = event.target.value
}

const selectCity = (cityName) => {
  selectedCityInfo.value = `${cityName}이(가) 선택되었습니다.`
}

const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <section class="weather-container">
    <div class="title-area">
      <div>
        <p class="eyebrow">WEATHER DASHBOARD</p>
        <h1>🌤️ 과제 1: 날씨 (Mockup)</h1>
        <p class="subtitle">지역별 날씨를 확인하고 원하는 도시를 선택해 보세요.</p>
      </div>
    </div>

    <section class="search-section">
      <h2>🔍 도시 검색</h2>

      <input type="text" placeholder="검색할 도시 이름 입력" @input="handleSearch" />

      <p>검색 중인 도시: {{ searchQuery }}</p>
    </section>

    <section class="weather-section">
      <h2>🏙️ 지역별 날씨 현황</h2>

      <article
        v-for="city in weatherList"
        :key="city.id"
        class="weather-card"
        @click="selectCity(city.name)"
      >
        <div class="weather-info">
          <h3>{{ city.name }} ({{ city.status }})</h3>

          <p>
            현재 기온:
            <strong>{{ city.temp }}°C</strong>
          </p>

          <span v-if="city.temp >= 25" class="weather-badge hot"> 🔥 더움 (25도 이상) </span>

          <span v-else class="weather-badge cool"> ❄️ 선선함 (25도 미만) </span>
        </div>

        <button @click.stop="showDetail(city.name, city.status)">상세보기</button>
      </article>
    </section>

    <p class="guide-message">{{ selectedCityInfo }}</p>
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

.subtitle {
  margin: 8px 0 0;
  color: #7b8494;
  font-size: 14px;
}

.search-section,
.weather-section {
  margin-bottom: 22px;
  padding: 22px;
  background-color: #f8fafc;
  border: 1px solid #e3e8ef;
  border-radius: 14px;
}

.search-section h2,
.weather-section h2 {
  margin: 0 0 14px;
  color: #263246;
  font-size: 17px;
}

.search-section input {
  box-sizing: border-box;
  width: 100%;
  padding: 13px 14px;
  font-size: 14px;
  background-color: white;
  border: 1px solid #cfd6df;
  border-radius: 9px;
  outline: none;
  transition: 0.2s;
}

.search-section input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
}

.search-section p {
  margin: 9px 0 0;
  color: #6b7280;
  font-size: 13px;
}

.weather-card {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
  padding: 18px 20px;
  background-color: white;
  border: 1px solid #e0e5ec;
  border-radius: 12px;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.weather-card:hover {
  transform: translateY(-2px);
  border-color: #bfd4f6;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.07);
}

.weather-card:last-child {
  margin-bottom: 0;
}

.weather-info h3 {
  margin: 0 0 7px;
  color: #1f2937;
  font-size: 16px;
  font-weight: 700;
}

.weather-info p {
  margin: 0 0 10px;
  color: #667085;
  font-size: 14px;
}

.weather-info strong {
  color: #1f2937;
}

.weather-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 999px;
}

.hot {
  background-color: #ff6b6b;
}

.cool {
  background-color: #4dabf7;
}

.weather-card button {
  padding: 9px 15px;
  color: #2563eb;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  transition: 0.2s;
}

.weather-card button:hover {
  background-color: #dbeafe;
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

@media (max-width: 768px) {
  .weather-container {
    width: calc(100% - 24px);
    margin: 20px auto;
    padding: 24px 18px;
  }

  .weather-card {
    gap: 16px;
    padding: 16px;
  }

  h1 {
    font-size: 23px;
  }
}
</style>
