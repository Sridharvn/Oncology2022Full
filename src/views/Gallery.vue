<template>
  <div class="gallery">
    <h1 class="gallery__heading">Photos from the Event</h1>

    <GalleryImages></GalleryImages>
  </div>
</template>
<style lang="scss" scoped>
.gallery {
  &__heading {
    margin-bottom: 40px;
  }
}
</style>
<script>
import GalleryImages from "../components/GalleryImages.vue";

export default {
  components: { GalleryImages },
  data() {
    return {};
  },
};
</script>
