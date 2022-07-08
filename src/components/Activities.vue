<template>
    <div>
        <h2>Preconference Scientific Programmes on 13/10/22</h2>
        <div v-for="(point, index) in points" :key="point">
            {{ index + 1 }}) {{ point }}
        </div>
        <h3> Preconference get together at 7.00 pm on 13/10/22</h3>
        <h2>14th, 15th & 16th October</h2>
        <div v-for="(point, index) in points2" :key="point">
            {{ index + 1 }}){{ point }}
        </div>
    </div>
</template>
<script>
export default {
    name: "Preconference",
    data: () => ({
        //
        points: [
            "Molecular Oncology Course (8 am to 5 pm)",
            "Professor Dr Manoj Gupta, Clinical Radiobiology Course (8 am to 5 pm)"
        ],
        points2: [
            "Meet the professor sessions",
            "Case based panel discussions",
            "Plenary sessions on recent advances",
            "Free paper sessions",
            " International & National Fellowships",
            "Course on Radiology for Oncologists",
            "Poster presentations",
            "Best paper best poster sessions",
            "Oncology quiz...specialty wise",
            "Evening variety entertainments"
        ]
    }),
    props: {
        //
    },
};
</script>
<style>
/* style*/
h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    color: var(--text-color);
}

h3 {
    text-align: left;
}

div {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--text-color);
}
</style>