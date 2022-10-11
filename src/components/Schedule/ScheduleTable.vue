<template>
  <div class="body">
    <!-- <h1>Schedule</h1> -->
    <v-img
      src="./../../assets/schedule/Schedule-Table2.png"
      class="image"
      contain
    ></v-img>
  </div>
</template>
<style lang="scss">
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.image {
  margin-top: 10px;
  height: 1500px;
  width: 1500px;
}
@media screen and (max-width: 1500px) {
  .image {
    max-height: 1300px;
    max-width: 1300px;
  }
}
@media screen and (max-width: 1350px) {
  .image {
    max-height: 1000px;
    max-width: 1000px;
  }
}
@media screen and (max-width: 1050px) {
  .image {
    max-height: 900px;
    max-width: 900px;
  }
}
@media screen and (max-width: 920px) {
  .image {
    max-height: 850px;
    max-width: 850px;
  }
}
@media screen and (max-width: 860px) {
  .image {
    max-height: 650px;
    max-width: 650px;
  }
}
@media screen and (max-width: 680px) {
  .image {
    max-height: 450px;
    max-width: 450px;
  }
}
@media screen and (max-width: 460px) {
  .image {
    max-height: 350px;
    max-width: 350px;
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
};
</script>
