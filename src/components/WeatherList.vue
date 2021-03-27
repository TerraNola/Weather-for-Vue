<template>
  <b-container fluid class="bg-dark">
    <b-row class="h-60 text-white">
      <b-col class="text-center">
        <p>Вы находитесь в: {{ weather.city_name }}</p>
        <template v-if="weather.weather">
          <p>
            <img
              v-bind:src="
                `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`
              "
            />
          </p>
        </template>
      </b-col>
    </b-row>
    <b-row class="h-30 text-white">
      <b-col class="text-center mt-3"
        ><p>Температура: {{ weather.app_temp + SelectedCelsius }}°</p>
        <p>Ощущаемая температура": {{ weather.app_temp + SelectedCelsius }}</p>
      </b-col>
      <b-col class="text-center mt-3">
        <p>Направление ветра:{{ weather.wind_cdir_full }}</p>
        <p>Скорость ветра: {{ weather.wind_spd }} m/s</p></b-col
      >
      <b-col class="text-center mt-3">
        <p>
          Атмосферное давление:
          {{ weather.pres * 0.75 }} рт. ст.
        </p>
      </b-col>
      <b-col class="text-center mt-3">
        <p>Относительная влажность: {{ weather.rh }}%</p></b-col
      >
    </b-row>

    <p></p>
  </b-container>
</template>

<script>
export default {
  name: "WeatherList",
  props: {
    weather: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    SelectedCelsius: 0
  }),
  created() {
    this.$eventHub.$on("valchange", num => {
      this.SelectedCelsius = num;
    });
  }
};
</script>
<style scoped>
.list-title {
  font-size: 40px;
  margin-bottom: 30px;
}
.h-60 {
  height: 60vh;
}
.h-30 {
  height: 30vh;
}
</style>
