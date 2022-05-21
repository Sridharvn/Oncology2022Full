<template>
  <div>
    <v-row>
      <v-col>
        <div class="footer1">
          <v-row>
            <!-- {{ Footer }} -->
            <v-col>{{ Footer.name }}</v-col>
          </v-row>
          <v-row>
            <v-col>{{ Footer.designation }}</v-col>
          </v-row>
          <v-row>
            <v-col>{{ Footer.phone }}</v-col>
          </v-row>
          <v-row>
            <v-col>{{ Footer.email }}</v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    //
  }),
  props: {
    //
    Footer: {
      type: Object,
      required: true,
    },
  },
};
</script>