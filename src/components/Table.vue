<template>
    <div>
        <v-data-table :headers="Headers" :items="TableData" class="elevation-1" hide-default-footer dense>
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