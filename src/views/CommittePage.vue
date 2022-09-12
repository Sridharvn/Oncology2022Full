<template>
    <div id="CommittePage">
        <HomeMain v-if="deviceType != 'mobile'"></HomeMain>
        <!-- {{OrganizingCommitte}} -->
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
    props: {
        deviceType: {
            type: String,
            default: "desktop",
            required: false
        },
    },
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
            //         OrganizingCommitteeRawData: ` 1. Dr. Francis V James MD 
            //         2. Dr. Jayaprakash Madhavan MD, DNB 
            //         3. Dr. K Pavithran MD, DM, FRCP 
            //         4. Dr. Jose Tom MD 
            //         5. Dr. Chirag Desai MD, DM 
            //         6. Dr. Jacob Kurian MS, Mch, FRCS 
            //         7. Dr. Aju Mathew MD (US), AB (Int Med, Med Onc Haem Onc), M.phil (Cambridge), FACP 
            //         8. Dr. Madhu Sairam MD 
            //         9. Dr. Anm Cal MD 
            //         10. Dr. Jose Paul MD, FRCR 
            //         11. Dr. Nibin Bose MD 
            //         12. Dr. Sajeev George Pulickal MD 
            //         13. Dr. Vijaykaran Reddy MD 
            //         14. Dr. Jaisankar P MD, DM 
            //         15. Dr. Rony Benson MD, DM, MRCP 
            //         16. Dr. Surij Salih MS, Mch 
            //         17. Dr. Anoop Jose MD 
            //         18. Mr. Jithin MSc, DRP `,
            //         OrganizingCommitteeRawData1: `    1. Dr. Francis V James MD
            // 2. Dr. Jayaprakash Madhavan MD, DNB
            // 3. Dr. K Pavithran MD, DM
            // 4. Dr. Jose Tom MD
            // 5. Dr. Chirag Desai MD, DM
            // 6. Dr. Jacob Kurian MS, Mch, FRCS
            // 7. Dr. Aju Mathew MD (US),AB,M.phil, FACP
            // 8. Dr. Madhu Sairam MD
            // 9. Dr. Arun Lal MD
            // 10. Dr. Jose Paul MD
            // 11. Dr. Nibin Bose MD
            // 12. Dr. Sajeev George Pulickal MD
            // 13. Dr. Vijaykaran Reddy MD
            // 14. Dr. Philip George MD, DM
            // 15. Dr. Jaisankar P MD, DM
            // 16. Dr. Rony Benson MD, DM, MRCP
            // 17. Dr. Surij Salih MS, Mch
            // 18. Dr. Anoop Jose MD
            // 19. Mr. Jithin MSc, DRP`,
            OrganizingCommitteeData: [],
            OrganizingCommitte: ["Dr. Francis V James MD", "Dr. Jayaprakash Madhavan MD, DNB", "Dr. K Pavithran MD, DM, FRCP", "Dr. Jose Tom MD", "Dr. Chirag Desai MD, DM", "Dr. Jacob Kurian MS, Mch, FRCS", "Dr. Aju Mathew MD (US), AB (Int Med, Med Onc & Haem Onc), M.phil (Cambridge), FACP", "Dr. Madhu Sairam MD", "Dr. Arun Lal MD", "Dr. Jose Paul MD, FRCR", "Dr. Nibin Bose MD", "Dr. Sajeev George Pulickal MD", "Dr. Vijaykaran Reddy MD", "Dr. Jaisankar P MD, DM", "Dr. Rony Benson MD, DM, MRCP", "Dr. Surij Salih MS, Mch", "Dr. Anoop Jose MD", "Mr. Jithin MSc, DRP"],




        };

    },
    components: {
        Table,
        HomeMain,
    },
    mounted() {
        //
        // this.JsonCreator(this.OrganizingCommitteeRawData, this.OrganizingCommitteeData);
        this.tableDataCreator();
    },
    methods: {
        //
        tableDataCreator() {
            for (var i = 0; i < this.OrganizingCommitte.length; i++) {
                // console.log(this.NationalFaculty[i]);
                var RawData = {
                    Name: this.OrganizingCommitte[i]
                }
                this.OrganizingCommitteeData.push(RawData);
            }
        },
        // JsonCreator(RawData, Data) {
        //     const text = RawData.split("\n");
        //     // console.log(text);
        //     this.JsonData = text;
        //     // console.log(this.JsonData);
        //     // delete extra spaces and numbers from JsonData
        //     for (var i = 0; i < this.JsonData.length; i++) {
        //         this.JsonData[i] = this.JsonData[i].replace(/\s+/g, " ");
        //         this.JsonData[i] = this.JsonData[i].replace(/\d+/g, "");
        //     }
        //     // remove . from start of each element in JsonData
        //     for (i = 0; i < this.JsonData.length; i++) {
        //         this.JsonData[i] = this.JsonData[i].replace(/^\s\./, "");
        //     }
        //     // create a json object with element of JsonData as values and key as Name
        //     for (i = 0; i < this.JsonData.length; i++) {
        //         Data.push({
        //             Name: this.JsonData[i],
        //         });
        //     }
        // }
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