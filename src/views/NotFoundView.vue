<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="not-found-container">
    <p class="error-code">404</p>

    <h1>페이지를 찾을 수 없습니다.</h1>

    <p class="description">요청하신 주소에 해당하는 페이지가 존재하지 않습니다.</p>

    <RouterLink class="home-link" to="/"> 메인 대시보드로 돌아가기 </RouterLink>
  </section>
</template>

<style scoped>
.not-found-container {
  box-sizing: border-box;
  width: calc(100% - 48px);
  max-width: 900px;
  margin: 40px auto;
  padding: 60px 40px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #e7ebf0;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.error-code {
  margin: 0;
  color: #3b82f6;
  font-size: 72px;
  font-weight: 800;
}

h1 {
  margin: 8px 0;
  color: #172033;
}

.description {
  margin-bottom: 28px;
  color: #7b8494;
}

.home-link {
  display: inline-block;
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
