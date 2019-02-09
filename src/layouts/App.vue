<template>
  <v-app  id="app">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
          <img src="../assets/logo.png" class="main-logo">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
              flat
              to="/"
      >
        <span>Home</span>
      </v-btn>
      <v-btn
              flat
              to="/contact"
      >
        <span>Contact</span>
      </v-btn>
    </v-toolbar>

    <router-view/>

  </v-app>
</template>

<script>
  export default {
  }
</script>
<style>
  .v-toolbar__content{
    max-width: 1200px;
    margin: 0 auto;
  }

  .main-logo{
    max-width: 60px;
    vertical-align: middle;
  }

  .v-btn{
    font-weight: bold;
  }
</style>

