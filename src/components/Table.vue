<template>
    <div id="tables">
        <!-- {{TableData}} -->
        <br>
        <v-data-table :headers="Headers" :items="TableData" class="elevation-5" hide-default-footer
            mobile-breakpoint="0" id="tables" items-per-page="1000" hide-default-header>
        </v-data-table>
    </div>
</template>
<script>
export default {
    name: "",
    data: () => ({
        //
    }),
    props: {
        //
        TableData: {
            type: Object,
            required: true,
        },
        Headers: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style scoped>
/* div {
    background-color: var(--secondary-color);
} */

#tables {
    /* background-color: var(--secondary-color); */
    color: var(--secondary-color);
    padding: 0 3%;
    font-weight: bold;
    margin-bottom: 25px;
}

/* @media screen and (max-width: 700px) {
    #tables tr td {
        text-align: left;
        

    }
} */
</style>