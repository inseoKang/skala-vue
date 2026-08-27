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
    label: '10개씩',
    value: 10,
  },
  {
    label: '5개씩',
    value: 5,
  },
]

const layoutOptions = [
  {
    label: '카드',
    value: 'grid',
  },
  {
    label: '목록',
    value: 'list',
  },
]
</script>

<template>
  <div class="weather-toolbar">
    <div class="search-control">
      <label for="city-search">도시 검색</label>

      <InputText
        id="city-search"
        :model-value="currentQuery"
        placeholder="서울, 부산, 제주..."
        fluid
        @update:model-value="emit('update-query', $event)"
      />
    </div>

    <div class="control">
      <label>정렬</label>

      <Select
        :model-value="sortKey"
        :options="sortOptions"
        option-label="label"
        option-value="value"
        fluid
        @update:model-value="emit('update-sort', $event)"
      />
    </div>

    <div class="control rows-control">
      <label>표시</label>

      <Select
        :model-value="rows"
        :options="rowOptions"
        option-label="label"
        option-value="value"
        fluid
        @update:model-value="emit('update-rows', $event)"
      />
    </div>

    <div class="control layout-control">
      <label>보기</label>

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
</template>

<style scoped>
.weather-toolbar {
  display: grid;
  grid-template-columns: minmax(260px, 2fr) minmax(180px, 1fr) 130px auto;
  gap: 12px;
  align-items: end;
}

.search-control,
.control {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

label {
  color: var(--text-subtle);
  font-size: 12px;
  font-weight: 700;
}

.layout-control {
  min-width: 140px;
}

:deep(.p-inputtext),
:deep(.p-select) {
  min-height: 42px;
  font-size: 13px;
  border-color: var(--line);
  border-radius: 10px;
  box-shadow: none;
}

:deep(.p-inputtext:focus),
:deep(.p-select.p-focus) {
  border-color: #9ac2ee;
  box-shadow: 0 0 0 3px rgba(61, 126, 219, 0.08);
}

:deep(.p-selectbutton) {
  display: flex;
}

:deep(.p-selectbutton .p-togglebutton) {
  min-height: 42px;
  padding: 0 14px;
  font-size: 12px;
}

@media (max-width: 850px) {
  .weather-toolbar {
    grid-template-columns: 1fr 1fr;
  }

  .search-control {
    grid-column: 1 / -1;
  }
}

@media (max-width: 560px) {
  .weather-toolbar {
    grid-template-columns: 1fr;
  }

  .search-control {
    grid-column: auto;
  }
}
</style>
