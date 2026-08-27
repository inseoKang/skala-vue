import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => ({
    unit: 'celsius',
  }),

  getters: {
    unitSymbol: (state) => {
      return state.unit === 'celsius' ? '°C' : '°F'
    },

    formatTemperature: (state) => {
      return (celsiusTemp) => {
        if (state.unit === 'fahrenheit') {
          const fahrenheitTemp = Math.round((celsiusTemp * 9) / 5 + 32)
          return `${fahrenheitTemp}°F`
        }

        return `${celsiusTemp}°C`
      }
    },
  },

  actions: {
    toggleUnit() {
      this.unit = this.unit === 'celsius' ? 'fahrenheit' : 'celsius'
    },
  },
})
