<template>
    <div>
        <v-row dense>
            <v-col>
                <h1>{{ DetailstextData.Header }}</h1>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <h4 style="text-align:left">{{ DetailstextData.wish }}</h4>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <p>
                    {{ DetailstextData.Details }}
                </p>
                <!-- <p v-if="DetailstextData.Details2"></p> -->
                <div v-for="Details in DetailstextData.Details2" :key="Details">
                    {{ Details }}
                </div>
                <!-- {{ DetailstextData.Details2 }} -->
                <p v-if="DetailstextData.Details3">

                    {{ DetailstextData.Details3 }}
                </p>
            </v-col>
        </v-row>
        <v-row id="Thanks">
            <v-col> {{ DetailstextData.Thanks }}</v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row align="space-between" id="detailsFooter">
            <v-col>
                <details-footer :Footer="DetailstextData.Footer1"></details-footer>
            </v-col>
            <v-col>
                <details-footer :Footer="DetailstextData.Footer2"></details-footer>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import DetailsFooter from "./DetailsFooter.vue";
export default {
    components: { DetailsFooter },
    name: "",
    data: () => ({
        //
    }),
    props: {
        //
        DetailstextData: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style scoped>
div {
    /* Crowne Plaza Color */
    /* color: var(--primary-color); */
    /* Le Meridien Color */
    color: var(--text-color);
    padding: 10px;
}

#Thanks {
    font-weight: 500;
}

#detailsFooter {
    font-weight: 600;
}
</style>