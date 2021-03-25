<template>
  <b-container class="bg-dark">
    <b-row class="h-30 text-white">
      <b-col>
        <div class="row">
          <nav class="navbar navbar-dark bg-dark NavShapka">
            <a class="navbar-brand"></a>
            <form class="form-inline">
              <md-autocomplete
                v-model="selectedCity"
                :md-options="CityArr"
                class="form-control mr-sm-2 mt-4"
              >
                <label class=" text-white">City</label>
              </md-autocomplete>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
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
  methods: {}
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
</style>
