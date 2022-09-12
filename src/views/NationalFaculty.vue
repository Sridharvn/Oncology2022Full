<template>
    <div id="NationalFaculty">
        <HomeMain v-if="deviceType != 'mobile'"></HomeMain>
        <!-- {{NationalFacultyData}} -->
        <v-col>
            <h1>National Faculty</h1>
            <Table :Headers="NationalFacultyHeaders" :TableData="NationalFacultyData">
            </Table>
        </v-col>


    </div>
</template>
<script>
import Table from '../components/Table.vue';
import HomeMain from '../components/HomeMain.vue';
export default {
    props: {
        deviceType: {
            type: String,
            default: "desktop",
            required: false
        },
    },
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
        //     NationalFacultyRawData: `    1. Dr. S H Advani MD, DM 
        //     1. Dr. Sudeep Gupta MD, DM 
        //     1. Dr. V P Gangadharan MD, DM 
        //     1. Dr. K Pavithran MD, DM, FRCP 
        //     1. Dr. Kumar Prabhash MD, DM 
        //     1. Dr. Amit Varma MD 
        //     1. Dr. K C Pathro MD, DNB, MBA 
        //     1. Dr. Madhup Rastogi MD 
        //     1. Dr. Shyam Aggarwal MD, DM 
        //     1. Dr. Purvish Parikh MD, PhD 
        //     1. Dr. O P Singh MD 
        //     1. Dr. G K Rath MD 
        //     1. Dr. Raju Titus Chacko MD 
        //     1. Dr. Krupasankar MD, DM 
        //     1. Dr. Vijayand Reddy MD, DNB 
        //     1. Dr. Selvalakshmi MD 
        //     1. Dr. Kalai Selvi MD, DM 
        //     1. Dr. Anitha Ramesh MD, DCH, MSc, DM 
        //     1. Dr. T Raja MD, DM 
        //     1. Dr. Aswin MD, DNB 
        //     1. Dr. Sajeed MD, DNB 
        //     1. Dr. Cessal Thomas Kainickal MD 
        //     1. Dr. Srinivas Chilukuri MD 
        //     1. Dr. Aswathy Susan MD 
        //     1. Dr. Rahul Krishnathri MD 
        //     1. Dr. Raju Titus Chacko MD 
        //     1. Dr. Ashish Singh MD, DM 
        //     1. Prof. Shanmugha Sundaram DRM, DNB 
        //     1. Dr. Sekhar Patil MD, DM 
        //     1. Prof. Ramesh Billimagga MD, DRM 
        //     1. Dr. Lokesh Vishwanath MD 
        //     1. Dr. Subramaniyan MRCP, FRCR 
        //     1. Dr. Sudhindran MS, FRCS 
        //     1. Dr. Ginil Kumar MS, Mch 
        //     1. Prof. Dr. Vivek Koushal MD, DNB 
        //     1. Dr. Anoop MD, DM 
        //     1. Dr. Deb Narayan Duda MD 
        //     1. Dr. Manikantan MD, DM 
        //     1. Dr. Sanju Cyriac MD, DM 
        //     1. Dr. Arun Philip MD, DM 
        //     1. Dr. Bharath Rangarajan MD, DM 
        //     1. Dr. Indraneel Mallik MD `,
        //     NationalFacultyRawDataOld: `    1. Dr. S H Advani MD, DM
        // 2. Dr. Sudeep Gupta MD, DM
        // 3. Dr. K Pavithran MD, DM
        // 4. Dr. Kumar Prabhash MD, DM
        // 5. Dr. K C Pathro MD, DNB, MBA
        // 6. Dr. Madhu P Rastogi MD
        // 7. Dr. Shyam Aggarwal MD, DM
        // 8. Dr. Krupasankar MD, DM
        // 9. Dr. Vijayand Reddy MD, DNB
        // 10. Dr. Selvalakshmi MD
        // 11. Dr. Kalai Selvi MD, DM
        // 12. Dr. Anitha Ramesh MD, DCH, MSc, DM
        // 13. Dr. T Raja MD, DM
        // 14. Dr. Beena Anand DNB, DMRT
        // 15. Dr. Aswin MD, DNB
        // 16. Dr. Sajeed MD, DNB
        // 17. Dr. Cessal Thomas Kainickal MD
        // 18. Dr. Srinivas Chilukuri MD
        // 19. Dr. Aswathy Susan MD
        // 20. Dr. Dayanand Sharma MSc, Phd
        // 21. Dr. Ashish Singh MD, DM
        // 22. Prof. Shanmugha Sundaram DRM, DNB
        // 23. Dr. Sekhar Patil MD, DM
        // 24. Prof. Ramesh Billimagga MD, DRM
        // 25. Dr. Lokesh Vishwanath MD
        // 26. Dr. Subramaniyan MRCP, FRCR
        // 27. Dr. Sudhindran MS, FRCS
        // 28. Dr. Ginil Kumar MS, Mch
        // 29. Prof. Dr. Vivek Koushal MD, DNB
        // 30. Dr. Deb Narayan Dutta MD
        // 31. Dr. Manikantan MD, DM
        // 32. Dr. Sanju Cyriac MD, DM
        // 33. Dr. Arun Philip MD, DM
        // 34. Dr. Bharath Rangarajan MD, DM`,
        NationalFacultyData: [],
        NationalFaculty: ["Dr. Suresh Advani MD,DM", " Dr. V P Gangadharan MD,MD,DM,DHA", " Dr. Jacob Kurian MS,MCh,FRCS", " Dr. Chithrathara MS,MCh", " Dr. K Pavithran MD,DM", " Dr. Sreejith Nair MD,DM", " Dr. Anil Jose MD,DM", " Dr. G K Rath MD", " Dr. Raju Titus Chacko MD", " Dr. Somarajan MD", " Dr. K V Mohan MD", " Dr. Arun Philip MD,DM", " Dr. Sanju Cyriac MD,DM", " Dr. Rahul Krishnatry MD", " Dr. Vijay Anand Reddy MD, FNDM, FUICC(UK), FUICC(AUS)", " Dr. Kalai Selvi MD, DM", " Dr. Krupa Shankar MD, DM", " Dr. Selvamani MD", " Dr. Srinivas Chilukuri MD, PDCR", " Dr. Virendra Vyas MD", " Dr. Subhashini John MD, MAMS", " Dr. K C Patro MD, DNB, MBA", " Dr. Dinesh M MD", " Dr. Francis V James MD", " Dr. P G Jayaprakash MD", " Dr. Jayaprakash Madhavan MD, DNB", " Dr. Moth Abraham Kuriakose FDRCS, FRCS, FACS", " Dr. Jaisankar P MD, DM", " Dr. Neeraj Sidharthan MD, DM", " Dr. Hari Menon MD, DM ", "Dr. Ashish Singh MD, DM", "Dr. Kumar Prabhash MD, DM ", "Dr. Sarbanigosh Laskar MD, DNB ", "Dr. Rajiv Sarin MD, FRCR ", "Dr. Tejinder Kataria MD, DNB ", "Dr. Varun Rajan MD, DM ", "Dr. Neeraj Jain MD ", "Dr. Dhiren", "Dra Sachan MD ", "Dr. Mathews Jose MD, DM ", "Dr. Manikandan MD, DM ", "Dr. Ponraj MD, DM ", "Dr. Giri MD ", "Dr. Rajesh Vasishta MD ", "Dr. R K Vyas MD ", "Dr. Aswin Kumar MD, DNB ", "Dr. Sajeed MD ", "Dr. Manoj Gupta MD, DNB ", "Dr. Sureshkumar MD, DNB ", "Dr. Sivaramakrishnan MD ", "Dr. Sajeev George MD ", "Dr. Praveen J Nathan MD ", "Dr. Vivek Kaushal MD ", "Dr. Kim J Mammen MS, MCh, DNB, FRCS, FAGS, MNAMS ", "Dr. Sudhin", "Dran MS, FRCS ", "Dr. Shishir Shetty MS, MCh ", "Dr. Susan Mathew MD, DNB ", "Dr. Ajayakumar MD, DNB ", "Dr. Durgapoorna MD ", "Dr. Ashok Komaranchath MD, DM, MRCP, FRCP ", "Dr. Linu Jacob MD, DM ", "Dr. Sidharthgosh Laskar MD, DNB ", "Dr. V Srinivasan MD ", "Dr. Mathew Cherian MD ", "Dr. Subrata Saha MD ", "Dr. Nagarjun Reddy MD ", "Dr. Munish Gairola MD ", "Dr. Arun Sankar MD ", "Dr. Gopal Maheswari MD, DNB ", "Dr. Praseeda Nair MD ", "Dr. Harish MD,DM ", "Dr. T N Vijayasree MD ", "Dr. Prashant P Nair MD, DM ", "Dr. Mithun Chacko John MD, DNB ", "Dr. Rony Benson MD, DNB, DM, ECMO, MRCP ", "Dr. Nagaraj Huilgol MD ", "Dr. Abu Abraham MD, ECMO ", "Dr. Shaqul Qamar Wani MD ", "Dr. Bhoopal S MD ", "Dr. V Kalman MD ", "Dr. SGD Gangadharan MD, DM ", "Dr. P S Sreedhar MD ", "Dr. Umesh Mahantshetty MD, DNB ", "Dr. Lokesh Vishwanath MD ", "Dr. T Raja MD, DM ", "Dr. Balamurali Krishna DMRT, DNB ", "Dr. 0 P Singh MD ", "Dr. R Mahadevan MD, DNB ", "Dr. Saravanan MD ", "Dr. Priya MD ", "Dr. Binitha Thomas MD, DNB ", "Dr. Manish Pandey MD, DNB ", "Dr. K L Jayakumar MD, DNB ", "Dr. Govind Babu MD, DM ", "Dr. Geetha Narayanan MD, DM ", "Dr. K V Gangadharan MD, DM ", "Dr. Satheesan MS, MCh ", "Dr. Geetha MD ", "Dr. Arun Warder MD, DM ", "Dr. Debnarayan Dutta MD", "Dr. Anupama G MD, DM ", "Dr. D K Vijayakumar MS, MCh ", "Dr. J P Agarwal MD ", "Dr. Rakesh Jalali MD ", "Dr. Madhup Rastogi MD ", "Dr. Ramesh Billimagga MD ", "Dr. Madhu Sairam MD ", "Dr. Firos Rajan MS,MCh ", "Dr. Ramanan MD, DM ", "Dr. Saikat Das MD ", "Dr. Tanvir Pasha MD ", "Dr. Rajkumar MD, DM ", "Dr. Devanand MD, DM ", "Dr. Sudhahar MD, DM ", "Dr. Govind Gangadharan MD, DM ", "Dr. Sourabh RadhakrishnanMD, DM ", "Dr. Jomon Raphael MD ", "Dr. Prema MD ", "Dr. Kunjhalankutty MD ", "Dr. Bindu MD ", "Dr. Nibin Bose MD ", "Dr. Ansar Suhaid Sait MD ", "Dr. Renu DMRT ", "Dr. R K Anand MD ", "Dr. Ajithkumar MD ", "Dr. Rajeev DMRT, DNB ", "Dr. Sivanandan MD ", "Dr. Malu Rafi DNB ", "Dr. Cessal T Kainickal MD ", "Dr. Roshni DNB ", "Dr. Priya MD ", "Dr. Chan", "Dramohan MS, MCh ", "Dr. Shaji Thomas MS, MCh ", "Dr. Prakash MS, MCh ", "Dr. Anoop MD, DM ", "Dr. Anoop R MD ", "Dr. Jose Paul MD ", "Dr. Saseen", "Dran MD ", "Dr. Sreelesh MD, DM ", "Dr. Donald Fernandez MD ", "Dr. Suresh Rao MD ", "Dr. Sanjay Sharma MD, DNB ", "Dr. Rajiv Seam MD ", "Dr. Sharunugha Kumar MD ", "Dr. Ram Madhav MD ", "Dr. K V Sajeevan MD, DM ", "Dr. Sreedharan MD, DM ", "Dr. Yamini Krishnan MD, DM ", "Dr. Paul Augustine MS ", "Dr. Bipin Thomas MS ", "Dr. Paul George MD ", "Dr. Balagopal MS ", "Dr. Anupama R MD, DGO ", "Dr. Sapna Nangia MD ", "Dr. S Parameswaran MD, FRACR ", "Dr. Suresh Dutt MD ", "Dr. Ali Ashar MD ", "Dr. Muhammed Salim MS ", "Dr. Amnia Suresh MD ", "Dr. Durga Prasan MD, DNB ", "Dr. Sreekumar Pillai, MS, Mch ", "Dr. Kuruvilla MS ", "Dr. Silambarasan PhD ",],
    }),
    mounted() {
        //
        // this.JsonCreator(this.NationalFacultyRawData, this.NationalFacultyData);
        this.tableDataCreator();
    },
    methods: {
        tableDataCreator() {
            for (var i = 0; i < this.NationalFaculty.length; i++) {
                // console.log(this.NationalFaculty[i]);
                var RawData = {
                    Name: this.NationalFaculty[i]
                }
                this.NationalFacultyData.push(RawData);
            }
        },
        //
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
        //     console.log(Data);
        // },
        // JsonCreator(RawData, Data) {
        //     const text = RawData.split("\n");
        //     // console.log(text);
        //     this.JsonData = text;
        //     // console.log(this.JsonData);
        //     // delete extra spaces and numbers from JsonData
        //     for (var i = 0; i < this.JsonData.length; i++) {
        //         this.JsonData[i] = this.JsonData[i].replace(/\s+/g, "");
        //         this.JsonData[i] = this.JsonData[i].replace(/\d+/g, "");
        //     }
        //     // remove . from start of each element in JsonData
        //     for (i = 0; i < this.JsonData.length; i++) {
        //         this.JsonData[i] = this.JsonData[i].replace(/^\./, "");
        //     }
        //     // create a json object with element of JsonData as values and key as Name
        //     for (i = 0; i < this.JsonData.length; i++) {
        //         Data.push({
        //             Name: this.JsonData[i],
        //         });
        //     }
        // }
    },
    components: { Table, HomeMain }
}
</script>