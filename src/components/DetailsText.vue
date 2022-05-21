<template>
  <div>
    <v-row>
      <v-col>
        <h1>{{ DetailstextData.Header }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h4>{{ DetailstextData.wish }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          {{ DetailstextData.Details }}
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col> {{ DetailstextData.Thanks }}</v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-row>
      <v-col>
        <details-footer :Footer="DetailstextData.Footer1"></details-footer>
      </v-col>
      <v-col>
        <details-footer :Footer="DetailstextData.Footer2"></details-footer>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import DetailsFooter from "./DetailsFooter.vue";
export default {
  components: { DetailsFooter },
  name: "",
  data: () => ({
    //
  }),
  props: {
    //
    DetailstextData: {
      type: Object,
      required: true,
    },
  },
};
</script>
