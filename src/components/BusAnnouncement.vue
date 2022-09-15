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
}
.announcement {
  background-color: var(--primary-color);
}
.image-container {
  height: fit-content;
  width: fit-content;
}
@media screen and (max-width: 750px) {
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
  }
}
</style>
