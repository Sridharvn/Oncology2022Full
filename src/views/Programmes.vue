<template>
  <div>
    <v-tabs
      v-model="tab"
      background-color="var(--primary-color)"
      color="var(--text-color)"
      grow
      show-arrows
    >
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
      <!-- <v-tab-item value="item">
                <ScheduleFor13thOct2022></ScheduleFor13thOct2022>
            </v-tab-item> -->
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <HomeMain v-if="deviceType != 'mobile'"></HomeMain>
        <!-- <v-card color="var(--primary-color)" flat> -->
        <!-- <v-card-text>{{ text }}</v-card-text> -->
        <ScheduleFor13thOct2022 v-if="tab == 0"></ScheduleFor13thOct2022>
        <ScheduleFor14thOct2022 v-if="tab == 1"></ScheduleFor14thOct2022>
        <ScheduleFor15thOct2022 v-if="tab == 2"></ScheduleFor15thOct2022>
        <ScheduleFor16thOct2022 v-if="tab == 3"></ScheduleFor16thOct2022>
        <!-- </v-card> -->
      </v-tab-item>
    </v-tabs-items>
    <BusAnnouncement></BusAnnouncement>
    <v-tabs
      v-model="tab"
      background-color="var(--appBar-color)"
      color="var(--text-color)"
      grow
      show-arrows
    >
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
      <!-- <v-tab-item value="item">
                <ScheduleFor13thOct2022></ScheduleFor13thOct2022>
            </v-tab-item> -->
    </v-tabs>
    <!-- <BusAnnouncement></BusAnnouncement> -->

    <!-- <v-img src="./../assets/BusAnnouncement.png"></v-img> -->
  </div>
</template>

<script>
import ScheduleFor13thOct2022 from "../components/Schedule/ScheduleFor13thOct2022.vue";
import ScheduleFor14thOct2022 from "../components/Schedule/ScheduleFor14thOct2022.vue";
import ScheduleFor15thOct2022 from "../components/Schedule/ScheduleFor15thOct2022.vue";
import ScheduleFor16thOct2022 from "../components/Schedule/ScheduleFor16thOct2022.vue";
import BusAnnouncement from "../components/BusAnnouncement.vue";
import HomeMain from "../components/HomeMain.vue";
export default {
  props: {
    deviceType: {
      type: String,
      default: "desktop",
    },
  },
  data() {
    return {
      tab: null,
      items: [
        "13th October 2022",
        "14th October 2022",
        "15th October 2022",
        "16th October 2022",
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      schedules: ["ScheduleFor13thOct2022.vue"],
    };
  },
  components: {
    ScheduleFor13thOct2022,
    ScheduleFor14thOct2022,
    ScheduleFor15thOct2022,
    ScheduleFor16thOct2022,
    BusAnnouncement,
    HomeMain,
  },
};
</script>
