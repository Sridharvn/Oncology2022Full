<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <!--Crowne Plaza Color -->
                <!-- <v-btn v-bind="attrs" v-on="on" color="error"> -->
                <!-- <v-btn v-bind="attrs" v-on="on" color="primary"  id="dropDown"> -->
                <v-btn v-bind="attrs" v-on="on" color="primary">
                    <v-icon>mdi-download</v-icon>
                    Downloads
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in DownloadsLinks" :key="index">
                    <v-list-item-title v-on:click="linkDownloader(item)" id="downloadsListItem">{{
                            item.linkName
                    }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "App",
    data() {
        return {
            //
            active: false,
        };
    },
    props: {
        DownloadsLinks: {
            type: Array,
        },
        name: {
            type: String,
        },
    },
    mounted() {
        //
    },
    methods: {
        //
        linkDownloader(link) {
            // console.log(link.linkSrc);
            // this.$router.push(link.linkSrc)
            const filename = link.linkName;
            console.log("Inside axios function");
            window.open(link.linkSrc);
            axios({
                url: link.linkSrc,
                method: "GET",
                responseType: "blob",
                // withCredentials: true,
                crossorigin: true,
                // headers: {
                //     "Access-Control-Allow-Origin": "*",
                //     "Access-Control-Allow-Methods": "GET,POST,PUT",
                //     "Access-Control-Allow-Headers": "x-ms-*,content-*",
                //     "content-type": "*",
                // },
            }).then((response) => {
                console.log("Inside axios");
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", filename + ".pdf");
                document.body.appendChild(link);
                link.click();
            });
        },
        toggle() {
            this.active = !this.active;
        },
    },
};
</script>
<style>
#downloadsListItem {
    cursor: pointer;
}

#downloadsListItem:active {
    opacity: 0.5;
}

#dropDownBtn {
    background-color: var(--appBar-color);
    color: var(--secondary-color);
    text-align: center;
    padding: 0 20px;
    box-shadow: none;
}

.text-center {
    padding: 10px;
}
</style>