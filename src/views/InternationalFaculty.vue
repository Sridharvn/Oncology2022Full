<template>
    <div id="InternationalFaculty">
        <HomeMain></HomeMain>
        <!-- <v-col>
            <h1>International Faculty</h1>
            <Table :Headers="InternationalFacultyHeaders" :TableData="InternationalFacultyData"></Table>
        </v-col> -->
        <v-row>
            <v-col v-for="item in InternationalFacultyData" :key="item" id="Cards">
                <CardWithoutPhoto :CardData="item"></CardWithoutPhoto>
            </v-col>
        </v-row>
        <h4>List incomplete and more are expected</h4>
    </div>
</template>
<script>
import HomeMain from "../components/HomeMain.vue";
// import Table from "../components/Table.vue";
import CardWithoutPhoto from "../components/CardWithoutPhoto.vue";
export default {
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
                },
                {
                    Name: "Dr. Tracey O'mconnor MD",
                    Designation: "Associate Professor of Oncology & Medicine",
                    Department: "",
                    Centre: "Rosewell Park Comprehensive Cancer Centre, Buffalo, New York, USA",
                },
                {
                    Name: "Dr. Grace Dy MD",
                    Designation: "Associate Professor of Oncology & Medicine",
                    Department: "Division of Thoracic Malignancies",
                    Centre: "Rosewell Park Comprehensive Cancer Centre, Buffalo, New York, USA",
                },
                {
                    Name: "Dr. Patrick Boland MD",
                    Designation: "Assistant Professor of Oncology & Medicine",
                    Department: "Division of GI Malignancies",
                    Centre: "Rosewell Park Comprehensive Cancer Centre, Buffalo, New York, USA",
                },
                {
                    Name: "Dr. Shashikant Lele MD, FACOG",
                    Designation: "Professor of Gynaec Oncology",
                    Department: "",
                    Centre: "Roswell Park Cancer Institute, Buffaloe, New York, USA",
                },
                {
                    Name: "Dr. Nisar M Syed MD, FACRO",
                    Designation: "Medical Director, Radiation Oncology & Endocurietherapy",
                    Department: "",
                    Centre: "Memorialcare Cancer Institute, Long Beach Medical Center, California, USA",
                },
                {
                    Name: "Dr. Saby George MD, FACP ",
                    Designation: "Professor of Oncology & Medicine",
                    Department: "",
                    Centre: "Rosewell Park Comprehensive Cancer Centre, Buffalo, New York, USA",
                },
                {
                    Name: "Dr. Rojymon Jacob MD",
                    Designation: "Professor of Radiation Oncology",
                    Department: "",
                    Centre: "O’Neal Comprehensive Cancer Centre, Birmingham, Alabama, USA",
                },
                {
                    Name: "Kurian Joseph FRCR, FRCP",
                    Designation: "Associate Professor of Radiation Oncology",
                    Department: "",
                    Centre: "Cross Cancer Institute, Alberta, Canada",
                },
                {
                    Name: "Dr. Najeeb Mohideen MD, FRCR, FASTRO",
                    Designation: "Consultant Radiation Oncologist",
                    Department: "",
                    Centre: "North Western Community Hospital, Arlington Heights Chicago, USA",
                },
                {
                    Name: "Dr. Rema Jyotirmayi MD, MRCP, FRCR",
                    Designation: "Consultant Clinical Oncologist",
                    Department: "",
                    Centre: "Maidstone & Tunbridge Wells, NHS Trust, UK",
                },
                {
                    Name: "Dr. T Ajithkumar MD, MRCP, FRCR",
                    Designation: "Clinical Oncologist",
                    Department: "",
                    Centre: "Addenbrookes Hospital, Cambridge, NHS, UK",
                },
                {
                    Name: "Dr. Ajith Venniyoor MD, DNB, DM (Med Onco)",
                    Designation: "Medical Oncologist",
                    Department: "",
                    Centre: "The Royal Hospital, Muscat, Oman",
                },
                {
                    Name: "Dr.Khaleel K. Ashraf MD, FACP",
                    Designation: "Consultant Medical & Hemato Oncologist",
                    Department: "",
                    Centre: "Brookwood Baptist Medical Centre, Birmingham, Alabama, USA",
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
        CardWithoutPhoto
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