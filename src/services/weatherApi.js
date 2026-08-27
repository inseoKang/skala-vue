import axios from 'axios'

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

const openWeatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 5000,
})

export const getCurrentWeather = async (lat, lon) => {
  const response = await openWeatherApi.get('/weather', {
    params: {
      lat,
      lon,
      appid: OPENWEATHER_API_KEY,
      units: 'metric',
      lang: 'kr',
    },
  })

  return response.data
}

export const getWeatherForecast = async (lat, lon) => {
  const response = await openWeatherApi.get('/forecast', {
    params: {
      lat,
      lon,
      appid: OPENWEATHER_API_KEY,
      units: 'metric',
      lang: 'kr',
    },
  })

  return response.data
}

export const getAirQuality = async (lat, lon) => {
  const response = await axios.get('https://air-quality-api.open-meteo.com/v1/air-quality', {
    params: {
      latitude: lat,
      longitude: lon,
      current: 'pm10,pm2_5,us_aqi',
      timezone: 'Asia/Seoul',
    },
  })

  return response.data
}
