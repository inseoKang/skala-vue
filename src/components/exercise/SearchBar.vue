<script setup>
defineProps({
  currentQuery: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update-query'])

const handleInput = (event) => {
  emit('update-query', event.target.value)
}
</script>

<template>
  <div class="search-area">
    <h2>🔍 도시 검색</h2>

    <input
      type="text"
      :value="currentQuery"
      placeholder="검색할 도시 이름 입력"
      @input="handleInput"
    />

    <p>검색 중인 도시: {{ currentQuery }}</p>
  </div>
</template>

<style scoped>
.search-area h2 {
  margin: 0 0 14px;
  color: #263246;
  font-size: 17px;
}

.search-area input {
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

.search-area input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
}

.search-area p {
  margin: 9px 0 0;
  color: #6b7280;
  font-size: 13px;
}
</style>
