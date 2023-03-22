<template>
  <div class="gallery">
    <div class="gallery__row">
      <div class="gallery__col" v-for="client in images" :key="client.pathShort">
        <v-img class="gallery__image" :src="client.pathLong" width="20vw"></v-img>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.gallery {
  &__col {
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 12px 17px 7px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: 0px 12px 17px 7px rgba(0, 0, 0, 0.53);
    box-shadow: 0px 12px 17px 7px rgba(0, 0, 0, 0.53);
  }

  &__image {
    margin: 5px;
    margin-bottom: 30px;
    -webkit-box-shadow: inset 0px 0px 137px 12px rgba(0, 0, 0, 1);
    -moz-box-shadow: inset 0px 0px 137px 12px rgba(0, 0, 0, 1);
    box-shadow: inset 0px 0px 137px 12px rgba(0, 0, 0, 1);
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
<script>
export default {
  name: "SectionOurClients",
  data() {
    return {
      images: [],
    };
  },

  mounted() {
    this.importAll(require.context("../../dist/img/Gallery", true, /\.png$/));
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) => this.images.push({ pathLong: r(key), pathShort: key }));
    },
  },
};
</script>
