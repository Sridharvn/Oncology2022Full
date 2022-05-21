<template>
  <v-card class="mx-auto" max-width="344" min-width="320">
    <v-img :src="require(`@/assets/${cardData.Image}`)" height="200px"></v-img>
    <!-- <v-img :src="require(`@/assets/${cardData.Image}`)" height="200px"></v-img> -->

    <v-card-title> {{ cardData.Header }} </v-card-title>

    <v-card-subtitle> {{ cardData.Details }} </v-card-subtitle>

    <v-card-actions @click="show = !show">
      <v-btn color="orange lighten-2" text> More Details </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <!-- <v-btn icon @click="show = !show"> -->
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ cardData.Text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
};
</script>