<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="about-page">
    <header class="page-header">
      <h1>날씨를 더 간편하게 확인하세요.</h1>

      <p>
        여러 지역의 현재 날씨부터 시간대별 예보와 대기질까지 한곳에서 빠르게 확인할 수 있습니다.
      </p>

      <div class="header-actions">
        <RouterLink to="/" class="primary-link"> 날씨 확인하기 </RouterLink>

        <RouterLink to="/guide" class="secondary-link"> 이용 방법 보기 </RouterLink>
      </div>
    </header>

    <section class="feature-section">
      <div class="section-heading">
        <h2>한눈에 필요한 날씨 정보</h2>

        <p>복잡한 정보는 줄이고 자주 확인하는 날씨 정보를 중심으로 구성했습니다.</p>
      </div>

      <div class="feature-grid">
        <article class="feature-card weather-feature">
          <span class="feature-number">01</span>

          <h3>실시간 날씨</h3>

          <p>여러 지역의 현재 기온, 습도와 바람 정보를 한 화면에서 비교할 수 있습니다.</p>
        </article>

        <article class="feature-card search-feature">
          <span class="feature-number">02</span>

          <h3>편리한 탐색</h3>

          <p>검색과 정렬, 카드·목록 보기를 활용하여 원하는 지역을 빠르게 찾아볼 수 있습니다.</p>
        </article>

        <article class="feature-card detail-feature">
          <span class="feature-number">03</span>

          <h3>상세 날씨</h3>

          <p>현재 날씨뿐 아니라 체감 온도와 시간대별 예보를 자세하게 확인할 수 있습니다.</p>
        </article>

        <article class="feature-card air-feature">
          <span class="feature-number">04</span>

          <h3>대기질 정보</h3>

          <p>PM10, PM2.5와 AQI를 함께 제공하여 외출 전에 대기 상태도 확인할 수 있습니다.</p>
        </article>
      </div>
    </section>

    <section class="info-banner">
      <div>
        <h2>원하는 지역의 날씨가 궁금한가요?</h2>

        <p>지역별 실시간 날씨를 확인하고 상세 정보까지 살펴보세요.</p>
      </div>

      <RouterLink to="/" class="banner-link"> 날씨 보러가기 </RouterLink>
    </section>
  </section>
</template>

<style scoped>
.about-page {
  box-sizing: border-box;
  width: calc(100% - 48px);
  max-width: 1080px;
  margin: 0 auto;
  padding: 58px 0 70px;
}

.page-header {
  max-width: 680px;
}

.page-header h1 {
  margin: 20px 0 0;
  color: var(--text);
  font-size: 38px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.045em;
}

.page-header > p {
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}

.header-actions {
  display: flex;
  gap: 10px;
  margin-top: 28px;
}

.primary-link,
.secondary-link,
.banner-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 16px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 10px;
  transition:
    transform 0.18s ease,
    background-color 0.18s ease;
}

.primary-link {
  color: #ffffff;
  background-color: var(--primary);
}

.primary-link:hover {
  transform: translateY(-1px);
  background-color: var(--primary-dark);
}

.secondary-link {
  color: var(--text-subtle);
  background-color: var(--surface);
  border: 1px solid var(--line);
}

.secondary-link:hover {
  background-color: var(--surface-soft);
}

.feature-section {
  margin-top: 70px;
}

.section-heading h2 {
  margin: 0;
  color: var(--text);
  font-size: 23px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.section-heading p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 13px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 22px;
}

.feature-card {
  min-height: 180px;
  padding: 24px;
  background-color: var(--surface);
  border: 1px solid var(--line);
  border-radius: 17px;
}

.weather-feature {
  border-top: 3px solid #78b2ed;
}

.search-feature {
  border-top: 3px solid var(--sun);
}

.detail-feature {
  border-top: 3px solid var(--mint);
}

.air-feature {
  border-top: 3px solid #9aafe8;
}

.feature-number {
  color: var(--muted);
  font-size: 11px;
  font-weight: 800;
}

.feature-card h3 {
  margin: 18px 0 0;
  color: var(--text);
  font-size: 17px;
  font-weight: 800;
}

.feature-card p {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.75;
}

.info-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 50px;
  padding: 28px 30px;
  background: linear-gradient(120deg, var(--primary-soft), #f5faff 55%, var(--sun-soft));
  border: 1px solid #dce9f6;
  border-radius: 18px;
}

.info-banner h2 {
  margin: 0;
  color: var(--text);
  font-size: 18px;
  font-weight: 800;
}

.info-banner p {
  margin: 7px 0 0;
  color: var(--muted);
  font-size: 12px;
}

.banner-link {
  flex-shrink: 0;
  color: #ffffff;
  background-color: var(--primary);
}

.banner-link:hover {
  background-color: var(--primary-dark);
}

@media (max-width: 650px) {
  .about-page {
    width: calc(100% - 28px);
    padding-top: 38px;
  }

  .page-header h1 {
    font-size: 30px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .info-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
