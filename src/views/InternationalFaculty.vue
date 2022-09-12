<template>
    <div id="InternationalFaculty">
        <HomeMain v-if="deviceType != 'mobile'"></HomeMain>
        <!-- <v-col>
            <Table :Headers="InternationalFacultyHeaders" :TableData="InternationalFacultyData"></Table>
        </v-col> -->
        <h1>International Faculty</h1>
        <v-row>
            <v-col v-for="item in InternationalFacultyData" :key="item" id="Cards">
                <!-- <CardWithoutPhoto :CardData="item"></CardWithoutPhoto> -->
                <DetailsCards :cardData="item"></DetailsCards>
            </v-col>
        </v-row>
        <h4>List incomplete and more are expected</h4>
    </div>
</template>
<script>
import HomeMain from "../components/HomeMain.vue";
// import Table from "../components/Table.vue";
// import CardWithoutPhoto from "../components/CardWithoutPhoto.vue";
import DetailsCards from "../components/DetailsCards.vue";
export default {
    props: {
        deviceType: {
            type: String,
            default: "desktop",
            required: false
        },
    },
    name: "InternationalFaculty",
    data() {
        return {
            //
            InternationalFacultyHeaders: [
                {
                    text: "Name",
                    align: "center",
                    sortable: false,
                    value: "Name",
                },
            ],
            InternationalFacultyRawData: "",
            InternationalFacultyData: [
                {
                    Name: "Dr. M V Pillai, MD, FACP",
                    Designation: "Professor of Medical Oncology",
                    Department: "",
                    Centre: "Thomas Jefferson University, Philedhelpia, USA",
                    Image: "InternationalFacultyPhotos/ProfMVPillai.png"
                },
                {
                    Name: "Dr. Tracey O'mconnor MD",
                    Designation: "Associate Professor of Oncology & Medicine",
                    Department: "",
                    Centre: "Rosewell Park Comprehensive Cancer Centre, Buffalo, New York, USA",
                    Image: "InternationalFacultyPhotos/DrTracyOConner.png"
                },
                {
                    Name: "Dr. Grace Dy MD",
                    Designation: "Associate Professor of Oncology & Medicine",
                    Department: "Division of Thoracic Malignancies",
                    Centre: "Rosewell Park Comprehensive Cancer Centre, Buffalo, New York, USA",
                    Image: "InternationalFacultyPhotos/DrGraceDY.png",
                },
                {
                    Name: "Dr. Patrick Boland MD",
                    Designation: "Assistant Professor of Oncology & Medicine",
                    Department: "Division of GI Malignancies",
                    Centre: "Rosewell Park Comprehensive Cancer Centre, Buffalo, New York, USA",
                    Image: "InternationalFacultyPhotos/DrPatrickBoland.png",
                },
                {
                    Name: "Dr. Shashikant Lele MD, FACOG",
                    Designation: "Professor of Gynaec Oncology",
                    Department: "",
                    Centre: "Roswell Park Cancer Institute, Buffaloe, New York, USA",
                    Image: "InternationalFacultyPhotos/ShashikanthLeLe.png",
                },
                {
                    Name: "Dr. Nisar M Syed MD, FACRO",
                    Designation: "Medical Director, Radiation Oncology & Endocurietherapy",
                    Department: "",
                    Centre: "Memorialcare Cancer Institute, Long Beach Medical Center, California, USA",
                    Image: "InternationalFacultyPhotos/NisarMSyed.png",
                },
                {
                    Name: "Dr. Saby George MD, FACP ",
                    Designation: "Professor of Oncology & Medicine",
                    Department: "",
                    Centre: "Rosewell Park Comprehensive Cancer Centre, Buffalo, New York, USA",
                    Image: "InternationalFacultyPhotos/DrSabyGeorge.png",
                },
                // {
                //     Name: "Dr. Rojymon Jacob MD",
                //     Designation: "Professor of Radiation Oncology",
                //     Department: "",
                //     Centre: "O’Neal Comprehensive Cancer Centre, Birmingham, Alabama, USA",
                //     Image: "InternationalFacultyPhotos/.png",
                // },
                {
                    Name: "Kurian Joseph FRCR, FRCP",
                    Designation: "Associate Professor of Radiation Oncology",
                    Department: "",
                    Centre: "Cross Cancer Institute, Alberta, Canada",
                    Image: "InternationalFacultyPhotos/DrKurianJoseph.png",
                },
                {
                    Name: "Dr. Najeeb Mohideen MD, FRCR, FASTRO",
                    Designation: "Consultant Radiation Oncologist",
                    Department: "",
                    Centre: "North Western Community Hospital, Arlington Heights Chicago, USA",
                    Image: "InternationalFacultyPhotos/DrNajeebMohideen.png",
                },
                // {
                //     Name: "Dr. Rema Jyotirmayi MD, MRCP, FRCR",
                //     Designation: "Consultant Clinical Oncologist",
                //     Department: "",
                //     Centre: "Maidstone & Tunbridge Wells, NHS Trust, UK",
                //     Image: "InternationalFacultyPhotos/.png",
                // },
                {
                    Name: "Dr. T Ajithkumar MD, MRCP, FRCR",
                    Designation: "Clinical Oncologist",
                    Department: "",
                    Centre: "Addenbrookes Hospital, Cambridge, NHS, UK",
                    Image: "InternationalFacultyPhotos/DrTAjithkumar.png",
                },
                {
                    Name: "Dr. Ajith Venniyoor MD, DNB, DM (Med Onco)",
                    Designation: "Medical Oncologist",
                    Department: "",
                    Centre: "The Royal Hospital, Muscat, Oman",
                    Image: "InternationalFacultyPhotos/DrAjithVenniyoor.png",
                },
                {
                    Name: "Dr.Khaleel K. Ashraf MD, FACP",
                    Designation: "Consultant Medical & Hemato Oncologist",
                    Department: "",
                    Centre: "Brookwood Baptist Medical Centre, Birmingham, Alabama, USA",
                    Image: "InternationalFacultyPhotos/DrKhaleelKAshraf.png",
                },
                {
                    Name: "Dr.K.M. Vinayakom BSc.MD.,DA.,FFARCS.,DABMA.",
                    Designation: "Retired Proffessor of Anesthasia",
                    Department: "",
                    Centre: "Medstar Georgetown University Medical Center, Washington DC, USA",
                    Image: "InternationalFacultyPhotos/DrKMVinayakom.png",
                },
            ],
        };
    },
    mounted() {
        //
        // this.JsonCreator(this.InternationalFacultyRawData, this.InternationalFacultyData);

    },
    methods: {
        //
        JsonCreator(RawData, Data) {
            const text = RawData.split('\n');
            // console.log(text);
            this.JsonData = text;
            // console.log(this.JsonData);
            // delete extra spaces and numbers from JsonData
            for (var i = 0; i < this.JsonData.length; i++) {
                this.JsonData[i] = this.JsonData[i].replace(/\s+/g, '');
                this.JsonData[i] = this.JsonData[i].replace(/\d+/g, '');
            }
            // remove . from start of each element in JsonData
            for (i = 0; i < this.JsonData.length; i++) {
                this.JsonData[i] = this.JsonData[i].replace(/^\./, '');
            }
            // create a json object with element of JsonData as values and key as Name
            for (i = 0; i < this.JsonData.length; i++) {
                Data.push({
                    Name: this.JsonData[i],
                });
            }
        }
    },
    components: {
        HomeMain,
        //  Table, 
        // CardWithoutPhoto,
        DetailsCards
    }
};
</script>
<style>
#Cards {
    margin-top: 20px;
    min-width: fit-content;
    padding: 25px;
    min-height: fit-content;
}

h4 {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
}
</style>