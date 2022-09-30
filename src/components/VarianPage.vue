<template>
  <div class="body">
    <!-- <h2>Varian</h2> -->
    <v-img src="./../assets/VarianPage.png" class="image" contain></v-img>
  </div>
</template>
<style lang="scss" scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
}
.image {
  margin-top: 10px;
  max-height: 650px;
  max-width: 650px;
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
