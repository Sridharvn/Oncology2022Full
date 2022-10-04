<template>
  <div id="home">
    <main>
      <!-- <h1>Oncology 2022</h1> -->
      <br />
      <h2>
        International Conference on Recent Advances in the Multidisciplinary Management of
        Common Malignancies
      </h2>
      <h4 style="color: var(--text-color)">2022 October 14,15 and 16</h4>
      <h5>Organised by : CCRS</h5>
      <h5>VENUE : HOTEL Le Meridien, KOCHI</h5>
      <h5>
        Email :
        <span
          ><a href="mailto:oncology2022india@gmail.com"
            >oncology2022india@gmail.com</a
          ></span
        >
      </h5>
      <h5>Website : www.oncology2022.in</h5>
      <br />
      <v-img
        src="./../assets/cog-logo.png"
        contain
        max-height="80px"
        max-width="80px"
        id="ccrsLogo"
      >
      </v-img
      ><br />
      <a href="https://www.varian.com/" target="_blank">
        <v-img
          src="./../assets/VarianLogo2.png"
          contain
          max-height="250px"
          max-width="250px"
          id="ccrsLogo"
        >
        </v-img></a
      ><br />
      <h5>Cancer is conquerable | Knowledge conquers cancer</h5>
      <br />
    </main>
    <aside>
      <img
        src="./../assets/Le_Meridian1.jpg"
        alt=""
        style="max-height: 90vh; max-width: 55vw"
      />
    </aside>
  </div>
</template>
<script></script>
<style scoped>
#home {
  display: flex;
  justify-content: space-between;
}

aside {
  display: flex;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

#home {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

@media screen and (max-width: 960px) {
  #home {
    flex-direction: column;
  }

  aside {
    /* display: none; */
    /* ?justify center */
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 20px;
    /* width: max-content; */
  }

  h2 {
    font-size: 1.5rem;
    padding: 10px;
  }
}
</style>
