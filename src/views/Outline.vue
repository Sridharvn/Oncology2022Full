<template>
    <div>

        <HomeMain></HomeMain>
        <h1>Scientific Programme</h1>
        <div id="main">
            <main>
                <Activities id="activities"></Activities>
            </main>
            <aside>
                <div id="outlines">

                    <v-spacer></v-spacer>
                    <div v-for="point in points" :key="point" id="points">
                        <v-icon color="var(--text-color)" size="small">
                            mdi-star-circle
                        </v-icon>
                        <span>{{ point }}</span>
                    </div>

                </div>
            </aside>
        </div>
        <div id="quote">Dr. Patro's course on "Radiology for Oncologists". Radiation Oncologists especially
            please
            make
            use of this golden opportunity. Those who are interested please give their names in advance to
            conference
            mail id ASAP</div>
    </div>
</template>
<script>
import HomeMain from "../components/HomeMain.vue";
import Activities from "../components/Activities.vue";
export default {
    data() {
        return {
            points: [
                "Incorporation of molecular testing and case based approach to management of brain metastasis  (Panel Discussion)",
                "Advances in the management of cancer of prostate oligo metastasis(Case based Panel   Discussion)",
                "Nuances in Breast Cancer radiotherapy and re - eradiation in the era of neoadjuvant systemic   treatment",
                "Management of intermediate risk Prostate Cancer - What is the way forward ? (Panel Discussion)",
                "Evolving role of radiation in indolent lymphomas",
                "Challenging Breast Cancer Cases(Panel Discussion)",
                " Spatially fractionated radiation therapy",
                "Integration of Immunotherapy and Radiotherapy in NSCLC management",
                "Advances in improvement of quality of life and survival in upper GI Cancers",
                "Best treatments for early Prostate Cancer- Surgery, Radiation or neither(Panel Discussion)",
                " Multidisciplinary management of Thymic carcinomas",
                "Innovative, Biological approaches to personalized radiotherapy in metastatic cancer of the Breast",
                "Biologically driven adaptive radiotherapy",
                "New approaches to stage IV NSCLC(Panel discussion)",
                "What is new in the management of Vulvar and Vaginal Cancers ? ",
                "Endometrial Cancer - Past, present and future",
                " Challenges in epithelial ovarian cancer management?",
                "Drug drift from Stage IV to Stage II - Less is more or more is better ?",
                "Treatment sequencing in NSCLC - Good and bad of adjuvant vs neoadjuvant treatment",
                "Metastatic Castration Resistant Prostate Cancer - future is now",
                "Risk stratification and management of meduloblastoma",
                "Newer directions in the curative treatment of multiple myeloma",
                "Locally advanced rectal cancer - Past, Present and future",
                "Emerging screening options for early cancer detection",
                "Challenges in microsatellite stable colorectal cancer - new opportunities and challenges",
                "Adjuvant treatment in kidney and urothelial cancers - what is new?",
                "Prostate cancer brachytherapy - long term results at Longbeach, California",
                "Precision medicine in colorectal cancer - what is new?",
                "Practical Challenges in the implementation of precision medicine in oncology practice in India",
                "Evolving treatment landscape in chronic lymphatic leukemia",
                "Management of Her2 over expressing metastatic breast cancer - what is new?",
                "Therapeutic dilemmas in the treatment of newly diagnosed Hodgkin's lymphoma",
                "Neo - adjuvant immunotherapy in solid tumors - Is it going to produce a paradigm shift ?",
                "The microbiome - could it be a target in gastroesophageal, pancreatic and hepatobiliary cancers",
                "Approach to biochemical recurrences after radical prostatectomy",
                "Brachytherapy techniques and local control in head and neck cancer",
                "Do we require concomitant chemotherapy in the era of modern radiotherapy techniques in nasopharyngeal cancer",
                "Have we unlock the true potential of neoadjuvant systemic treatment in head and neck cancer",
                " Patient selection and survival with immunotherapy in TNBC",
                " Placing PARP-inhibitors in the therapeutic strategy for the treatment of breast cancer today",
                " A different way to treat mTNBC: reviewing the role of Sacituzumab govitecan",
                " Panel Discussion",
                " Adjuvant/neo-adjuvant therapy for locally advanced pancreatic cancer",
                " Hereditary Risk Assessment and Management in Pancreas Cancer",
                " Systemic therapy for advanced pancreatic cancer",
                " Panel Discussion",
                " Dual Checkpoints in Hepatocellular Carcinoma",
                " Angio + Checkpoints in Hepatocellular Carcinoma",
                " TARE, TACE, RFA, SBRT, PROTON THERAPY",
                " Immunotherapy in Biliary Tract Cancers",
                " Case based Panel Discussion"
            ]
        };
    },
    components: { HomeMain, Activities }
}
</script>
<style scoped>
/* h4,
span {
    text-align: left;
    color: var(--text-color);
    padding: 0 10px;
} */
/* * {
    border: 1px solid red;
    background-color: rgba(255, 0, 0, 0.3);
} */

#points {
    text-align: left;
    color: var(--text-color);
    padding: 0 10px;
    font-size: larger;
    margin-right: 10%;
}

#quote {
    text-align: center;
    color: var(--text-color);
    padding: 0 10px;
    font-size: xx-large;
    margin: 20px;
    border: 1px solid var(--text-color);
    border-radius: 30px;
    font-weight: 700;
}

/* #main {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
} */

#activities {
    border: 1px solid var(--text-color);
    padding: 10px;
    border-radius: 20px;
    margin: 10%;
}

#main {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}

aside {
    display: flex;
}

main {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    flex-direction: column;
    width: 50%;
}

@media only screen and (max-width: 968px) {

    /*Big smartphones [426px -> 600px]*/
    #quote {
        font-size: medium;
    }

    aside {
        display: flex;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: justify;
        flex-direction: column;
        width: 100%;
        /* background-color: rgba(255, 0, 0, 0.3); */
    }

    #main {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }
}
</style>