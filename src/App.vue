<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="header-inner">
        <RouterLink to="/" class="brand">
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="brand-name">Weather</span>
        </RouterLink>

        <nav class="navigation">
          <RouterLink to="/">날씨</RouterLink>
          <RouterLink to="/about">서비스 소개</RouterLink>
          <RouterLink to="/guide">이용 가이드</RouterLink>
        </nav>
      </div>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  --primary: #3d7edb;
  --primary-dark: #285fae;
  --primary-soft: #eaf3ff;

  --sun: #f4b860;
  --sun-soft: #fff5e5;

  --mint: #66b8a8;
  --mint-soft: #eaf8f5;

  --text: #17223b;
  --text-subtle: #435168;
  --muted: #7b8799;

  --surface: #ffffff;
  --surface-soft: #f7f9fc;
  --page: #f4f7fb;

  --line: #e4eaf2;

  min-height: 100vh;
  color: var(--text);
  background-color: var(--page);
}

.app-header {
  position: sticky;
  z-index: 20;
  top: 0;
  background-color: rgba(255, 255, 255, 0.94);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(12px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: calc(100% - 48px);
  max-width: 1180px;
  min-height: 72px;
  margin: 0 auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: var(--text);
  text-decoration: none;
}

.brand-mark {
  width: 28px;
  height: 28px;
  background:
    radial-gradient(circle at 38% 35%, #ffffff 0 10%, var(--sun) 11% 34%, transparent 35%),
    linear-gradient(135deg, #deefff, #f2f8ff);
  border: 1px solid #d8e8f8;
  border-radius: 10px;
}

.brand-name {
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 6px;
}

.navigation a {
  padding: 9px 12px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 650;
  text-decoration: none;
  border-radius: 9px;
  transition:
    color 0.18s ease,
    background-color 0.18s ease;
}

.navigation a:hover {
  color: var(--text);
  background-color: var(--surface-soft);
}

.navigation a.router-link-exact-active {
  color: var(--primary-dark);
  background-color: var(--primary-soft);
}

.app-main {
  min-height: calc(100vh - 73px);
}

@media (max-width: 768px) {
  .header-inner {
    width: calc(100% - 28px);
    min-height: auto;
    padding: 14px 0;
  }

  .brand-name {
    display: none;
  }

  .navigation {
    gap: 0;
  }

  .navigation a {
    padding: 8px;
    font-size: 12px;
  }
}
</style>
