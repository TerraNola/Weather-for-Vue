<template>
  <b-container fluid class="bg-blue">
    <b-row class="h-30 text-white">
      <b-col>
        <div class="row">
          <nav class="navbar navbar-dark NavShapka bg-blue">
            <!-- <md-autocomplete
                v-model="selectedCity"
                name="selectedCity"
                :md-options="CityArr"
                class="form-control mr-sm-2 mt-4"
                v-on:keyup.enter.prevent="
                  this.$store.commit('CITY', selectedCity)
                "
              >
                <label class=" text-white">City </label> </md-autocomplete
               > -->

            <!-- this.$store.commit('CITY', this.value) -->
            <b-nav-form>
              <b-input-group class="mt-3" size="sm">
                <b-form-input
                  placeholder="Город"
                  v-model="selectedCity"
                ></b-form-input>
                <b-input-group-append>
                  <b-button variant="light" type="submit">
                    OK
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-nav-form>

            <div class="bGroup">
              <div class="button-group">
                <div class="dgrad">
                  <p class="grad">°</p>
                </div>
                <b-button @click="SelectedCelsius(0)" class="c-button"
                  >C</b-button
                >

                <b-button @click="SelectedCelsius(32)" class="f-button"
                  >F</b-button
                >
              </div>
            </div>
          </nav>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data: () => ({
    selectedCity: null
  }),
  name: "MasterComp",
  props: {
    // CityArr: {
    //   type: Array
    // }
  },
  methods: {
    SelectedCelsius(num) {
      this.$eventHub.$emit("valchange", num);
    }
    // ...mapActions("weather", ["fetchWeatherInCity"])
  },
  watch: {
    selectedCity: () => {
      this.$store.dispatch("fetchWeatherInCity", this.selectedCity);
    }
  }
};
</script>

<style scoped>
.h-30 {
  height: 30%;
}
.NavShapka {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.dgrad {
  display: inline-block;
}
.grad {
  font-size: 200%;
  margin-right: 6px;
  text-align: center;
  position: relative;
  top: 1.1vh;
}
.bGroup {
  margin-right: 3vw;
}
.button-group {
  margin-top: 1vh;
}
.button {
  height: 4vh;
}
.c-button {
  border-radius: 15px 0 0 15px;
}
.f-button {
  border-radius: 0 15px 15px 0;
}
.bg-blue {
  background-color: #4b8bec;
}
</style>
