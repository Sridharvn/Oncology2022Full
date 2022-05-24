<template>
  <v-footer id="websitefooter" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in DownloadLinks"
        id="websitefooter"
        v-bind:src="link.linkSrc"
        v-on:click="linkDownloader(link)"
        :key="link"
        text
        rounded
        class="my-2"
      >
        {{ link.linkName }}
      </v-btn>
      <v-col id="websitefooter" cols="12">
        <!-- <v-img src="./../assets/ccrs-logo.png" style="height:50px;width:60px;"></v-img> -->
        <strong>Oncology 2022</strong>
        <!-- {{ new Date().getFullYear() }} — <strong>Vuetify</strong> -->
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
  props: {
    //
    DownloadLinks: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    //
    // this.consoler();
  },
  methods: {
    //
    // consoler() {
    //     console.log(this.DownloadLinks);
    // },
    linkDownloader(link) {
      //   console.log(link.linkSrc);
      // this.$router.push(link.linkSrc)

      axios({
        url: link.linkSrc,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.jpg");
        document.body.appendChild(link);
        link.click();
      });
    },
  },
};
</script>
<style>
#websitefooter {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;
}
</style>
