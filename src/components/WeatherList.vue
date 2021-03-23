<template>
  <BContainer>
    <h3 class="list-title">You best weather app</h3>
  </BContainer>
</template>

<script>
export default {
  name: "WeatherList",
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
