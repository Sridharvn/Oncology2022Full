<template>
  <!-- <div class="schedule-container">
    <v-img src="./../../assets/schedule/Schedule16th1.png" max-width="1100px"></v-img>
    <v-img src="./../../assets/schedule/Schedule16th2.png" max-width="1100px"></v-img>
  </div> -->
  <div>
    <h1>16th October 2022 (Day 3)</h1>
    <h2 class="center text-color-class">Meet the expert session in Oman Hall</h2>
    <h4>
      1. Dr. Shashikant Lele MD, FACOG,<br />
      2. Prof. Dr. Saby George MD,FACP <br />
      3. Dr. Patrick Boland MD
      <br />
      4. Prof. Dr. M V Pillai, MD, FACP
      <br />
      5. Dr. Ajith Venniyoor MD, DM
      <br />
      6. Dr. Kurian Joseph FRCR, FRCP
    </h4>
    <v-card class="mx-auto">
      <h2 class="center">Hall A/Hall B/Hall C</h2>
      <v-timeline align-top dense>
        <v-timeline-item v-for="schedule in scheduleListHallA" :key="schedule" small>
          {{ schedule.Description }}
          <br />
          {{ schedule.Speaker }}
          <hr />
        </v-timeline-item>
      </v-timeline>
    </v-card>
    <v-card class="mx-auto">
      <h2 class="center">Hall B</h2>
      <v-timeline align-top dense>
        <v-timeline-item v-for="schedule in scheduleListHallB" :key="schedule" small>
          {{ schedule.Description }}
          <br />
          {{ schedule.Speaker }}
          <hr />
        </v-timeline-item>
      </v-timeline>
    </v-card>
    <v-card class="mx-auto">
      <h2 class="center">Hall C</h2>
      <v-timeline align-top dense>
        <v-timeline-item v-for="schedule in scheduleListHallC" :key="schedule" small>
          {{ schedule.Description }}
          <br />
          {{ schedule.Speaker }}
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
          Description: "2022 updates in Rectal cancer",
          Speaker: " Dr. Kurian Joseph FRCR, FRCP",
        },
        {
          Description: "Radical Radiotherapy for Ca gall bladder",
          Speaker: " Dr.Rahul Krishnatry MD",
        },
        {
          Description:
            "Pancreatic cancer management of localized disease. Current approach to management of Multiple Myeloma",
          Speaker: " Dr. Patrick Boland MD, FACP",
        },
        {
          Description:
            "Management of intermediate risk Prostate Cancer - What is the way forward? (Panel Discussion)",
          Speaker: "Dr. Najeeb Mohideen MD, FRCP, FACR, FASTRO",
        },
        {
          Description:
            "Translating the biology of Diffuse Large B Cell Lymphoma into treatment",
          Speaker: "Prof.Dr. Hari Menon MD, DM",
        },
        // {
        //   Description: "Newer directions in the curative treatment of Multiple Myeloma",
        //   Speaker: "Dr.Khaleel Ashraf MD, FACP",
        // },
        // {
        //   Description:
        //     "Placing PARP-Inhibitors in the therapeutic strategy for the treatment of Breast cancer today",
        //   Speaker: "Dr.Aju Mathew MD, FACP, AB",
        // },
        {
          Description: "Management of advanced Urothelial cancer",
          Speaker: " Dr. Saby George MD, FACP",
        },
        {
          Description:
            "Neo adjuvant chemo - immunotherapy in solid tumors - Is it going to produce a paradigm shift",
          Speaker: "Dr.Govind Babu MD, DM",
        },
        {
          Description: "Risk adopted strategies for managing Myeloma ",
          Speaker: "Dr. Shaji Kumar MD",
        },
        {
          Description: "Therapeutic Dilemmas in newly diagnosed Hodgkin’s Lymphoma",
          Speaker: " Dr.Neeraj Sidharthan MD, DM",
        },
        {
          Description:
            "Systemic Therapy for Gastric cancer; Current concepts and emerging options ",
          Speaker: "Dr. Patrick Boland MD, FACP",
        },
        {
          Description:
            "Management of Her2 over expressing metastatic Breast cancer - What is new?",
          Speaker: " Dr.Sudeep Gupta MD, DM",
        },
        {
          Description: "Update in the management of TNBC",
          Speaker: " Dr.Tracy O Connor MD",
        },
        {
          Description: "Small cell lung cancer: Management of extensive stage disease ",
          Speaker: "Dr.Grace Dy MD, FACP",
        },
        {
          Description:
            "Choosing between adjuvant and salvage Radiation treatment after Radical Prostatectomy",
          Speaker: "Dr. Najeeb Mohideen MD,FRCP,FACR, FASTRO",
        },
        {
          Description:
            "Placing PARP-Inhibitors in the therapeutic strategy for the treatment of Breast cancer today",
          Speaker: "Dr.Aju Mathew MD, FACP, AB",
        },
        {
          Description:
            "Role of histology driven therapy and tumour agnostic therapy in advanced Soft Tissue Sarcomas",
          Speaker: " Dr. Krupa Shankar MD, DM",
        },
        {
          Description: "NSCLC- KRAS & other emerging targets ",
          Speaker: "Dr.Grace Dy MD, FACP",
        },
      ],
      scheduleListHallB: [
        {
          Description: "Free paper session",
          Speaker: "",
        },
        {
          Description: "Poster presentation",
          Speaker: "",
        },
        {
          Description: "Quiz competition for PG Medical Oncologist",
          Speaker: "",
        },
        {
          Description: "Quiz competition for PG Radiation Oncologist",
          Speaker: "",
        },
        {
          Description: "Announcement of Results and Distribution of prizes",
          Speaker: "",
        },
      ],
      scheduleListHallC: [
        {
          Description: "E contouring session",
          Speaker: "",
        },
        {
          Description: "Co ordinator : ",
          Speaker: "Dr Jose Paul MD, FRCR",
        },
        {
          Description: "Faculty :",
          Speaker: "Dr Sreenivas Chilukuri MD",
        },
        {
          Description: "Dr Kurian Joseph FRCR FRCP",
          Speaker: "",
        },
        {
          Description: "Dr Umesh Mahant Shetty MD",
          Speaker: "",
        },
        {
          Description: "Dr K C Patro MD, DNB, MBA",
          Speaker: "",
        },
        {
          Description: "Dr Ajithkumar MD, FRCR, MRCP",
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
@media only screen and (max-width: 893px) {
  h1 {
    font-size: large !important;
  }
}
</style>
