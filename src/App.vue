<template>
  <v-app>
    <v-app-bar app elevation="5" id="appbar">
      <!-- <v-app-bar app elevation="10" elevate-on-scroll shrink-on-scroll id="appbar"> -->
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="redirectToHome()">
          <v-img class="shrink mr-2" contain src="./assets/ccrs-logo.png" transition="scale-transition" width="60" />
        </v-app-bar-nav-icon>
        <v-toolbar-title @click="redirectToHome()">
          <strong>Oncology 2022</strong>
        </v-toolbar-title>
      </div>
      <template v-slot:extension>
        <v-tabs v-model="tabs" background-color="var(--Tab-color)" center-active dark fixed-tabs
          color="var(--TabSlider-color)" show-arrows>
          <v-tabs-slider color="var(--TabSlider-color)"></v-tabs-slider>
          <v-tab @click="redirectToHome()" id="Tabs">
            Home
          </v-tab>
          <v-tab @click="redirectToOrganizingOutlinePage()" id="Tabs">
            Scientific Programme
          </v-tab>
          <v-tab @click="redirectToInternationalFaculty()" id="Tabs">
            International Faculty
          </v-tab>
          <v-tab @click="redirectToNationalFaculty()" id="Tabs">
            National Faculty
          </v-tab>
          <v-tab @click="redirectToOrganizingCommitteePage()" id="Tabs">
            Organizing Committee
          </v-tab>

        </v-tabs>
      </template>
      <v-spacer></v-spacer>
      <drop-down :DownloadsLinks="DownloadsLinks" :name="Download" id="DropDown"></drop-down>

    </v-app-bar>

    <v-main>
      <!-- <v-icon>mdi-home</v-icon> -->
      <v-speed-dial fixed right bottom>
        <template v-slot:activator>
          <v-btn elevation="24" @click="redirectToHome()" color="var(--primary-color)">
            <v-icon large color="var(--text-color)">mdi-home</v-icon>
          </v-btn>
        </template>
      </v-speed-dial>
      <router-view style="margin:0%;padding:0%;" :deviceType="deviceType" />

    </v-main>

    <website-footer :DownloadLinks="DownloadsLinks"></website-footer>
    <!-- <br>
    <div id="footer">Cybernet Developers</div> -->
  </v-app>
</template>

<script>
import axios from "axios";
// import gsap from "gsap";
import DropDown from "./components/DropDown.vue";
import WebsiteFooter from "./components/WebsiteFooter.vue";
export default {
  components: { DropDown, WebsiteFooter },
  name: "App",

  data: () => ({
    //
    tabs: null,
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
    this.deviceType();
  },
  methods: {
    //
    deviceType() {
      // const ua = navigator.userAgent;
      // if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      //   this.deviceType = "tablet";
      // }
      // else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      //   this.deviceType = "mobile";
      // }
      // this.deviceType = "desktop";
      const width = window.innerWidth;
      if (width < 768) {
        this.deviceType = "mobile";
      }
      else {
        this.deviceType = "desktop";
      }
      console.log(this.deviceType);
    },
    revealAnimation() {
      // gsap.from("h1,h2,h3,h4,h5,#Thanks", {
      //   duration: 1,
      //   opacity: 0,
      //   xPercent: -100,
      //   ease: "power4",
      //   stagger: 0.1,
      // });
      // gsap.from("img,p,.footer1,#image,#tables,#dropDown", {
      //   duration: 1,
      //   opacity: 0,
      //   xPercent: 100,
      //   ease: "power4",
      //   stagger: 0.1,
      // });
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
      // console.log("Data got : ", data);
      this.DownloadLinks = data;
    },
    redirectToHome() {
      this.tabs = "Home"
      window.scrollTo(0, 0);
      this.$router.push({ path: '/' });
    },
    redirectToOrganizingCommitteePage() {
      this.tabs = "Scientific Programme"
      window.scrollTo(0, 0);
      this.$router.push({ path: '/Committee' });
    },
    redirectToInternationalFaculty() {
      this.tabs = "International Faculty"
      window.scrollTo(0, 0);
      this.$router.push({ path: '/InternationalFaculty' });
    },
    redirectToNationalFaculty() {
      this.tabs = "National Faculty"
      window.scrollTo(0, 0);
      this.$router.push({ path: '/NationalFaculty' });
    },
    redirectToOrganizingOutlinePage() {
      this.tabs = "Organizing Committee"
      window.scrollTo(0, 0);
      this.$router.push({ path: '/Outline' });
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

/* disable scroll bar */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

#TopButtons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--primary-color);
  padding: 10px;
}
#footer{
  background-color: var(--dark-color);
  color: var(--primary-color);
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

@media screen and (max-width: 460px) {
  #appbar {
    font-size: x-small;
  }

  #DropDOWN {
    font-size: xx-small;
  }
}

#Tabs {
  color: var(--text-color);
}
</style>
