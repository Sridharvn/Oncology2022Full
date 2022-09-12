<template>
  <div id="background">
    <!-- https://forms.gle/Q2Bv2c55nJkSfjob9 -->
    <div id="registrationHowto" style="color:var(--text-color2)">
      Regn forms can be sent by post to: <br>
      Chairman/Secretary,<br>
      Conference Secretariate,<br>
      Oncology 2022,<br>
      C M C hospital, Perumbaikkad P O,<br>
      Kottayam,<br>
      686016,<br>
      Mob:9562084100/9447073203
    </div>
    <div id="textPart">
      <div>
        Registration Form (Online):
        <span><a href="https://forms.gle/Q2Bv2c55nJkSfjob9"
            target="_blank">https://forms.gle/Q2Bv2c55nJkSfjob9</a></span>
      </div>
      <div>
        Registration Form (Print):
        <span><a href="http://www.oncology2022.in/Registration-Form.pdf">Registration-Form.pdf</a></span>
      </div>
      <div>
        Payment Gateway Link:
        <span><a
            href="https://feebook.southindianbank.com/FeeBookUser/org?id=670">https://feebook.southindianbank.com/FeeBookUser/org?id=670</a></span>
      </div>

    </div>
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

#qr {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 20px;
  margin-top: 30px;
}

#textPart {
  display: flex;
  justify-content: center;
  // align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 20px;
  margin-top: 30px;
  font-size: large;
}

#paymentImage {
  background-blend-mode: luminosity;
  margin-right: 15px;
  //   margin: 20px;
}

#registrationHowto {
  text-align: start;
  padding: 10px;
}

h1 {
  color: var(--text-color);
  margin: 1px;
}

* {
  font-weight: 700;
}

@media screen and (max-width: 1115px) {
  #paymentImage {
    width: 150px;
    height: 150px;
  }
}

@media screen and (max-width: 968px) {

  h1 {
    font-size: xx-large;
  }

  #background {
    flex-direction: column;
  }

  #textPart,
  #registrationHowto {
    font-size: medium;
  }

  #registrationHowto {
    margin-left: -400px;
  }

  //   #textPart a{
  //     font-size: x-small;
  //   }
}

@media screen and (max-width: 660px) {
  #paymentImage {
    width: 100px;
    height: 100px;
  }

  h1 {
    font-size: large;
  }

  #registrationHowto {
    margin-left: -35%;
  }

  #textPart,
  #registrationHowto {
    font-size: smaller;
  }
}
</style>
