import Cities from "@/store/mock/cities";
import axios from "@/plugins/axios";
import mutations from "@/store/mutations";
import geoFindMe from "@/store/mock/geo";

function parseResponse(response) {
  return JSON.parse(response);
}

const { WEATHER, WEATHERDAILY } = mutations;

const weatherStore = {
  namespaced: true,
  state: {
    cities: Cities,
    geo: geoFindMe(),
    weather: {},
    weatherDaily: {}
  },
  getters: {
    CityObj: ({ cities }) => cities,
    GetGeo: geoFindMe()
  },
  mutations: {
    [WEATHER](state, value) {
      state.weather = value;
    },
    [WEATHERDAILY](state, value) {
      state.weatherDaily = value;
    }
  },
  actions: {
    async fetchWeather({ getters, commit }) {
      try {
        const { GetGeo } = getters;
        const getLatLon = await GetGeo;
        let { lon, lat } = getLatLon;
        const getCurrentWeather = axios.get(`/current?lat=${lat}&lon=${lon}`);
        const response = await getCurrentWeather;
        const weather = parseResponse(response);
        console.log(weather);
        commit(WEATHER, weather);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchWeatherDaily({ getters, commit }) {
      try {
        const { GetGeo } = getters;
        const getLatLon = await GetGeo;
        let { lon, lat } = getLatLon;
        const getDailyWeather = axios.get(
          `/forecast/daily?lat=${lat}&lon=${lon}`
        );
        const response = await getDailyWeather;
        const weatherDaily = parseResponse(response);
        commit(WEATHERDAILY, weatherDaily);
      } catch (err) {
        console.log(err);
      }
    }
  }
};

export default weatherStore;
