<template>
  <div>
    <h1>14th October 2022 (Day 1) - Hall A (Oman Hall)</h1>
    <h2 class="left text-color-class">Registration - 7:30 AM Onwards</h2>
    <v-card class="mx-auto">
      <v-timeline align-top dense>
        <v-timeline-item v-for="schedule in scheduleList" :key="schedule" small>
          <div class="time">{{ schedule.time }}</div>
          <br /><br />
          {{ schedule.Description }}
          <br /><br />
          <div class="speaker">{{ schedule.Speaker }}</div>
          <hr />
        </v-timeline-item>
      </v-timeline>
    </v-card>
    <h1>14th October 2022 (Day 1) - Hall B</h1>
    <v-card class="mx-auto">
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
    <h1>14th October 2022 (Day 1) - Hall C</h1>
    <v-card class="mx-auto">
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
    <v-card class="mx-auto others" v-for="item in Others" :key="item">
      {{ item }}
    </v-card>
    <!-- <h3>Inaugural Ceremony, Cultural Events and Dinner</h3> -->
    <br />
    <div class="text2-color-class">
      <h2 class="center text2-color-class">Inaugural Function - Hall A</h2>
      <h3 class="text2-color-class">Inaugration by Prof. Dr. Mohan Kunnummel,</h3>
      <h3 class="text2-color-class">
        the Vice Chancellor of Kerala University of Health Sciences.
      </h3>
      <h3 class="text2-color-class">
        The legendary teacher and administrator Prof. P. G. R. Pillai will be honoured for
        his contributions to cancer care and medical education during the function....by
        Prof Dr M. V. Pillai
      </h3>
      <!-- <h3 class="text2-color-class">
        8 PM - Cultural Evening : Laasya School of Dance, Kochi
      </h3> -->
      <h3 class="text2-color-class">Followed by dinner</h3>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scheduleList: [
        {
          time: "8:00-8:20",
          Description: "Small cell lung cancer: Management of extensive stage disease",
          Speaker: "Dr. Grace Dy MD, FACP",
        },
        {
          time: "8:25-8:45",
          Description:
            "Molecular Oncology in the early diagnosis and prevention of Oral Cancer",
          Speaker: "Dr. Amritha Suresh MD",
        },
        {
          time: "8:50-9:10",
          Description:
            "Immunotherapy in recurrent and locally advanced Head and Carcinomas - The current scenario",
          Speaker: "Dr. Cessal T. Kainickal MD, DNB,MRCP",
        },
        {
          time: "9:15-9:35",
          Description:
            "Do we require concomitant chemotherapy in the era of the IGRT in Nasiopharygeal cancer",
          Speaker: "Dr. Sarbani GhoshLaskar MD, DNB",
        },
        {
          time: "9:40-10:00",
          Description:
            "Advances in improvement of quality of life and survival in GE Junction Carcinomas",
          Speaker: "Dr. Kurian Joseph FRCR,FRCP",
        },
        {
          time: "10:05-10:25",
          Description:
            "Updates in the management of metastatic prostate cancer (CSPC and CRPC)",
          Speaker: "Dr. Saby George MD, FACP",
        },
        // {
        //   Description: "2022 ASCO updates in Lung Cancer",
        //   Speaker: "Dr. Khaleel Ashraf MD,FACP",
        // },
        {
          time: "10:30-10:50",
          Description: "NACT on Oral Cavity Cancer - Does it benefit Indian patients",
          Speaker: "Dr. Kumar Prabhash MD,DM",
        },
        {
          time: "10:55-11:15",
          Description: "Recent advances in the management of type 1 Endometrial cancer",
          Speaker: "Dr. Umesh Mahant Shetty MD",
        },
        {
          time: "11:20-11:40",
          Description: "Type II Endometrial Cancer — Current trends ",
          Speaker: "Prof. Dr.Shashikant B. Lele MD, FACOG",
        },

        {
          time: "11:45-12:05",
          Description: "Current concepts in the management of type 1 Endometrial cancer",
          Speaker: "Dr. Umesh Mahant Shetty MD",
        },
        {
          time: "12:10-12:30",
          Description:
            "Maximizing outcomes in Pre-Menopausal Patients with HR+/HER2- Metastatic Breast Cancer",
          Speaker: "Dr. Ajith Veniyoor MD, DM",
        },
        {
          time: "12:35-12:55",
          Description:
            "Management of brain metastasis in the era of Targeted therapy & Immunotherapy",
          Speaker: " Dr. Anil. K. Anand MD",
        },
        {
          time: "13:00-13:20",
          Description: "Interstitial Brachytherapy in Ca Cervix",
          Speaker: "Dr. Nisar M Syed MD, FRCS",
        },
        { time: "13:25-14:15", Description: "Lunch Break", Speaker: "" },
        {
          time: "14:15-14:35",
          Description:
            "Colo-rectal cancer management: Current standards and emerging option",
          Speaker: "Speaker: Dr. Patrick Boland MD, FACP",
        },
        // {
        //   Description:
        //     "Brachytherapy techniques and local control in Head & Neck cancer- Plenary session",
        //   Speaker: "Dr. Nisar M Syed MD, FRCS",
        // },
        {
          time: "14:40-15:00",
          Description: "Proton Therapy for Paediatric solid tumours-The evidence",
          Speaker: "Dr. Siddhartha Laskar MD, DNB",
        },
        {
          time: "15:05-15:25",
          Description:
            "Molecular profiling in lung cancer —Does it benefit Indian patients.",
          Speaker: "Dr. Kumar Prabhash MD, DM",
        },
        {
          time: "15:30-15:50",
          Description: "Post-operative management of Carcinoma of urinary bladder",
          Speaker: "Dr. Kannan MD",
        },
        {
          time: "15:55-16:15",
          Description: "Evolving treatment landscape in Chronic Lymphatic Leukemia",
          Speaker: "Dr. Linu Jacob MD, DM",
        },
        {
          time: "16:20-16:40",
          Description: "TBD",
          Speaker: "",
        },
        {
          time: "16:45-17:05",
          Description: "Improving outcomes in Cervical cancer ",
          Speaker: "Dr. Umesh Mahant Shetty MD",
        },
        {
          time: "17:10-17:40",
          Description:
            "Molecular Guided Therapeutic Options (MGTO) in Precision Oncology",
          Speaker: "Dr. Amit Verma MD",
        },
        // {
        //   Description: "Approach to biochemical recurrences after Radical Prostatectomy",
        //   Speaker: "Dr. Francis V James MD",
        // },
        // {
        //   Description:
        //     "T1G3 TCC: Is there a case for early Cystectomy - Panel Discussion",
        //   Speaker: "Dr. Kim J Mammen MS, Mch, FRCS",
        // },
        // {
        //   Description:
        //     "Advances in the management Prostate Cancer Oligo Metastasis- Panel discussion ",
        //   Speaker: "To Be Finalised",
        // },
        // {
        //   Description: "Management of recurrent Head and Neck Cancer - Panel Discussion",
        //   Speaker: "Moderator: Dr. Cessal Kainickal MD",
        // },
        // {
        //   Description: "Case based Panel Discussion in Lung cancer To Be Finalised",
        //   Speaker: "Dr. Sanju Cyriac MD,DM",
        // },
        // {
        //   Description: `Cross-sectional anatomy for Oncologists Course on Radiology of Oncology (8 hours) and target delineation would be of great value for all practicing Oncologists especially Radiation Oncologists and Physicists, who are involved in the care of cancer patients. As we all know Dr. Kanhu Charan Pathro is the most hardworking Radiation Oncologist in the country and he is bent on teaching students and oncologists the intricacies in radiological anatomy and target volume delineation. May we request all to participate in this highly interactive course to become more confident in improving therapeutic ratio. The modules of one day refresher course in Radiology of Oncology for Oncologists and Oncology Residents is as follows`,
        //   Speaker: "Dr. K.C Pathro MD,DNB,MBA",
        // },
        // {
        //   Description: `Salient features
        //   1. Basics
        //   2. Identification
        //   3. CT-MRI correlation
        //   4. Target delineation correlation
        //   5. Common pathologies
        //   Chapters covered
        //   1. Basics of basic investigations- 1 hr
        //   2. Radiology of brain- 1.5 hr
        //   3. Radiology of skull base- 1 hr
        //   4. Radiology of neck- 1.5 hr
        //   5. Radiology of thorax- 1.5 hr
        //   6. Radiology of abdomen and pelvis - 1.5 hr
        //   TOTAL DURATION OF THE COURSE - 8 HOURS`,
        //   Speaker: "",
        // },
        // {
        //   Description: `Prof. Manoj Gupta MD, DNB, who is shortly becoming the next President of AROI is well known to all of us. He  will be doing the course over 8 hours and it will be very valuable for Radiation Oncology Residents, Physicists and Radiation Oncologists to master the tough subject “Clinical Radiobiology”`,
        //   Speaker: "",
        // },
        // {
        //   Description: "",
        //   Speaker: "",
        // },
      ],
      scheduleListHallB: [
        {
          time: "14:15-14:30",
          Description:
            "Management of high-grade muscle invasive bladder cancer - Medical oncology perspective",
          Speaker: "Dr. Ashish Singh MD,DM",
        },
        {
          time: "14:35-14:50",
          Description:
            "Bladder preservation strategies in the era of new development in Radiotherapy",
          Speaker: "Dr. Sreenivas Chilukuri MD",
        },
        {
          time: "15:20-15:40",
          Description: "Panel Discussion on Ca Bladder",
          Speaker: `Moderator: 
Panelists:-
    1. Dr. Srivinvas Chilikuri MD
    2. Dr. Arun Philip MD DM
    3. Dr. Ashwin kumar MD
    4. Dr. Ashish Singh MD,DM
    5. Dr. Harish`,
        },
        {
          time: "15:45-16:45",
          Description: "Management of recurrent Head and Neck Cancer- Panel Discussion",
          Speaker: `Moderator: Dr. Surij Salih MS MCh and Dr. Cessal Thomas Kainickal
MD,DNB,MRCP
Panelistss:     1. Dr. Mathew Jose MD,DM
    2. Dr. Shaji Thomas MS,Mch
    3. Dr. Jomon Raphel MD
    4. Dr. Ajayakumar MD DNB 
    5. Dr. Madhu Sairam MD
    6. Dr. Rajanish MD`,
        },
        {
          time: "16:50-17:50",
          Description: "Case based Panel discussion on Ca Lung",
          Speaker: `Moderator: - Dr. Sanju Cyriac MD,DM

Panelists:-
    1. Dr. Ashok Komaranchath MD, DM, MRCP, FRCP
    2. Dr. Sivanandan MD
    3. Dr. Dinesh Makuny MD DNB
    4. Dr. Varun Rajan  MD DM
    5. Dr. Durgapoorna MD
    6. Dr. Bharath Rangarajan MD, DM
`,
        },
      ],
      scheduleListHallC: [
        {
          time: "09:00-13:00",
          Description: `Cross-sectional anatomy for Oncologists

Course on Radiology of Oncology (8 hours) and target delineation would be of great value for all practicing Oncologists especially Radiation Oncologists and Physicists, who are involved in the care of cancer patients. As we all know Dr. Kanhu Charan Pathro is the most hardworking Radiation Oncologist in the country and he is bent on teaching students and oncologists the intricacies in radiological anatomy and target volume delineation. May we request all to participate in this highly interactive course to become more confident in improving therapeutic ratio.

The modules of one day refresher course in Radiology of Oncology for Oncologists and Oncology Residents is as follows
Salient features :
    1. Basics
    2. Identification
    3. CT-MRI correlation
    4. Target delineation correlation
    5. Common pathologies
Chapters covered
    1. Basics of basic investigations- 1 hr
    2. Radiology of brain- 1.5 hr
    3. Radiology of skull base- 1 hr
    4. Radiology of neck- 1.5 hr
    5. Radiology of thorax- 1.5 hr
    6. Radiology of abdomen and pelvis- 1.5 hr
TOTAL DURATION OF THE COURSE- 8 HOURS
”.`,
          Speaker: "Dr. K.C Pathro MD,DNB,MBA",
        },
      ],
      Others: [
        `Prof. Manoj Gupta MD, DNB, who is shortly becoming the next President of AROI is well known to all of us. He will be doing the course over 8 hours and it will be very valuable for Radiation Oncology Residents, Physicists and Radiation Oncologists to master the tough subject “Clinical Radiobiology`,
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
  padding: 10px;
}

.dark-background {
  background-color: var(--dark-color);
  // background-color: var(--text-color2);
  color: var(--background-color);
  padding: 10px;
}
.text-color-class {
  color: var(--text-color);
}
.text2-color-class {
  color: var(--link-color) !important;
}
.time {
  color: var(--link-color);
}
.speaker {
  color: var(--TabSlider-color);
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
.others {
  background-color: var(--BackgroundColor2-color);
  padding: 20px;
  font-size: larger;
  text-align: center;
}
@media only screen and (max-width: 893px) {
  h1 {
    font-size: large !important;
  }
}
</style>
