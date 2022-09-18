<template>
  <div>
    <h1 class="head center top">
      Pre Conference Scientific Programmes on 13-10-2022 at IMA Hall, Kaloor, Kochi
    </h1>
    <h3 class="head center bottom">Inauguration At 8 AM</h3>
    <h3 class="head center top">Hall - A Clinical Radiobiology Course</h3>
    <h3 class="head center bottom">
      Hall - B - Basic Course on Molecular Oncology and Precision Medicine
    </h3>
    <h1 class="center">Clinical Radiobiology Course</h1>
    <h3 class="center">Hall - A - IMA Hall, Kochi. Course Duration - 9AM - 5AM</h3>
    <h2 class="left">Prof. Dr. Manoj Gupta MD,DNB</h2>
    <p class="left">
      Prof. Manoj Gupta MD, DNB, who is shortly becoming the next President of ARO' is
      well known to all of us. He will be doing the course over 8 hours and it will be
      very valuable for Radiation Oncology Residents,Physicists and Radiation Oncologists
      to master tough subject "Clinical Radiobiology".
    </p>
    <v-simple-table fixed-header dense>
      <thead>
        <th class="text-color-class">
          <!-- <v-icon class="left">mdi-clock</v-icon> -->
          Time
        </th>
        <th class="text-color-class">
          <!-- <v-icon class="left">mdi-book</v-icon> -->
          Module
        </th>
        <th class="text-color-class">
          <!-- <v-icon class="left">mdi-arrow-right-drop-circle</v-icon> -->
          Description
        </th>
      </thead>
      <tbody>
        <tr v-for="schedule in scheduleData" class="left" :key="schedule">
          <td>
            <!-- <v-icon class="left">mdi-clock</v-icon> -->
            {{ schedule.time }}<br />
          </td>
          <td>
            <!-- <v-icon class="left">mdi-book</v-icon> -->
            {{ schedule.Module }}<br />
          </td>
          <td>
            <!-- <v-icon class="left">mdi-arrow-right-drop-circle</v-icon> -->
            {{ schedule.Description }}<br />
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-spacer></v-spacer>
    <h1 class="center">Basic Course on Molecular Oncology and Precision Medicine</h1>
    <h3 class="center">Hall - B - IMA Hall, Kochi</h3>
    <h2 class="left">Faculty :</h2>
    <div class="grid-container">
      <h4 v-for="faculty in facultyList" :key="faculty">
        {{ faculty }}
      </h4>
    </div>
    <h2 class="left">Start of the Programme - 8:55AM</h2>
    <div v-for="session in sessionList" :key="session">
      <h4 class="text-color-class left" id="sessions">
        <v-icon v-if="session.includes(`Session`)" class="text-color-class"
          >mdi-arrow-right-box</v-icon
        >
        <v-icon v-else class="text-color-class">mdi-chevron-right</v-icon>
        {{ session }}
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sessionList: [
        "Session 1 - Basics of cancer Genetics and molecular signaling in cancer-Dr Unni S Pillai",
        " Chromosomal aberrations, Structure of DNA, Types of mutation -Amplification, Indels, fusion and base substitution and epigenetic modifications.",
        " Molecular subtypes and signaling in cancer—As genomic aberration. (NICE phrase) ",
        "Session 2—Molecular Diagnosis in cancer —(To be announced)",
        " What is used for different type of genomic alteration detection: Real time PCR, immunohistochemistry, FISH, hot spot mutation test, comprehensive genomic profiling -Amplicon Vs hybrid capture technology -short panel. Advantages and shortcomings.",
        " Session 3—Liquid biopsy in cancer care - DrAmit Verma CTC,",
        " Minimum residual disease, Cell free DNA Based cancer detection for cancer monitoring and metastatic cancer treatment + Case Discussion",
        " Session 4—Comprehensive Genomic Profile - Interpretation of genomic profiling report- Dr Silambarasan Maskomani",
        " QC - Homologous Recombination deficiency, Microsatellite instability, Tumor mutation burden, Clonal Hematopoiesis, Variant Allele Frequency, Database with 2 case discussion",
        " Session 5 - Clinical application - Molecular Tumor Board",
        " Discussion of interesting cancer cases of breast, lung, GI, GU, ovary, CNS etc. with DrAmit Verma as chairperson + 3 Panelists",
        " Session 6—Tumor agnostic therapy/Molecular Guided Therapeutic Options, Basic Principles and its clinical application in genomic era",
        " Session 7 —Biomarkers to predict immunotherapy response- What we know so far and future direction?",
        " Session 8—Short panel genomics sequencing in current Indian scenario - How to make maximum out of it",
        " Session 9—Good Practices in selection of sample and its safe transportation to genomic labs",
        " (Which sample to be sent for different genomic testing, Transportation medium, Time duration to reach labs for appropriate testing, formalities for international transportation of Biological samples —Talk shall include good practices recommendation for Blood, Bone Marrow, Fresh Tissue and FFPE block samples)",
        " Session 10—Serial Genomic Testing and clinical implication in hematological and solid malignancies current scenarios - Dr Unni S Pillai",
      ],
      facultyList: [
        "Dr UNNI S PILLAI MD,DM-Course moderator",
        "DRAMITVERMA MD",
        " DR DURGAPRASAN MD,DNB",
        "Prof. DR T.S GANESHAN MD,MNAMS,FRCP,PhD",
        "DR SILAMBARASAN MASKOMANI PhD-Secretary",
        "Prof. DR C.S MADHU MD,DNB-Chairman ",
      ],
      scheduleData: [
        {
          time: "9:30-11:15AM",
          Module: "Module 1 and 2",
          Description:
            " Interaction with matter and Radiation Injury to cells, mechanism of action, cell survival curve, exponential relationship, DIO and DO, Multi Model L-Q model",
        },
        { time: " 11:15-11:30AM", Description: "High Tea" },
        {
          time: "11:30-1:15 PM",
          Module: "Module 3",
          Description:
            "Clinical Applications of LQ Models, Normal Tissue injury with emphasis to spinal cord BED and its clinical applications, Altered fraction and its radiobiological basis.",
        },
        { time: "1:15-2:00 PM", Description: "LUNCH" },
        {
          time: " 2:00-3:15 PM",
          Module: "Module 4",
          Description:
            " Radiobiology of Hyprofraction, SRS and SBRT, factors affecting cell survival curve, HRS and IRS, Dose Rate Effect, Oxygen Effect, Radiobiology of fractionated RT, Intrinsic Sensitivity . ",
        },
        { time: "3:15-3:30 PM", Description: " High Tea " },
        {
          time: " 3:30-4:45 PM",
          Module: "Module 5",
          Description:
            "4Rs of Radiobiology, Role of 4rs in SRS and SRT, TCP, NTCP Therapeutic ratio L ET and RBE ",
        },
        { Description: " Radiobiology quiz for Pgs " },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
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
@media only screen and (max-width: 569px) {
  .grid-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
