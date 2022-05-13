<template>
  <div class="home">
    <home-main></home-main>
    <v-row>
      <div v-for="cards in cardData" v-bind:key="cards.text">
        <v-col> <DetailsCards :cardData="cards"></DetailsCards></v-col>
      </div>
    </v-row>
  </div>
</template>

<script>
import HomeMain from "../components/HomeMain.vue";
import DetailsCards from "../components/DetailsCards.vue";

export default {
  name: "Home",
  components: {
    HomeMain,
    DetailsCards,
  },
  data() {
    return {
      //
      cardData: [
        {
          Image: "./../assets/317582_1100-732x549.jpg",
          Header: "Header1",
          Details: "Details1",
          Footer: "Footer1",
          Text: "Text for testing",
        },
        {
          Image: "./../assets/MSHS-Cancer-RadiationOncology-2col-685x375-3.jpg",
          Header: "Header2",
          Details: "Details2",
          Footer: "Footer2",
          Text: "Text for testing2",
        },
        {
          Image: "",
          Header: "",
          Details: "",
          Footer: "",
          Text: "",
        },
      ],
    };
  },
};
</script>
<style>
.home {
  margin-bottom: 10px;
}
</style>