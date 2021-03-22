import Cities from "@/store/mock/cities";
import axios from "@/plugins/axios";
import mutations from "@/store/mutations";
import geoFindMe from "@/store/mock/geo";
console.log(geoFindMe());

// function parseResponse(response) {
//   return JSON.parse(response);
// }
//
// Это же надо было так наговнокодить/ Сейчас, вроде, все работает.
//

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
        let res = await geoFindMe();
        console.log(res);
        let { lon, lat } = res;
        console.log(lon, lat);
        const getCurrentWeather = axios.get(
          `/current?lat=${lat}&lon=${lon}&key=9043238e847141ea8c6d598199e07411`
        );
        const response = await getCurrentWeather;
        // const weather = parseResponse(response);
        console.log(response);
        commit(WEATHER, response);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchWeatherDaily({ commit }) {
      try {
        let res = await geoFindMe();
        console.log(res);
        let { lon, lat } = res;
        console.log(lon, lat);
        const getDailyWeather = axios.get(
          `/forecast/daily?lat=${lat}&lon=${lon}&key=9043238e847141ea8c6d598199e07411`
        );
        const response = await getDailyWeather;
        // const weatherDaily = parseResponse(response);
        console.log(response);
        commit(WEATHERDAILY, response);
      } catch (err) {
        console.log(err);
      }
    }
  }
};

export default weatherStore;
