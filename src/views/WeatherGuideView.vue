<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="page-container">
    <p class="eyebrow">GUIDE</p>

    <h1>📖 이용 가이드</h1>

    <ol>
      <li>메인 화면에서 지역별 날씨 정보를 확인합니다.</li>

      <li>검색창에 도시 이름을 입력해 원하는 도시를 검색합니다.</li>

      <li>날씨 카드를 클릭하면 해당 도시가 선택됩니다.</li>

      <li>상세보기 버튼을 누르면 해당 도시의 상세 페이지로 이동합니다.</li>
    </ol>

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

ol {
  padding-left: 22px;
  color: #6b7280;
  line-height: 2;
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
