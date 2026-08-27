<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="page-container">
    <p class="eyebrow">ABOUT</p>

    <h1>🌤️ Weather Dashboard 소개</h1>

    <p>
      Weather Dashboard는 여러 지역의 날씨를 조회하고 원하는 도시의 상세 날씨 정보를 확인할 수 있는
      서비스입니다.
    </p>

    <p>Vue 컴포넌트와 Vue Router를 활용하여 페이지 이동 및 동적 라우팅을 구현했습니다.</p>

    <RouterLink class="home-link" to="/"> 메인 대시보드로 돌아가기 </RouterLink>
  </section>
</template>

<style scoped>
.page-container {
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

.eyebrow {
  margin: 0 0 6px;
  color: #3b82f6;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0 0 24px;
  color: #172033;
}

p {
  color: #6b7280;
  line-height: 1.7;
}

.home-link {
  display: inline-block;
  margin-top: 16px;
  padding: 10px 16px;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  background-color: #3b82f6;
  border-radius: 9px;
}

.home-link:hover {
  background-color: #2563eb;
}
</style>
