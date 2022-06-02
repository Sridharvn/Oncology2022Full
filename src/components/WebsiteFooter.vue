<template>
  <v-footer id="websitefooter" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in DownloadLinks" id="websitefooter" v-bind:src="link.linkSrc"
        v-on:click="linkDownloader(link)" :key="link" text rounded class="my-2">
        <v-icon>mdi-download</v-icon>
        {{ link.linkName }}
      </v-btn>
      <v-col id="websitefooter" cols="12">
        <!-- <v-img src="./../assets/ccrs-logo.png" style="height:50px;width:60px;"></v-img> -->
        <!-- <strong >Oncology 2022</strong> -->
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
      // console.log(link.linkSrc);
      // this.$router.push(link.linkSrc)
      const filename = link.linkName;
      console.log("Inside axios function");
      window.open(link.linkSrc);
      axios({
        url: link.linkSrc,
        method: "GET",
        responseType: "blob",
        // withCredentials: true,
        crossorigin: true,
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET,POST,PUT",
        //     "Access-Control-Allow-Headers": "x-ms-*,content-*",
        //     "content-type": "*",
        // },
      }).then((response) => {
        console.log("Inside axios");
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename + ".pdf");
        document.body.appendChild(link);
        link.click();
      });
    },
  },
};
</script>
<style>
#websitefooter {
  /* Crowne Plaza colors */
  /* background-color: var(--primary-color);
  color: var(--secondary-color); */
  background-color: var(--appBar-color);
  color: var(--text-color);
  text-align: center;
  font-size: smaller;
  font-weight: 500;
}
</style>
