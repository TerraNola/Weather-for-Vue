<template>
  <b-container fluid class="bg-dark">
    <b-row class="h-30 text-white">
      <b-col>
        <div class="row">
          <nav class="navbar navbar-dark bg-dark NavShapka">
            <form class="form-inline">
              <md-autocomplete
                v-model="selectedCity"
                :md-options="CityArr"
                class="form-control mr-sm-2 mt-4"
              >
                <label class=" text-white">City </label> </md-autocomplete
              ><button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Ok
              </button>
            </form>
            <div class="bGroup">
              <b-button-group
                ><p class="grad">°</p>
                <b-button @click="SelectedCelsius(0)">C</b-button>

                <b-button @click="SelectedCelsius(32)">F</b-button>
              </b-button-group>
            </div>
          </nav>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data: () => ({
    selectedCity: null
  }),
  name: "MasterComp",
  props: {
    CityArr: {
      type: Array
    }
  },
  methods: {
    SelectedCelsius(num) {
      this.$eventHub.$emit("valchange", num);
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
.grad {
  font-size: 200%;
  margin-right: 10px;
  margin-top: 20px;
}
.bGroup {
  margin-right: 3vw;
}
</style>
