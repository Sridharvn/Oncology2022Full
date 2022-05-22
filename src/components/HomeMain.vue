<template>
  <div id="home">
    <main>
      <h1>Oncology 2022</h1>
      <h4>
        International Conference on Multidisciplinary Management of Common
        Malignancies
      </h4>
      <h5>2022 October 14,15 and 16</h5>
      <h5>Organised by : CCRS</h5>
      <h5> VENUE : HOTEL CROWNE PLAZA, KOCHI</h5>
      <h5> Email : oncology2022india@gmail.com</h5>
      <h5>Website : www.oncology2022.in</h5>
      <br>
    </main>
    <aside>
      <img src="./../assets/crowne-plaza-kochi-3941030496-2x1.jpg" alt=""
        style="max-height: 90vh; max-width: 55vw; mix-blend-mode: overlay;" />
      <!-- <img src="./../assets/pexels-mart-production-7089017.jpg" alt="" style="height:90vh;width:100vh; "> -->
    </aside>
  </div>
</template>
<script>
</script>
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
  color: var(--secondary-color)
}

@media screen and (max-width: 600px) {
  #home {
    flex-direction: column;
  }

  aside {
    /* display: none; */
    /* ?justify center */
    justify-content: center;
    align-items: center;
    text-align: center;
    /* width: max-content; */
  }
}
</style>