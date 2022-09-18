<template>
  <!-- <div class="schedule-container">
    <v-img src="./../../assets/schedule/Schedule15th1.png" max-width="1100px"></v-img>
    <v-img src="./../../assets/schedule/Schedule15th2.png" max-width="1100px"></v-img>
    <v-img src="./../../assets/schedule/Schedule15th3.png" max-width="1100px"></v-img>
  </div> -->
  <div>
    <h1>15th October 2022 (Day 2)</h1>
    <h2 class="center text-color-class">Meet the expert session in Oman Hall</h2>
    <h4>
      1. Dr. Shashikant Lele MD, FACOG,<br />
      2. Dr. M V Pillai, MD, FACP <br />
      3. Dr. Patrick Boland MD
      <br />
      4. Dr. Nisar M Syed MD, FACRO, FRCS
      <br />
      5. Dr. T Ajithkumar MD, MRCP, FRCR
      <br />
      6. Dr. Ajith Venniyoor MD, DM<br />
      7. Dr. Kurian Joseph FRCR, FRCP
    </h4>
    <h5 class="center text-color-class">
      Meet the expert sessions will be conducted in designated locations at the conference
      centre. Those who are interested may contact the secretariat : +917736232123
    </h5>
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
    <br />
    <h3>Musical Evening - 7:00PM - Hall A</h3>
    <h4 class="text-color-class">By Playback singers Afsal, Akhila Anand and Party</h4>
    <h4 class="text-color-class">And Dinner</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scheduleListHallA: [
        {
          Description: "Global Breast Cancer — Initiative of WHO",
          Speaker: "Dr.M.V.Pillai MD,FACP",
        },
        {
          Description: "Surgery for Breast Cancer in 2022",
          Speaker: "Dr. Shishir Shetty MS,MCh",
        },
        {
          Description: "Radiotherapy in Breast Cancer in 2022 ",
          Speaker: "Dr. Vijayanand Reddy MD",
        },
        {
          Description: "Challenging Breast Cancer Cases - Panel Discussion",
          Speaker: "Moderator Dr.Pavithran MD, DM",
        },
        {
          Description: "Oligo-metastasis in NonSmallCell Lung Cancer - Panel Discussion",
          Speaker: "Moderator: Dr.J.P.Agarwal MD",
        },
        {
          Description: "Cholangiocarcinoma - The current state of play ",
          Speaker: "DrT.Ajithkumar MD, MRCP, FRCR",
        },
        {
          Description: "What’s new in CRC: An update from ASCO 2022 ",
          Speaker: "Dr. M V Pillai, MD, FACP",
        },
        {
          Description:
            "Role of Check Point Inhibitors in the management of Metastatic Renal Cell Carcinoma",
          Speaker: "Dr. Saby George MD, FACP",
        },
        {
          Description:
            "Prostate cancer brachytherapy-Long term results at Long Beach, California",
          Speaker: "Dr. Nisar M Syed MD, FRCS",
        },
        {
          Description: "Ovarian cancer — Past, Present and future",
          Speaker: "Dr. Shashikant Lele MD, FACOG",
        },
        {
          Description: "Definition and treatment of HER 2 low Breast cancers ",
          Speaker: "Dr. Tracey O’ Connor MD ",
        },
        {
          Description: "Transform the Journey for your HER2+ve Breast cancer patients",
          Speaker: "TBC",
        },
        // {
        //   Description: "Transform the Journey for your HER2+ve Breast cancer patients",
        //   Speaker: "TBC",
        // },
        {
          Description:
            "Managing CNS tumours in Children and Young Adults - Challenges and the way forward ",
          Speaker: "Dr. Rakesh Jalali MD",
        },
        {
          Description:
            "Can we extrapolate dose de-escalation in HPV positive anal canal cancer? ",
          Speaker: "Dr. Rahul Krishnatry MD",
        },
        {
          Description: "Non Small Cell Lung Cancer-Immunotherapy and the way for it ",
          Speaker: "Prof. Dr Raju Titus Chacko MD",
        },
      ],
      scheduleListHallB: [
        {
          Description: "Lunch symposium ",
          Speaker: "TBC",
        },
        {
          Description: "Role of a medical Acupuncturist in cancer patient management ",
          Speaker: "Dr. K. Vinayakom MD, FFARCS",
        },
        {
          Description:
            "WHO 2021 classification of CNS tumours - Salient features and clinical impact",
          Speaker: "Dr. Rakesh Jalali MD ",
        },
        {
          Description: "PIK3CA mutated advanced breast cancer: What have we learned?",
          Speaker: "Dr. Anita Ramesh MD, DM ",
        },
        {
          Description: "Current concepts in the management of type 1 Endometrial cancer",
          Speaker: "Dr. Umesh Mahant Shetty MD",
        },
        // {
        //   Description: "Improving outcomes in Cervical cancer ",
        //   Speaker: "Dr. Umesh Mahant Shetty MD",
        // },
        {
          Description: "MIBC: Preservation of Bladder Cancer - Panel discussion",
          Speaker: "",
        },
        {
          Description: "Panel discussion on HCC",
          Speaker: " Moderator: Dr. Arun Warrier MD, DM,FRCP",
        },
        {
          Description: "Surgery in HCC ",
          Speaker: "Dr.Sudhindran MS,FRCS",
        },
        {
          Description: "TARE & TACE",
          Speaker: "Dr. Mathew Cherian MD",
        },
        {
          Description: "RFA",
          Speaker: "Dr. Lijesh MD",
        },
        {
          Description: "SBRT",
          Speaker: "Dr. Deb Narayan Dutta MD",
        },
        {
          Description: "PROTON THERAPY",
          Speaker: "TBA",
        },
        {
          Description: "Medical Management - Panel Discussion",
          Speaker: "TBA",
        },
        {
          Description: "Lung Cancer case study - Panel Discussion",
          Speaker: "TBA",
        },
      ],
      scheduleListHallC: [
        {
          Description: "Oral presentations& discussion",
          Speaker: "",
        },
        {
          Description: "Meet the expert sessions",
          Speaker: "",
        },
        {
          Description:
            "Case based panel discussions on head and neck and colorectal carcinomas",
          Speaker: "",
        },
        // {
        //   Description: "",
        //   Speaker: "",
        // },
        // {
        //   Description: "",
        //   Speaker: "",
        // },
        // {
        //   Description: "",
        //   Speaker: "",
        // },
        // {
        //   Description: "",
        //   Speaker: "",
        // },
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
