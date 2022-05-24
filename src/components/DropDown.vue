<template>
    <div>
        <button @click="toggle">Toggle</button>
        <div v-if="active">
            <div v-for="link in DownloadsLinks" :key="link">
                <div v-on:click="linkDownloader(link)" id="dropdownList">{{ link.linkName }}</div>
            </div>
        </div>
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

            axios({
                url: link.linkSrc,
                method: "GET",
                responseType: "blob",
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "image.jpg");
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
/* #dropdownList change on hover cursor to pointer */
#dropdownList:hover {
    cursor: pointer;
}

/* #dropdownList change on click color opacity to 50% */
#dropdownList:active {
    opacity: 0.6;
}

/* #dropdownlist change background t0 var(--primary-color) and transform it to under the appbar */
#dropdownList {
    background-color: var(--primary-color);
    transform: translateY(300%);
}
</style>