<template>
  <div id="app">
    <MasterComp :CityArr="CityArr" />
    <WeatherList :weather="weatherList" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import WeatherList from "@/components/WeatherList";
import MasterComp from "@/components/MasterComp";

export default {
  name: "app",
  components: {
    MasterComp,
    WeatherList
  },
  computed: {
    ...mapGetters("weather", ["weatherList", "weatherDailyList", "CityArr"])
  },
  mounted() {
    // this.fetchWeather();
    // this.fetchWeatherDaily();
  },
  methods: {
    ...mapActions("weather", ["fetchWeather", "fetchWeatherDaily"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
