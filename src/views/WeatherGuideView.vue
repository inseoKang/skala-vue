<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="guide-page">
    <header class="page-header">
      <h1>날씨 확인, 어렵지 않아요.</h1>

      <p>원하는 지역을 찾고 상세 날씨를 확인하는 방법을 네 단계로 간단하게 안내합니다.</p>

      <RouterLink to="/" class="start-link"> 바로 시작하기 </RouterLink>
    </header>

    <section class="steps-section">
      <div class="section-heading">
        <h2>이렇게 이용해 보세요.</h2>

        <p>검색부터 상세 날씨 확인까지 순서대로 진행하면 됩니다.</p>
      </div>

      <div class="steps-grid">
        <article class="step-card search-step">
          <span class="step-number">1</span>

          <div>
            <h3>도시를 찾아보세요.</h3>

            <p>검색창에 서울, 부산, 제주처럼 원하는 도시 이름을 입력하세요.</p>
          </div>
        </article>

        <article class="step-card sort-step">
          <span class="step-number">2</span>

          <div>
            <h3>보기 편하게 정리하세요.</h3>

            <p>기온순이나 도시 이름순으로 정렬하고 카드 또는 목록 형태를 선택할 수 있습니다.</p>
          </div>
        </article>

        <article class="step-card unit-step">
          <span class="step-number">3</span>

          <div>
            <h3>원하는 온도 단위를 선택하세요.</h3>

            <p>지역별 날씨 영역에서 °C와 °F 표시를 자유롭게 전환할 수 있습니다.</p>
          </div>
        </article>

        <article class="step-card detail-step">
          <span class="step-number">4</span>

          <div>
            <h3>자세한 날씨를 확인하세요.</h3>

            <p>
              자세히 보기를 누르면 체감 온도, 시간대별 예보와 대기질 정보를 함께 확인할 수 있습니다.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="tip-panel">
      <div class="tip-content">
        <span class="tip-label">TIP</span>

        <div>
          <h2>한 화면에서 비교해 보세요.</h2>

          <p>
            기온 높은 순이나 낮은 순으로 정렬하면 여러 지역의 현재 기온 차이를 빠르게 비교할 수
            있습니다.
          </p>
        </div>
      </div>

      <RouterLink to="/" class="weather-link"> 지역별 날씨 보기 </RouterLink>
    </section>

    <div class="bottom-navigation">
      <RouterLink to="/about" class="text-link"> 서비스가 궁금하다면 서비스 소개 보기 </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.guide-page {
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

.start-link,
.weather-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 16px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  background-color: var(--primary);
  border-radius: 10px;
  transition:
    transform 0.18s ease,
    background-color 0.18s ease;
}

.start-link {
  margin-top: 28px;
}

.start-link:hover,
.weather-link:hover {
  transform: translateY(-1px);
  background-color: var(--primary-dark);
}

.steps-section {
  margin-top: 68px;
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

.steps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 22px;
}

.step-card {
  display: flex;
  gap: 18px;
  min-height: 132px;
  padding: 22px;
  background-color: var(--surface);
  border: 1px solid var(--line);
  border-radius: 17px;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  color: var(--primary-dark);
  font-size: 13px;
  font-weight: 800;
  background-color: var(--primary-soft);
  border-radius: 11px;
}

.sort-step .step-number {
  color: #9a681d;
  background-color: var(--sun-soft);
}

.unit-step .step-number {
  color: #397c6f;
  background-color: var(--mint-soft);
}

.detail-step .step-number {
  color: #596cad;
  background-color: #eef1ff;
}

.step-card h3 {
  margin: 2px 0 0;
  color: var(--text);
  font-size: 16px;
  font-weight: 800;
}

.step-card p {
  margin: 9px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.tip-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 48px;
  padding: 27px 30px;
  background: linear-gradient(120deg, var(--mint-soft), #f7fbfa 52%, var(--primary-soft));
  border: 1px solid #dbece8;
  border-radius: 18px;
}

.tip-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.tip-label {
  flex-shrink: 0;
  padding: 5px 8px;
  color: #397c6f;
  font-size: 10px;
  font-weight: 900;
  background-color: #ffffff;
  border-radius: 7px;
}

.tip-panel h2 {
  margin: 0;
  color: var(--text);
  font-size: 17px;
  font-weight: 800;
}

.tip-panel p {
  max-width: 520px;
  margin: 7px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.weather-link {
  flex-shrink: 0;
}

.bottom-navigation {
  margin-top: 26px;
  text-align: center;
}

.text-link {
  color: var(--muted);
  font-size: 12px;
  text-decoration: none;
}

.text-link:hover {
  color: var(--primary-dark);
}

@media (max-width: 650px) {
  .guide-page {
    width: calc(100% - 28px);
    padding-top: 38px;
  }

  .page-header h1 {
    font-size: 30px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .tip-panel {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
