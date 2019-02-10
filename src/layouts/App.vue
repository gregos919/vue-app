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
      <div >
          <v-parallax
                  src="https://wallpapercave.com/wp/IDDzaKf.jpg"
                  height="100%"
          >
              <router-view/>
          </v-parallax>
      </div>
  </v-app>
</template>

<script>
export default {}
</script>
<style>
    .theme--light.v-toolbar{
        background-color: #009bc0;
    }

    .v-toolbar__content,
    .container{
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
    .v-btn .v-btn__content{
        color: white;
    }
     .v-parallax{
         min-height: 100vh;
         width: 100%;
     }

    .v-parallax__content{
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        color: #009ac0;
        bottom: 0;
    }
</style>
