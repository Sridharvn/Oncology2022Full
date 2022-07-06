<template>
    <div id="CommittePage">
        <HomeMain></HomeMain>
        <v-row>
            <v-col>
                <h1>Organizing Committee</h1>
                <Table :Headers="OrganizingCommitteeHeaders" :TableData="OrganizingCommitteeData"></Table>
            </v-col>


        </v-row>
    </div>
</template>
<script>
import Table from '../components/Table.vue'
import HomeMain from '../components/HomeMain.vue'
export default {
    name: "CommittePage",
    data() {
        return {
            //
            OrganizingCommitteeHeaders: [
                {
                    text: "Name",
                    align: "center",
                    sortable: false,
                    value: "Name",
                },
            ],
            OrganizingCommitteeRawData: `    1. Dr. Francis V James MD
    2. Dr. Jayaprakash Madhavan MD, DNB
    3. Dr. K Pavithran MD, DM
    4. Dr. Jose Tom MD
    5. Dr. Chirag Desai MD, DM
    6. Dr. Jacob Kurian MS, Mch, FRCS
    7. Dr. Aju Mathew MD (US),AB,M.phil, FACP
    8. Dr. Madhu Sairam MD
    9. Dr. Arun Lal MD
    10. Dr. Jose Paul MD
    11. Dr. Nibin Bose MD
    12. Dr. Sajeev George Pulickal MD
    13. Dr. Vijaykaran Reddy MD
    14. Dr. Philip George MD, DM
    15. Dr. Jaisankar P MD, DM
    16. Dr. Rony Benson MD, DM, MRCP
    17. Dr. Surij Salih MS, Mch
    18. Dr. Anoop Jose MD
    19. Mr. Jithin MSc, DRP`,
            OrganizingCommitteeData: [],




        };

    },
    components: {
        Table,
        HomeMain,
    },
    mounted() {
        //
        this.JsonCreator(this.OrganizingCommitteeRawData, this.OrganizingCommitteeData);
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
                this.JsonData[i] = this.JsonData[i].replace(/\s+/g, " ");
                this.JsonData[i] = this.JsonData[i].replace(/\d+/g, "");
            }
            // remove . from start of each element in JsonData
            for (i = 0; i < this.JsonData.length; i++) {
                this.JsonData[i] = this.JsonData[i].replace(/^\s\./, "");
            }
            // create a json object with element of JsonData as values and key as Name
            for (i = 0; i < this.JsonData.length; i++) {
                Data.push({
                    Name: this.JsonData[i],
                });
            }
        }
        // JsonCreator(RawData, Data) {
        //     const text = RawData.split('\n');
        //     // console.log(text);
        //     this.JsonData = text;
        //     // console.log(this.JsonData);
        //     // delete extra spaces and numbers from JsonData
        //     for (var i = 0; i < this.JsonData.length; i++) {
        //         this.JsonData[i] = this.JsonData[i].replace(/\s+/g, '');
        //         this.JsonData[i] = this.JsonData[i].replace(/\d+/g, '');
        //     }
        //     // remove . from start of each element in JsonData
        //     for (i = 0; i < this.JsonData.length; i++) {
        //         this.JsonData[i] = this.JsonData[i].replace(/^\./, '');
        //     }
        //     // create a json object with element of JsonData as values and key as Name
        //     for (i = 0; i < this.JsonData.length; i++) {
        //         Data.push({
        //             Name: this.JsonData[i],
        //         });
        //     }
        // }
    },
}
</script>
<style>
h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--text-color);
    text-align: center;
    margin-top: 2rem;
}
</style>