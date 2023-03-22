<template>
  <div class="gallery">
    <v-dialog v-model="dialog" max-width="85vw">
      <v-img :src="selectedImage" alt="" width="100%" @click.stop="dialog = false" />
    </v-dialog>
    <div class="gallery__row">
      <div class="gallery__col" v-for="client in images" :key="client.pathShort">
        <v-img
          class="gallery__image"
          :src="client.pathLong"
          width="350px"
          @click="zoom(client.pathLong)"
        ></v-img>
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
@media (max-width: 768px) {
  .gallery {
    &__row {
      justify-content: center;
    }
  }
}
</style>
<script>
export default {
  name: "SectionOurClients",
  data() {
    return {
      images: [],
      selectedImage: null,
      dialog: false,
    };
  },

  mounted() {
    this.importAll(require.context("../assets/Gallery", true, /\.png$/));
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) => this.images.push({ pathLong: r(key), pathShort: key }));
    },
    zoom(url) {
      console.log("Zoom", url);
      this.selectedImage = url;
      this.dialog = true;
    },
  },
};
</script>
