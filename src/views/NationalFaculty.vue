<template>
    <div id="NationalFaculty">
        <HomeMain></HomeMain>
        <v-col>
            <h1>National Faculty</h1>
            <Table :Headers="NationalFacultyHeaders" :TableData="NationalFacultyData"></Table>
        </v-col>


    </div>
</template>
<script>
import Table from '../components/Table.vue';
import HomeMain from '../components/HomeMain.vue';
export default {
    name: "NationalFaculty",
    data: () => ({
        NationalFacultyHeaders: [
            {
                text: "Name",
                align: "center",
                sortable: false,
                value: "Name",
            },
        ],
        NationalFacultyRawData: `    1. Dr. S H Advani MD, DM
    2. Dr. Sudeep Gupta MD, DM
    3. Dr. K Pavithran MD, DM
    4. Dr. Kumar Prabhash MD, DM
    5. Dr. K C Pathro MD, DNB, MBA
    6. Dr. Madhu P Rastogi MD
    7. Dr. Shyam Aggarwal MD, DM
    8. Dr. Krupasankar MD, DM
    9. Dr. Vijayand Reddy MD, DNB
    10. Dr. Selvalakshmi MD
    11. Dr. Kalai Selvi MD, DM
    12. Dr. Anitha Ramesh MD, DCH, MSc, DM
    13. Dr. T Raja MD, DM
    14. Dr. Beena Anand DNB, DMRT
    15. Dr. Aswin MD, DNB
    16. Dr. Sajeed MD, DNB
    17. Dr. Cessal Thomas Kainickal MD
    18. Dr. Srinivas Chilukuri MD
    19. Dr. Aswathy Susan MD
    20. Dr. Dayanand Sharma MSc, Phd
    21. Dr. Ashish Singh MD, DM
    22. Prof. Shanmugha Sundaram DRM, DNB
    23. Dr. Sekhar Patil MD, DM
    24. Prof. Ramesh Billimagga MD, DRM
    25. Dr. Lokesh Vishwanath MD
    26. Dr. Subramaniyan MRCP, FRCR
    27. Dr. Sudhindran MS, FRCS
    28. Dr. Ginil Kumar MS, Mch
    29. Prof. Dr. Vivek Koushal MD, DNB
    30. Dr. Deb Narayan Dutta MD
    31. Dr. Manikantan MD, DM
    32. Dr. Sanju Cyriac MD, DM
    33. Dr. Arun Philip MD, DM
    34. Dr. Bharath Rangarajan MD, DM`,
        NationalFacultyData: [],
    }),
    mounted() {
        //
        this.JsonCreator(this.NationalFacultyRawData, this.NationalFacultyData);
    },
    methods: {
        //
        JsonCreator(RawData, Data) {
            const text = RawData.split("\n");
            // console.log(text);
            this.JsonData = text;
            // console.log(this.JsonData);
            // delete extra spaces and numbers from JsonData
            for (var i = 0; i < this.JsonData.length; i++) {
                this.JsonData[i] = this.JsonData[i].replace(/\s+/g, "");
                this.JsonData[i] = this.JsonData[i].replace(/\d+/g, "");
            }
            // remove . from start of each element in JsonData
            for (i = 0; i < this.JsonData.length; i++) {
                this.JsonData[i] = this.JsonData[i].replace(/^\./, "");
            }
            // create a json object with element of JsonData as values and key as Name
            for (i = 0; i < this.JsonData.length; i++) {
                Data.push({
                    Name: this.JsonData[i],
                });
            }
        }
    },
    components: { Table, HomeMain }
}
</script>