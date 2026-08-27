<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UnitToggler from '@/components/exercise/UnitToggler.vue'
</script>

<template>
  <div class="app-container">
    <header class="header">
      <div class="header-inner">
        <h1>🌤️ Weather Dashboard</h1>

        <div class="navigation-area">
          <nav>
            <RouterLink to="/"> 날씨 </RouterLink>

            <RouterLink to="/about"> 서비스 소개 </RouterLink>

            <RouterLink to="/guide"> 이용 가이드 </RouterLink>
          </nav>

          <UnitToggler />
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
}

.header {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: calc(100% - 48px);
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 0;
}

.header h1 {
  margin: 0;
  color: #172033;
  font-size: 20px;
}

.navigation-area {
  display: flex;
  align-items: center;
  gap: 20px;
}

nav {
  display: flex;
  gap: 24px;
}

nav a {
  color: #6b7280;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

nav a:hover {
  color: #2563eb;
}

nav a.router-link-exact-active {
  color: #2563eb;
}

@media (max-width: 768px) {
  .header-inner {
    flex-direction: column;
    gap: 16px;
  }

  .navigation-area {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
