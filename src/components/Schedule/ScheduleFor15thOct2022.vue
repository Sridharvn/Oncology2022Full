<template>
  <!-- <div class="schedule-container">
    <v-img src="./../../assets/schedule/Schedule15th1.png" max-width="1100px"></v-img>
    <v-img src="./../../assets/schedule/Schedule15th2.png" max-width="1100px"></v-img>
    <v-img src="./../../assets/schedule/Schedule15th3.png" max-width="1100px"></v-img>
  </div> -->
  <div>
    <h1>15th October 2022 (Day 2)</h1>
    <h2 class="center text-color-class left">Meet the expert session in Oman Hall</h2>
    <h4 class="text-color-class">
      Dr. Shashikant Lele MD, FACOG,<br />
      Dr. M V Pillai, MD, FACP <br />
      Dr. Patrick Boland MD
      <br />
      Dr. Nisar M Syed MD, FACRO, FRCS
      <br />
      Dr. T Ajithkumar MD, MRCP, FRCR
      <br />
      Dr. Ajith Venniyoor MD, DM<br />
      Dr. Kurian Joseph FRCR, FRCP
    </h4>
    <!-- <h4>
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
    </h4> -->
    <h5 class="center text-color-class">
      Meet the expert sessions will be conducted in designated locations at the conference
      centre. Those who are interested may contact the secretariat : +917736232123
    </h5>
    <v-card class="mx-auto">
      <h2 class="center">15th October 2022 (Day 2) - Hall A</h2>
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
      <h2 class="center">15th October 2022 (Day 2) - Hall B</h2>
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
      <h2 class="center">15th October 2022 (Day 2) - Hall C</h2>
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
    <br />
    <!-- <h3 class="text2-color-class">Musical Evening - 7:00PM - Hall A</h3>
    <h4 class="text2-color-class">
      By Playback singers <span class="text2-color-class">Afsal, Akhila Anand</span> and
      Party
    </h4> -->
    <h4 class="text2-color-class">And Dinner</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scheduleListHallA: [
        {
          time: "8:00-8:30",
          Description: "Definition and treatment of HER 2 low Breast cancers ",
          Speaker: "Dr. Tracey O' Connor MD ",
        },
        {
          time: "8:35-9:05",
          Description: "Global Breast Cancer — Initiative of WHO",
          Speaker: "Dr.M.V.Pillai MD,FACP",
        },
        {
          time: "9:10-9:40",
          Description: "Surgery for Breast Cancer in 2022",
          Speaker: "Dr. Shishir Shetty MS,MCh",
        },
        {
          time: "9:45-10:15",
          Description: "Radiotherapy in Breast Cancer in 2022 ",
          Speaker: "Dr. Vijayanand Reddy MD",
        },
        {
          time: "10:20-10:50",
          Description: "Past, Present & future in Chronic Myeloid Leukemia",
          Speaker: "Dr. S H Advani MD, PhD",
        },
        {
          time: "10:55-11:25",
          Description: "Oligo-metastasis in NonSmallCell Lung Cancer - Panel Discussion",
          Speaker: "Moderator: Dr.J.P.Agarwal MD",
        },
        {
          time: "11:30-12:00",
          Description: "Cholangiocarcinoma - The current state of play ",
          Speaker: "DrT.Ajithkumar MD, MRCP, FRCR",
        },
        {
          time: "12:05-12:35",
          Description: "What's new in CRC: An update from ASCO 2022 ",
          Speaker: "Dr. M V Pillai, MD, FACP",
        },
        {
          time: "12:40-13:10",
          Description:
            "Role of Check Point Inhibitors in the management of Metastatic Renal Cell Carcinoma",
          Speaker: "Dr. Saby George MD, FACP",
        },
        {
          time: "13:15-14:00",
          Description: "Lunch Break",
          Speaker: "",
        },
        {
          time: "14:00-14:30",
          Description:
            "Prostate cancer brachytherapy-Long term results at Long Beach, California",
          Speaker: "Dr. Nisar M Syed MD, FRCS",
        },
        {
          time: "14:35-15:05",
          Description: "Ovarian cancer — Past, Present and future",
          Speaker: "Dr. Shashikant Lele MD, FACOG",
        },

        {
          time: "15:10-15:40",
          Description: "Transform the Journey for your HER2+ve Breast cancer patients",
          Speaker: "Dr. Sudeep Guptha MD,DM",
        },
        {
          time: "15:45-16:15",
          Description:
            "Managing CNS tumours in Children and Young Adults - Challenges and the way forward ",
          Speaker: "Dr. Rakesh Jalali MD",
        },
        {
          time: "16:20-16:40",
          Description:
            "Can we extrapolate dose de-escalation in HPV positive anal canal cancer? ",
          Speaker: "Dr. Rahul Krishnatry MD",
        },
        {
          time: "16:45-17:15",
          Description: "Non Small Cell Lung Cancer-Immunotherapy and the way for it ",
          Speaker: "Prof. Dr Raju Titus Chacko MD",
        },
        {
          time: "17:20-17:40",
          Description: "Approach to biochemical recurrences after Radical Prostatectomy",
          Speaker: "Dr. Francis V James MD",
        },
      ],
      scheduleListHallB: [
        {
          time: "8:00-8:20",
          Description: "Role of a medical Acupuncturist in cancer patient management ",
          Speaker: "Dr. K. Vinayakom MD, FFARCS",
        },
        {
          time: "8:25-8:45",
          Description:
            "WHO 2021 classification of CNS tumours - Salient features and clinical impact",
          Speaker: "Dr. Rakesh Jalali MD ",
        },
        {
          time: "8:50-9:10",
          Description: "PIK3CA mutated advanced breast cancer: What have we learned?",
          Speaker: "Dr. Anita Ramesh MD, DM ",
        },
        {
          time: "9:15-9:45",
          Description: "Case based Panel discussion on Metastatic Colorectal Cancer ",
          Speaker: `Moderator:- Dr. K. V. Gangadharan MD,DM

 Paneslists:-
1.Dr. Philip George Kuttikkatt MD,DM
2.Dr. Sajeed MD
4.Dr. Sreelesh MD DM
5.Dr. Arun Shankar MD
6.Dr. Chandramohan MS MCh`,
        },
        {
          time: "9:50-10:20",
          Description: "Challenging Breast Cancer Cases (Panel Discussion)",
          Speaker: `Moderator:- Dr. Rajkumar MD DM
Panelists:
1.Dr. Sivakumar MD DM
2.Dr. Rajeev MD
3.Dr. Sureshkumar MD DNB
4.Dr. Prashanth Parameswaran MD DM
5. Dr. Govind Gangadharan MD DM
   6.Dr. Paul Augustine MS `,
        },
        {
          time: "10:25-10:40",
          Description: "TBD",
          Speaker: "",
        },
        {
          time: "10:45-11:05",
          Description: "TBD",
          Speaker: "",
        },
        {
          time: "11:10-11:30",
          Description: "TBD",
          Speaker: "",
        },
        {
          time: "11:35-11:55",
          Description: "TBD",
          Speaker: "",
        },
        {
          time: "12:00-12:20",
          Description: "TBD",
          Speaker: "",
        },
        {
          time: "12:25-12:45",
          Description: "TBD",
          Speaker: "",
        },
        {
          time: "12:50-13:10",
          Description: "TBD",
          Speaker: "",
        },
        {
          time: "13:15-14:00",
          Description: "Lunch Symposium",
          Speaker: "TBD",
        },
        {
          time: "14:00-14:15",
          Description: "Surgery in HCC ",
          Speaker: "Dr.Sudhindran MS,FRCS",
        },
        {
          time: "14:20-14:35",
          Description: "TARE & TACE",
          Speaker: "Dr. Mathew Cherian MD",
        },
        { time: "14:40-14:50", Description: "RFA", Speaker: "Dr. Lijesh MD" },
        { time: "14:55-15:10", Description: "SBRT", Speaker: "Dr. Ajith Veniyoor MD,DM" },
        {
          time: "15:10-15:30",
          Description: "Dual Check Point inhibitors",
          Speaker: "TBD",
        },
        { time: "15:35-15:45", Description: "PROTON THERAPY", Speaker: "TBD" },
        {
          time: "16:50-17:00",
          Description: "Medical Management",
          // Description: "Medical Management - Panel Discussion",
          Speaker: "TBD",
        },
        {
          Description: "Panel discussion on HCC",
          Speaker: `Moderator: Dr. Arun Warrier MD,DM, FRCP

Panelists:
    1. Dr.T. Sridhar MD(TO BE DECIDED)
    2. Dr. Rony Benson      MD,DM,MRCP
        3. Dr. Sudhindran MS,FRCS
    4. Dr. Mathew CherianMD
    5. Dr. LijeshMD
Dr. Deb Narayan Dutta MD`,
        },
        // {
        //   Description: "Lung Cancer case study - Panel Discussion",
        //   Speaker: "TBA",
        // },
      ],
      scheduleListHallC: [
        {
          time: "8:00-13:15",
          Description: "E Contouring Session",
          Speaker: `Co Ordinator: Dr Jose Paul MD, FRCR
Faculties
    1. Dr. Sreenivas Chilukuri MD
    2. Dr. Kurian Joseph FRCR FRCP
    3. Dr. Umesh Mahant Shetty MD
    4. Dr. K C Patro MD, DNB, MBA
    5. Dr. Ajithkumar MD, FRCR, MRCP`,
        },
        {
          time: "14:00",
          Description: "Oral presentations & discussion",
          Speaker: "",
        },
        {
          time: "-17:40",
          Description: "Meet the expert sessions",
          Speaker: "",
        },
        // {
        //   Description: "Oral presentations& discussion",
        //   Speaker: "",
        // },
        // {
        //   Description: "Meet the expert sessions",
        //   Speaker: "",
        // },
        // {
        //   Description:
        //     "Case based panel discussions on head and neck and colorectal carcinomas",
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
.text2-color-class {
  color: var(--link-color);
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
