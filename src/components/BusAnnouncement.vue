<template>
  <div class="announcement">
    <h1>Announcement</h1>
    <div class="announcement-container">
      <v-img
        src="./../assets/Megaphone-removebg-preview.png"
        class="image-container megaphone"
      ></v-img>
      <v-spacer></v-spacer>
      <h2 class="text-color-class">
        Conveyance/Luxury bus will be there from Trivandrum and Calicut to Cochin on 12th
        & 13th October at 4 PM. Those who are interested to avail this may contact Mr.
        Paul - 8089530177, 9847044578
      </h2>
      <h2 class="text-color-class">
        There will be luxury Bus Trips at 4:30PM from Hotel Le Meridien to Trivandrum via
        Alappuzha and to Calicut via Thrissur on 16/10/2022
      </h2>
      <v-img
        src="./../assets/Bus-removebg-preview.png"
        class="image-container bus"
      ></v-img>
    </div>
  </div>
</template>
<style scoped lang="scss">
.text-color-class {
  color: var(--text-color);
  padding: 10px;
}
.announcement-container {
  display: flex;
  justify-content: space-between;
}
.announcement {
  background-color: var(--primary-color);
}
.image-container {
  height: fit-content;
  width: fit-content;
}
@media screen and (max-width: 995px) {
  .announcement-container {
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .image-container {
      display: none;
    }
    .bus {
      display: block;
    }
    h2 {
      font-size: medium;
    }
  }
}
</style>
