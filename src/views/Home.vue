<template>
  <div class="home">
    <home-main></home-main>
    <!-- <br /><br /> -->
    <!-- todo Card Code -->
    <!-- <v-spacer></v-spacer>
    <v-row justify="center">
      <div v-for="cards in cardData" v-bind:key="cards.text">
        <v-col>
          <DetailsCards :cardData="cards"></DetailsCards>
        </v-col>
        <v-spacer></v-spacer>
      </div>
    </v-row> -->
    <v-row>
      <v-col>
        <DetailsText :DetailstextData="DetailstextData"></DetailsText>
      </v-col>
    </v-row>
    <PaymentQR></PaymentQR>
    <!-- <v-row>
      <v-col>
        <InstructionsForPreperation></InstructionsForPreperation>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col>
        <HotelsDetails></HotelsDetails>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3>Places of interest in Kerala</h3>
        <!-- <v-spacer></v-spacer> -->
        <Table
          :TableData="PlacesofInterestData"
          :Headers="PlacesofInterestHeaders"
        ></Table>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        ><br />
        <h3 style="color: var(--text-color) !important">Places in and around Cochin</h3>
        <!-- <v-spacer></v-spacer> -->
        <Table :TableData="PlacesinKochiData" :Headers="PlacesinKochiHeaders"></Table>
      </v-col>
    </v-row>
    <ScheduleTable></ScheduleTable>
    <a href="https://www.varian.com/" target="_blank"><VarianPage></VarianPage></a>
    <br />
    <br />
  </div>
</template>

<script>
import HomeMain from "../components/HomeMain.vue";
// import DetailsCards from "../components/DetailsCards.vue";
import DetailsText from "../components/DetailsText.vue";
// import InstructionsForPreperation from "../components/InstructionsForPreperation.vue";
import Table from "../components/Table.vue";
import HotelsDetails from "../components/HotelsDetails.vue";
import PaymentQR from "../components/PaymentQR.vue";
import ScheduleTable from "../components/Schedule/ScheduleTable.vue";
import VarianPage from "../components/VarianPage.vue";

export default {
  name: "Home",
  components: {
    HomeMain,
    // DetailsCards,
    DetailsText,
    // InstructionsForPreperation,
    Table,
    HotelsDetails,
    PaymentQR,
    ScheduleTable,
    VarianPage,
  },
  mounted() {
    //
  },
  data() {
    return {
      //
      dataType: "",
      cardData: [
        {
          Image: "317582_1100-732x549.jpg",
          Header: "Header1",
          Details: "Details1",
          Footer: "Footer1",
          Text: "Text for testing",
        },
        {
          Image: "MSHS-Cancer-RadiationOncology-2col-685x375-3.jpg",
          Header: "Header2",
          Details: "Details2",
          Footer: "Footer2",
          Text: "Text for testing2",
        },
        {
          Image: "",
          Header: "",
          Details: "",
          Footer: "",
          Text: "",
        },
      ],
      DetailstextData: {
        Header: "Greetings from Kochi",
        wish: "Dear Collegue,",
        Details:
          "We have great pleasure in inviting you all for an academic feast arranged at Hotel Le-meridian Kochi on 14th,15th, & 16th of October 2022. From the agenda you will understand that most of these are solutions for the burning problems we face in cancer care clinics in our country.We have also arranged the following.",
        Details2: [
          `1) Preconference scientific programme on molecular oncology from bench to bedside and Prof. Manoj Gupta's Clinical radiobiology course as to parallel sessions.`,
          `2) Parallel to the scientific programme on 14/10/22 Friday there will also be an imaging course for oncologists (cross sectional anatomy) which will facilitate a better grasp of radiological anatomy and accuracy in target volume delineation for improving therapeutic ratio.`,
          `3) Parallel to the scientific agenda on day 3 there will also be a course in E- Contouring of common sites such as Lung, Cervix, Uterus, Breast, Brain in addition to SBRT / SRS. M/S Varian medical systems have consented to facilitate computers and workstations for this.`,
          ` 4) The faculty involve senior medical oncologist like Prof M.V.Pillai, Prof SasikanthLele, Dr.Nissarsayed, Dr.Ajithkumar, Dr.Saby George etc, The meet the expert sessions also can be very useful in transfer of technology from developed world to developing India.`,
          `5) Case based panel discussions on interesting cases will form another salient feature of this conference. The students and teachers may present papers and posters and obtain medals and the same may help in improving their CV and also helpful in future job interviews etc. There will be also opportunities for free paper and poster presentation for delegates. Separate quiz programme for radiation oncology students and medical oncology students. As in the previous years there will be fellowship awards for radiation oncology, medical oncology and other subspecialities of oncology.`,
        ],
        Details3: `All are requested to make this conference to update their knowledge for better cancer care in India. Please grace this conference with your esteemed presence and make it a grand success. Please give wide publicity for this scientific event amongst your students, colleagues and friends. Hoping to see you all at Kochi.`,

        // Details:
        //   " We are extremely happy to welcome you all to Kochi the Queen of Arabian Sea for our international conference on Multidisciplinary Management of Geneto Urinary. Gynaecologic and Pelvic Malignancies. Highly reputed international faculty from U.K, U.S.A. Australia, Canada, besides so any distinguished national faculty from top most academic institutions such as TMH Mumbai, All India Institutes, Appolo Hospitals, Regional Cancer Centers in our country, have all consented to participate. This conference would be of immense benefit to practising Oncologists, gynaecologists, Urologists, Castro Entrologists, Pathologists and residents of all specialities. There will be an exciting trade exhibition. The esidents and PG students have the opportunity to present posters, paper and may also participate in quiz programs designed for different pecialities. The best oral and paper presentation will be awarded gold, silver and bronze medals. Kindly note that during Oncology 2018 following doctors were awarded fellowships.",
        // Details2: `International fellowship - Medical Oncology : Dr. Sadvik Raghuram MD DM (Amrita Institute of Medical Sciences) - Rs. 2Lacs. National fellowship - Medical Oncology : Dr. Sahil Bambroo MD DM (Amrita Institute of Medical Sciences) - Rs. 0.75Lacs. International fellowship - adiation Oncology : Dr. Vishnu H Lal MD (Tata Memorial Hospital Kolkata) - Rs. 2 Lacs. National fellowships - Radiation Oncology : Dr. Daliya homas MD (Govt Medical College, Trivandrum) - Rs. 0.75 Lacs., Dr.Abul Hussain MD (Govt Medical College Trivandrum)- Rs. 0.75 Lacs. So residents and PG students may also compete and win national / international fellowships for undergoing special training in top centers in India or other countries by attending this conference. You have to apply sufficiently in advance for the same. This time we are also organising two pre-conference scientific program mainly (1) Workshop on "Molecular Oncology - Bench to bedside" & (2) Prof. Manoj Gupta Clinical Radiobiology Course.`,
        // Details3:
        //   " Kindly give vide publicity for the academic program amongst your collegues, residents and PG students to make it a grand success. Kindly visit the website www.oncology2022.in periodically for updated information.Hoping to see you all.",
        Thanks: "Thanking you, Sincerely,",
        Footer1: {
          name: "Prof. Dr. C.S. Madhu MD, DNB",
          designation: "Chairman,",
          email: "Email : dr.csmadhu@gmail.com",
          phone: "Phone : +91-9387103803",
        },
        Footer2: {
          name: "Dr. Unni S. Pillai MD, DM",
          designation: "Secretary,",
          email: "Email : druspillai@gmail.com",
          phone: "Phone : +91-7598563161",
        },
      },
      // PlacesofInterestHeaders: ["Destination", "Description", "Distance From Cochin"],
      PlacesofInterestData: [
        {
          Destination: "Munnar",
          Description: "Misty hill station covered with tea plantation",
          Distance: "130 Kms",
        },
        {
          Destination: "Thekkady",
          Description: "The exotic wildlife destination",
          Distance: "160 Kms",
        },
        {
          Destination: "Kumarakom",
          Description: "Backwater destination",
          Distance: "50 Kms",
        },
        {
          Destination: "Alleppey",
          Description: "Another backwater destination famous for Houseboat criuse",
          Distance: "60 Kms",
        },
        {
          Destination: "Mararikulam",
          Description: "Beach destination",
          Distance: "50 Kms",
        },
      ],
      PlacesinKochiData: [
        {
          Destination: "Fort cochin",
          Distance: "11 Kms",
        },
        {
          Destination: "Mattancherry",
          Distance: "13 Kms",
        },
        {
          Destination: "Hill palace",
          Distance: "20 Kms",
        },
        {
          Destination: "Bolgatty",
          Distance: "13 Kms",
        },
        {
          Destination: "Marine drive",
          Distance: "10 Kms",
        },
      ],
      PlacesofInterestHeaders: [
        {
          text: "Destination",
          align: "center",
          sortable: false,
          value: "Destination",
        },
        {
          text: "Description",
          align: "center",
          sortable: false,
          value: "Description",
        },
        {
          text: "Distance From Cochin",
          align: "center",
          sortable: true,
          value: "Distance",
        },
      ],
      PlacesinKochiHeaders: [
        {
          text: "Destination",
          align: "center",
          sortable: false,
          value: "Destination",
        },
        {
          text: "Distance to Destination",
          align: "center",
          sortable: true,
          value: "Distance",
        },
      ],
    };
  },
  methods: {
    //
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.home {
  /* margin-bottom: 100px; */
  padding: 0;
  margin: 0;
}

h3 {
  /* Crown Plaza color */
  /* color: var(--secondary-color); */
  color: var(--text-color);
  text-align: center;
}
</style>
