<template>
    <div id="background">
        <h1>Payment Gateway link</h1>
        <a href="https://feebook.southindianbank.com/FeeBookUser/org?id=670">
        <v-img src="./../assets/PaymentQR.png" id="paymentImage"/>
        </a>
    </div>
</template>
<script></script>
<style lang="scss" scoped>
#background{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--Tab-color);
    // padding: 30px;
}
#paymentImage{
     background-blend-mode: luminosity;
     margin: 20px;
}
h1{
    color: var(--text-color);
    margin: 1px;
}
@media screen and (max-width: 600px) {
    #paymentImage{
        width: 150px;
        height: 150px;
    }

    h1{
        font-size: xx-large;
    }
}
@media screen and (max-width: 460px) {
    #paymentImage{
        width: 100px;
        height: 100px;
    }

    h1{
        font-size: large;
    }
}
</style>