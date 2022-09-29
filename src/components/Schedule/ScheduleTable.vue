<template>
  <div class="body">
    <v-img src="./../../assets/schedule/Schedule-Table.png" class="image" contain></v-img>
  </div>
</template>
<style lang="scss">
.body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
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
