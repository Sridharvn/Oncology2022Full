<template>
    <div id="tables">
        <v-data-table :headers="Headers" :items="TableData" class="elevation-1" hide-default-footer dense
            mobile-breakpoint="0" id="tables">
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
}
</style>