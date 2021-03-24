<template>
  <b-container class="bg-dark">
    <b-row class="h-60 text-white">
      <b-col class="text-center"
        ><h3 class="list-title">You best weather app</h3>
        <p>City: {{ weather.city_name }}</p>
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
        ><p>Температура: {{ weather.app_temp }}°</p>
        <p>Ощущаемая температура": {{ weather.app_temp }}</p>
      </b-col>
      <b-col class="text-center mt-3">
        <p>Направление ветра:{{ weather.wind_cdir_full }}</p>
        <p>Скорость ветра: {{ weather.wind_spd }} m/s</p></b-col
      >
      <b-col class="d-flex align-items-center">
        <p>Атмосферное давление: {{ weather.pres * 0.75 }} рт. ст.</p>
      </b-col>
      <b-col class="d-flex align-items-center">
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
  }
};
</script>
<style scoped>
.list-title {
  font-size: 40px;
  margin-bottom: 30px;
}
.h-60 {
  height: 60%;
}
.h-30 {
  height: 30%;
}
</style>
