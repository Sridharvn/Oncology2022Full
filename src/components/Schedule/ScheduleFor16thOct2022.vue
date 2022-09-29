<template>
  <!-- <div class="schedule-container">
    <v-img src="./../../assets/schedule/Schedule16th1.png" max-width="1100px"></v-img>
    <v-img src="./../../assets/schedule/Schedule16th2.png" max-width="1100px"></v-img>
  </div> -->
  <div>
    <h1>16th October 2022 (Day 3)</h1>
    <h2 class="center text-color-class left">Meet the expert session in Oman Hall</h2>
    <h4 class="text-color-class">
      Dr. Shashikant Lele MD, FACOG,<br />
      Prof. Dr. Saby George MD,FACP <br />
      Dr. Patrick Boland MD
      <br />
      Prof. Dr. M V Pillai, MD, FACP
      <br />
      Dr. Ajith Venniyoor MD, DM
      <br />
      Dr. Kurian Joseph FRCR, FRCP
    </h4>
    <v-card class="mx-auto">
      <h2 class="center">16th October 2022 (Day 3) - Hall A</h2>
      <v-timeline align-top dense>
        <v-timeline-item v-for="schedule in scheduleListHallA" :key="schedule" small>
          <div class="time">{{ schedule.time }}</div>
          <br /><br />
          {{ schedule.Description }}
          <br /><br />
          <div class="speaker">{{ schedule.Speaker }}</div>
          <hr />
        </v-timeline-item>
      </v-timeline>
    </v-card>
    <v-card class="mx-auto">
      <h2 class="center">16th October 2022 (Day 3) - Hall B</h2>
      <v-timeline align-top dense>
        <v-timeline-item v-for="schedule in scheduleListHallB" :key="schedule" small>
          <div class="time">{{ schedule.time }}</div>
          <br /><br />
          {{ schedule.Description }}
          <br /><br />
          <div class="speaker">{{ schedule.Speaker }}</div>
          <hr />
        </v-timeline-item>
      </v-timeline>
    </v-card>
    <v-card class="mx-auto">
      <h2 class="center">16th October 2022 (Day 3) - Hall C</h2>
      <v-timeline align-top dense>
        <v-timeline-item v-for="schedule in scheduleListHallC" :key="schedule" small>
          <div class="time">{{ schedule.time }}</div>
          <br /><br />
          {{ schedule.Description }}
          <br /><br />
          <div class="speaker">{{ schedule.Speaker }}</div>
          <hr />
        </v-timeline-item>
      </v-timeline>
    </v-card>
    <!-- <h3>Gala Dinner 7:00PM Onwards</h3> -->
  </div>
</template>
<style>
.schedule-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script>
export default {
  data() {
    return {
      scheduleListHallA: [
        {
          time: "8:00-8:20",
          Description: "Update in the management of TNBC",
          Speaker: "Dr.Tracy O Connor MD",
        },
        {
          time: "8:25-8:45",
          Description: "NSCLC- KRAS & other emerging targets",
          Speaker: "Dr.Grace Dy MD,FACP",
        },
        {
          time: "8:55-9:35",
          Description:
            "Advances in the management of cancer of prostate oligo metastasis",
          Speaker: "Dr. Najeeb Mohideen MD, FRCP, FACR, FASTRO",
        },
        {
          time: "9:40-10:10",
          Description: "2022 updates in Rectal cancer",
          Speaker: "Dr. Kurian Joseph FRCR,FRCP",
        },
        {
          time: "10:15-10:35",
          Description: "Radical Radiotherapy for Ca gall bladder",
          Speaker: "Dr.Rahul Krishnatry MD",
        },
        {
          time: "10:40-11:00",
          Description: "Pancreatic cancer management of localized disease",
          Speaker: "Dr. Patrick Boland MD,FACP",
        },
        {
          time: "11:05-12:30",
          Description: "Management of advanced Urothelial cancer",
          Speaker: "Dr. Saby George MD,FACP",
        },
        {
          time: "12:35-13:00",
          Description:
            "Neo adjuvant chemo - immunotherapy in solid tumors - Is it going to produce a paradigm shift",
          Speaker: "Dr.Govind Babu MD,DM",
        },
        {
          time: "13:00-14:00",
          Description: "Lunch Break",
          Speaker: "",
        },
        {
          time: "14:05-14:35",
          Description: "Therapeutic Dilemmas in newly diagnosed Hodgkin's Lymphoma",
          Speaker: "Dr.Neeraj Sidharthan MD,DM",
        },
        {
          time: "14:40-15:00",
          Description:
            "Systemic Therapy for Gastric cancer; Current concepts and emerging options",
          Speaker: "Dr. Patrick Boland MD,FACP",
        },
        {
          time: "15:05-15:25",
          Description: "Risk adapted strategies for managing myeloma",
          Speaker: "Dr. Shaji Kumar MD, FACP",
        },
        {
          time: "15:30-15:50",
          Description:
            "Translating the biology of Diffuse Large B Cell Lymphoma into treatment",
          Speaker: "Prof.Dr. Hari Menon MD, DM",
        },
        {
          time: "15:55-16:15",
          Description:
            "Role of histology driven therapy and tumour agnostic therapy in advanced Soft Tissue Sarcomas",
          Speaker: "Dr. Krupa Shankar MD, DM",
        },
        {
          time: "16:20-16:40",
          Description:
            "Placing PARP-Inhibitors in the therapeutic strategy for the treatment of Breast cancer today",
          Speaker: "Dr. Aju Mathew MD, FACP, AB",
        },
      ],
      scheduleListHallB: [
        { time: "8:00-10:30", Description: "Free paper session", Speaker: "" },
        { time: "10:30-13:00", Description: "Poster presentation", Speaker: "" },
        {
          time: "16:45",
          Description: "Fellowship discussions and interview",
          Speaker: "",
        },
        {
          time: "16:45",
          Description: "Announcement of Results and Distribution of prizes",
          Speaker: "",
        },
        {
          time: "16:45",
          Description: "Valedictory function",
          Speaker: "",
        },
        {
          time: "16:45",
          Description: "National Anthem",
          Speaker: "",
        },
      ],
      scheduleListHallC: [
        {
          time: "8:00-10:30",
          Description: "Quiz competition- Medical Oncology (PG Students)",
          Speaker: "",
        },
        {
          time: "10:30-13:00",
          Description: "Quiz competition- Radiation Oncology (PG Students)",
          Speaker: "",
        },
        {
          time: "13:00-14:00",
          Description: "Quiz competition- Surgical Oncology (PG Students)",
          Speaker: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.schedule-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.center {
  display: flex;
  justify-content: center;
  color: var(--text-color);
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  color: var(--text-color);
}
.head {
  display: flex;
}

.top {
  align-items: flex-start;
}

.bottom {
  align-items: flex-end;
}

.left {
  justify-content: flex-start;
  color: var(--text-color) !important;
  padding-left: 10px;
}

.right {
  justify-content: flex-end;
}

.light-background {
  background-color: var(--Tab-color);
}

.dark-background {
  background-color: var(--text-color2);
  color: var(--background-color);
}
.text-color-class {
  color: var(--text-color);
}

td,
th {
  // set width to 33%
  width: 30%;
  text-align: justify;
  padding: 10px;
}
#sessions {
  text-align: left !important;
  margin-left: 10px;
}
.time {
  color: var(--link-color);
}
.speaker {
  color: var(--TabSlider-color);
}
@media only screen and (max-width: 893px) {
  h1 {
    font-size: large !important;
  }
}
</style>
