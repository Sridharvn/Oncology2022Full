<template>
  <!-- <div class="schedule-container">
    <v-img src="./../../assets/schedule/Schedule14th1.png" max-width="1100px"></v-img>
    <v-img src="./../../assets/schedule/Schedule14th2.png" max-width="1100px"></v-img>
    <v-img src="./../../assets/schedule/Schedule14th3.png" max-width="1100px"></v-img>
  </div> -->
  <div>
    <h1>14th October 2022 (Day 1) - Hall A (Oman Hall)</h1>
    <h2 class="right">Registration - 7:30 AM Onwards</h2>
    <v-card class="mx-auto">
      <v-timeline align-top dense>
        <v-timeline-item v-for="schedule in scheduleList" :key="schedule" small>
          {{ schedule.Description }}
          <br />
          {{ schedule.Speaker }}
          <hr />
        </v-timeline-item>
        <!-- <v-timeline-item class="text-right"> timeline item </v-timeline-item>
      <v-timeline-item>timeline item</v-timeline-item> -->
      </v-timeline>
    </v-card>
    <h3>Inaugural Ceremony, Cultural Events and Dinner</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scheduleList: [
        {
          Description:
            "Molecular Oncology in the early diagnosis and prevention of Oral Cancer",
          Speaker: "Dr. Amritha Suresh MD",
        },
        {
          Description:
            "Immunotherapy in recurrent and locally advanced Head and Carcinomas - The current scenario",
          Speaker: "Dr. Cessal T. Kainickal MD, DNB,MRCP",
        },
        {
          Description:
            "Do we require concomitant chemotherapy in the era of the IGRT in Nasiopharygeal cancer",
          Speaker: "Dr. Sarbani GhoshLaskar MD, DNB",
        },
        {
          Description:
            "Advances in improvement of quality of life and survival in GE Junction Carcinomas",
          Speaker: "Dr. Kurian Joseph FRCR,FRCP",
        },
        {
          Description: "2022 ASCO updates in Lung Cancer",
          Speaker: "Dr. Khaleel Ashraf MD,FACP",
        },
        {
          Description: "NACT on Oral Cavity Cancer - Does it benefit Indian patients",
          Speaker: "Dr. Kumar Prabhash MD,DM",
        },
        {
          Description: "Recent advances in the management of type 1 Endometrial cancer",
          Speaker: "Dr. Umesh Mahant Shetty MD",
        },
        {
          Description:
            "Maximizing outcomes in Pre-Menopausal Patients with HR+/HER2- Metastatic Breast Cancer",
          Speaker: "Dr. Ajith Veniyoor MD, DM",
        },
        {
          Description:
            "Management of brain metastasis in the era of Targeted therapy & Immunotherapy",
          Speaker: " Dr. Anil. K. Anand MD",
        },
        {
          Description: "Interstitial Brachytherapy in Ca Cervix",
          Speaker: "Dr. Nisar M Syed MD, FRCS",
        },
        {
          Description: "Lunch Break",
          Speaker: "",
        },
        {
          Description:
            "Colo-rectal cancer management: Current standards and emerging option",
          Speaker: "Speaker: Dr. Patrick Boland MD, FACP",
        },
        {
          Description:
            "Brachytherapy techniques and local control in Head & Neck cancer- Plenary session",
          Speaker: "Dr. Nisar M Syed MD, FRCS",
        },
        {
          Description: "Proton Therapy for Paediatric solid tumours-The evidence",
          Speaker: "Dr. Siddhartha Laskar MD, DNB",
        },
        {
          Description:
            "Molecular profiling in lung cancer —Does it benefit Indian patients.",
          Speaker: "Dr. Kumar Prabhash MD, DM",
        },
        {
          Description: "Post-operative management of Carcinoma of urinary bladder",
          Speaker: "Dr. Kannan MD",
        },
        {
          Description: "Evolving treatment landscape in Chronic Lymphatic Leukemia",
          Speaker: "Dr. Linu Jacob MD, DM",
        },
        {
          Description: "Approach to biochemical recurrences after Radical Prostatectomy",
          Speaker: "Dr. Francis V James MD",
        },
        {
          Description:
            "T1G3 TCC: Is there a case for early Cystectomy - Panel Discussion",
          Speaker: "Dr. Kim J Mammen MS, Mch, FRCS",
        },
        {
          Description:
            "Advances in the management Prostate Cancer Oligo Metastasis- Panel discussion ",
          Speaker: "To Be Finalised",
        },
        {
          Description: "Management of recurrent Head and Neck Cancer - Panel Discussion",
          Speaker: "Moderator: Dr. Cessal Kainickal MD",
        },
        {
          Description: "Case based Panel Discussion in Lung cancer To Be Finalised",
          Speaker: "Dr. Sanju Cyriac MD,DM",
        },
        {
          Description: `Cross-sectional anatomy for Oncologists Course on Radiology of Oncology (8 hours) and target delineation would be of great value for all practicing Oncologists especially Radiation Oncologists and Physicists, who are involved in the care of cancer patients. As we all know Dr. Kanhu Charan Pathro is the most hardworking Radiation Oncologist in the country and he is bent on teaching students and oncologists the intricacies in radiological anatomy and target volume delineation. May we request all to participate in this highly interactive course to become more confident in improving therapeutic ratio. The modules of one day refresher course in Radiology of Oncology for Oncologists and Oncology Residents is as follows`,
          Speaker: "Dr. K.C Pathro MD,DNB,MBA",
        },
        {
          Description: `Salient features 
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
          6. Radiology of abdomen and pelvis - 1.5 hr
          TOTAL DURATION OF THE COURSE - 8 HOURS`,
          Speaker: "",
        },
        {
          Description: `Prof. Manoj Gupta MD, DNB, who is shortly becoming the next President of AROI is well known to all of us. He  will be doing the course over 8 hours and it will be very valuable for Radiation Oncology Residents, Physicists and Radiation Oncologists to master the tough subject “Clinical Radiobiology”`,
          Speaker: "",
        },
        {
          Description: "",
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
