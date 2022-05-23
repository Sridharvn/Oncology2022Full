<template>
  <v-app>
    <v-app-bar app elevation="5" id="appbar">
      <!-- <v-app-bar app elevation="10" elevate-on-scroll shrink-on-scroll id="appbar"> -->
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="./assets/ccrs-logo.png" transition="scale-transition"
          width="60" />
        <h2>Oncology 2022</h2>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import gsap from 'gsap'
import ScrollTriggerPlugin from 'gsap/ScrollTrigger'
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    //
    this.revealAnimation();
  },
  methods: {
    //
    revealAnimation() {
      gsap.registerPlugin(ScrollTriggerPlugin);
      gsap.from('h1,h2,h3,h4,h5,#Thanks', {
        duration: 1,
        opacity: 0,
        xPercent: -100,
        ease: "power4",
        stagger: 0.1
      });
      gsap.from('img,p,.footer1,#image,#tables', {
        duration: 1,
        opacity: 0,
        xPercent: 100,
        ease: "power4",
        stagger: 0.1
      });
    }
  }
};
</script>
<style>
@import './styles/styleVariables.css';

#appbar {
  background-color: var(--appBar-color);
  color: var(--secondary-color);
}

* {
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  padding: 0;
  margin: 0;
}

p {
  font-family: 'Roboto', sans-serif;
}
</style>