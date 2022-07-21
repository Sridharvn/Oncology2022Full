<template>
  <div id="background">
    <div id="textPart">
    <div>
      Registration Form :
      <span
        ><a href="http://www.oncology2022.in/Registration-Form.pdf"
          >Registration-Form.pdf</a
        ></span
      >
    </div>
    <div>
      Payment Gateway Link :
      <span
        ><a href="https://feebook.southindianbank.com/FeeBookUser/org?id=670"
          >https://feebook.southindianbank.com/FeeBookUser/org?id=670</a
        ></span
      >
    </div></div>
    <div id="qr">
      <a href="https://feebook.southindianbank.com/FeeBookUser/org?id=670">
        <v-img src="./../assets/PaymentQR.png" id="paymentImage" />
      </a>
      Scan to pay
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
#background {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--Tab-color);
  // padding: 30px;
}
#qr{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 20px;
    margin-top: 30px;
}
#textPart{
    display: flex;
    justify-content: center;
    // align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 20px;
    margin-top: 30px;
    font-size: x-large;
}
#paymentImage {
  background-blend-mode: luminosity;
//   margin: 20px;
}

h1 {
  color: var(--text-color);
  margin: 1px;
}

* {
  font-weight: 700;
}

@media screen and (max-width: 800px) {
  #paymentImage {
    width: 150px;
    height: 150px;
  }

  h1 {
    font-size: xx-large;
  }
  #background{
    flex-direction: column;
  }
  #textPart{
    font-size: smaller;
  }
//   #textPart a{
//     font-size: x-small;
//   }
}

@media screen and (max-width: 460px) {
  #paymentImage {
    width: 100px;
    height: 100px;
  }

  h1 {
    font-size: large;
  }
}
</style>
