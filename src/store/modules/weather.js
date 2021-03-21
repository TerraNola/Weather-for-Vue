import Cities from "@/store/mock/cities";
import axios from "@/plugins/axios";
import mutations from "@/store/mutations";
import geoFindMe from "@/store/mock/geo";

function parseResponse(response) {
  return JSON.parse(response);
}

const { WEATHER } = mutations;
const { WEATHERDAILY } = mutations;

const weatherStore = {
  namespaced: true,
  state: {
    cities: Cities,
    weather: {},
    weatherDaily: {}
  },
  getters: {
    CityObj: ({ cities }) => cities
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
    async fetchWeather({ commit }) {
      try {
        let res = await geoFindMe()
          .then(result => {
            return result;
          })
          .catch(err => console.log(err));
        console.log(res);
        let { lon, lat } = res;
        console.log(lon, lat);
        const getCurrentWeather = axios.get(`/current?lat=${lat}&lon=${lon}`);
        const response = await getCurrentWeather;
        const weather = parseResponse(response);
        console.log(weather);
        commit(WEATHER, weather);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchWeatherDaily({ commit }) {
      try {
        let res = await geoFindMe()
          .then(result => {
            return result;
          })
          .catch(err => console.log(err));
        console.log(res);
        let { lon, lat } = res;
        console.log(lon, lat);
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
