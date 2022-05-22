<template>
    <div>
        <v-row>
            <v-col>
                <h1>{{ DetailstextData.Header }}</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h4>{{ DetailstextData.wish }}</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p>
                    {{ DetailstextData.Details }}
                </p>
                <p v-if="DetailstextData.Details2">
                    {{ DetailstextData.Details2 }}
                </p>
                <p v-if="DetailstextData.Details3">

                    {{ DetailstextData.Details3 }}
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col> {{ DetailstextData.Thanks }}</v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row align="space-between">
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
    /* background-color: var(--primary-color); */
    color: var(--primary-color);
    padding: 10px;
}
</style>