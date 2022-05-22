<template>
    <div class="footer1">
        <!-- <v-row>
            <v-col>
                <div class="footer1">
                    <v-row>
                        <v-col>{{ Footer.name }}</v-col>
                    </v-row>
                    <v-row>
                        <v-col>{{ Footer.designation }}</v-col>
                    </v-row>
                    <v-row>
                        <v-col>{{ Footer.phone }}</v-col>
                    </v-row>
                    <v-row>
                        <v-col>{{ Footer.email }}</v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row> -->
        <v-row justify="space-between">
            <v-col>
                {{ Footer.name }}
                <br>
                {{ Footer.designation }}
                <br>
                {{ Footer.phone }}
                <br>
                {{ Footer.email }}
            </v-col>
        </v-row>
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
        Footer: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style>
.footer1 {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>