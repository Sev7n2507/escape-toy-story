<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style scoped>
  @font-face {
  font-family: "Poppins";
  src: local("Poppins"),
   url(./fonts/Poppins-Regular.ttf) format("truetype");
  }

  @font-face {
  font-family: "Peace";
  src: local("Peace"),
   url(./fonts/Peace-Sans-Webfont.ttf) format("truetype");
  }

  * {
    font-family: "Poppins"
  }
</style>