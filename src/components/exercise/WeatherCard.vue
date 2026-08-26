<script setup>
defineProps({
  cityItem: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select-card', 'click-detail'])
</script>

<template>
  <article class="weather-card" @click="emit('select-card', cityItem.name)">
    <div class="weather-info">
      <h3>{{ cityItem.name }} ({{ cityItem.status }})</h3>

      <p>
        현재 기온:
        <strong>{{ cityItem.temp }}°C</strong>
      </p>

      <span v-if="cityItem.temp >= 25" class="weather-badge hot"> 🔥 더움 (25도 이상) </span>

      <span v-else class="weather-badge cool"> ❄️ 선선함 (25도 미만) </span>
    </div>

    <button @click.stop="emit('click-detail', cityItem)">상세보기</button>
  </article>
</template>

<style scoped>
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

button {
  padding: 9px 15px;
  color: #2563eb;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
}

button:hover {
  background-color: #dbeafe;
}
</style>
