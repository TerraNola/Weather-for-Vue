<template>
  <div id="app">
    <b-button>Button</b-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {},
  mounted() {
    this.fetchWeather();
    this.fetchWeatherDaily();
  },
  methods: {
    ...mapActions("weather", ["fetchWeather"])
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
