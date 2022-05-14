<template>
  <div class="home">
    <home-main></home-main>
    <br /><br />
    <v-spacer></v-spacer>
    <v-row justify="center">
      <div v-for="cards in cardData" v-bind:key="cards.text">
        <v-col> <DetailsCards :cardData="cards"></DetailsCards></v-col>
        <v-spacer></v-spacer>
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
          Image: "317582_1100-732x549.jpg",
          Header: "Header1",
          Details: "Details1",
          Footer: "Footer1",
          Text: "Text for testing",
        },
        {
          Image: "MSHS-Cancer-RadiationOncology-2col-685x375-3.jpg",
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
  margin-bottom: 100px;
}
</style>