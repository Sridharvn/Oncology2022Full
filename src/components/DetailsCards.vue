<template>
  <v-card class="mx-auto" max-width="250" min-width="200">
    <v-img :src="require(`@/assets/${cardData.Image}`)" height="350px"></v-img>
    <!-- <v-img :src="require(`@/assets/${cardData.Image}`)" height="200px"></v-img> -->

    <v-card-title> {{ cardData.Name }} </v-card-title>

    <v-card-subtitle> {{ cardData.Designation }} </v-card-subtitle>
    <v-card-subtitle v-if="cardData.Department">
      {{ cardData.Department }}
    </v-card-subtitle>
    <v-card-subtitle> {{ cardData.Centre }} </v-card-subtitle>

    <!-- <v-card-actions @click="show = !show">
      <v-btn color="orange lighten-2" text> More Details </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ cardData.Centre }}
        </v-card-text>
      </div>
    </v-expand-transition> -->
  </v-card>
</template>
<script>
export default {
  data: () => ({
    show: true,
  }),
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
};
</script>
