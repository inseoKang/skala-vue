<script setup>
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import SelectButton from 'primevue/selectbutton'

defineProps({
  currentQuery: {
    type: String,
    required: true,
  },

  sortKey: {
    type: String,
    required: true,
  },

  rows: {
    type: Number,
    required: true,
  },

  layout: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update-query', 'update-sort', 'update-rows', 'update-layout'])

const sortOptions = [
  {
    label: '기본 순서',
    value: 'default',
  },
  {
    label: '기온 높은 순',
    value: 'temp-desc',
  },
  {
    label: '기온 낮은 순',
    value: 'temp-asc',
  },
  {
    label: '도시 이름순',
    value: 'name',
  },
]

const rowOptions = [
  {
    label: '5개씩 보기',
    value: 5,
  },
  {
    label: '10개씩 보기',
    value: 10,
  },
]

const layoutOptions = [
  {
    label: 'Grid',
    value: 'grid',
  },
  {
    label: 'List',
    value: 'list',
  },
]
</script>

<template>
  <div class="weather-toolbar">
    <div class="search-group">
      <label for="city-search">도시 검색</label>

      <InputText
        id="city-search"
        :model-value="currentQuery"
        placeholder="검색할 도시를 입력하세요"
        fluid
        @update:model-value="emit('update-query', $event)"
      />
    </div>

    <div class="toolbar-controls">
      <div class="control-group">
        <label>정렬</label>

        <Select
          :model-value="sortKey"
          :options="sortOptions"
          option-label="label"
          option-value="value"
          placeholder="정렬 기준"
          fluid
          @update:model-value="emit('update-sort', $event)"
        />
      </div>

      <div class="control-group">
        <label>표시 개수</label>

        <Select
          :model-value="rows"
          :options="rowOptions"
          option-label="label"
          option-value="value"
          fluid
          @update:model-value="emit('update-rows', $event)"
        />
      </div>

      <div class="control-group layout-group">
        <label>보기 방식</label>

        <SelectButton
          :model-value="layout"
          :options="layoutOptions"
          option-label="label"
          option-value="value"
          :allow-empty="false"
          @update:model-value="emit('update-layout', $event)"
        />
      </div>
    </div>

    <p class="query-info">
      현재 검색어:
      <strong>{{ currentQuery || '없음' }}</strong>
    </p>
  </div>
</template>

<style scoped>
.weather-toolbar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.search-group,
.control-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.search-group label,
.control-group label {
  color: #475569;
  font-size: 12px;
  font-weight: 700;
}

.toolbar-controls {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 14px;
  align-items: end;
}

.layout-group {
  min-width: 180px;
}

.query-info {
  margin: 0;
  color: #7b8494;
  font-size: 13px;
}

.query-info strong {
  color: #334155;
}

@media (max-width: 768px) {
  .toolbar-controls {
    grid-template-columns: 1fr;
  }

  .layout-group {
    min-width: 0;
  }
}
</style>
