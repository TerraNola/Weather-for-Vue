import Cities from "@/store/mock/cities";
import axios from "@/plugins/axios";
import mutations from "@/store/mutations";
import geoFindMe from "@/store/mock/geo";

function transformResponse(object) {
  return object.data.data[0];
}
function transformResponseDaily(object) {
  return object.data.data;
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
    CityArr: ({ cities }) => cities,
    weatherList: ({ weather }) => weather,
    weatherDailyList: ({ weatherDaily }) => weatherDaily
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
    initWeatherStore: {
      handler({ dispatch }) {
        dispatch("fetchWeather");
        dispatch("fetchWeatherDaily");
      },
      root: true
    },
    async fetchWeather({ commit }) {
      try {
        let res = await geoFindMe();
        let { lon, lat } = res;
        const getCurrentWeather = axios.get(
          `/current?lat=${lat}&lon=${lon}&key=9043238e847141ea8c6d598199e07411`
        );
        const response = await getCurrentWeather;
        const newResponse = transformResponse(response);
        commit(WEATHER, newResponse);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchWeatherDaily({ commit }) {
      try {
        let res = await geoFindMe();
        let { lon, lat } = res;
        const getDailyWeather = axios.get(
          `/forecast/daily?lat=${lat}&lon=${lon}&key=9043238e847141ea8c6d598199e07411`
        );
        const response = await getDailyWeather;
        const newResponse = transformResponseDaily(response);
        commit(WEATHERDAILY, newResponse);
      } catch (err) {
        console.log(err);
      }
    }
  }
};

export default weatherStore;
