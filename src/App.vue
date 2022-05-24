<template>
  <v-app>
    <v-app-bar app elevation="5" id="appbar">
      <!-- <v-app-bar app elevation="10" elevate-on-scroll shrink-on-scroll id="appbar"> -->
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/ccrs-logo.png"
          transition="scale-transition"
          width="60"
        />
        <h2>Oncology 2022</h2>
      </div>
      <v-spacer></v-spacer>
      <drop-down :DownloadsLinks="DownloadsLinks" :name="Download"></drop-down>
    </v-app-bar>

    <v-main>
      <router-view :DownloadsLinks="DownloadsLinks" />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import gsap from "gsap";
import ScrollTriggerPlugin from "gsap/ScrollTrigger";
import DropDown from "./components/DropDown.vue";
export default {
  components: { DropDown },
  name: "App",

  data: () => ({
    //
    DownloadsLinks: [
      {
        linkName: "Brochure PDF (8 Mb)",
        linkSrc: "http://www.oncology2022.in/brochure-2022-1.pdf",
      },
      {
        linkName: "Registration Form (PDF)",
        linkSrc: "http://www.oncology2022.in/Registration-Form.pdf",
      },
      {
        linkName: "Fellowship Application Form (PDF)",
        linkSrc: "http://www.oncology2022.in/Fellowship-Application-Form.pdf",
      },
      {
        linkName: "Abstract Submission Form (PDF)",
        linkSrc: "http://www.oncology2022.in/Abstract-Submission-Form.pdf",
      },
      {
        linkName: "Abstract Instructions (PDF)",
        linkSrc: "http://www.oncology2022.in/Abstract-Instructions.pdf",
      },
    ],
  }),
  mounted() {
    //
    this.revealAnimation();
  },
  methods: {
    //
    revealAnimation() {
      gsap.registerPlugin(ScrollTriggerPlugin);
      gsap.from("h1,h2,h3,h4,h5,#Thanks", {
        duration: 1,
        opacity: 0,
        xPercent: -100,
        ease: "power4",
        stagger: 0.1,
      });
      gsap.from("img,p,.footer1,#image,#tables", {
        duration: 1,
        opacity: 0,
        xPercent: 100,
        ease: "power4",
        stagger: 0.1,
      });
    },
    linkDownloader(link) {
      // console.log(link.linkSrc);
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
    // function to read emitted value from downloadsLinks event
    addDataToDownloadLinks(data) {
      console.log("Data got : ", data);
      this.DownloadLinks = data;
    },
  },
};
</script>
<style>
@import "./styles/styleVariables.css";

#appbar {
  background-color: var(--appBar-color);
  color: var(--secondary-color);
}

* {
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  padding: 0;
  margin: 0;
}

p {
  font-family: "Roboto", sans-serif;
}
</style>
