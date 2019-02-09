<template>
  <span>
    <v-parallax
            src="https://wallpapercave.com/wp/IDDzaKf.jpg"
            height="100%"
    >
       <v-layout
               align-center
               column
               justify-center
       >
      <h1 class="display-2 mb-3">Frontend App</h1>
      <h4 class="subheading">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h4>
    </v-layout>
    </v-parallax>
  </span>

</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
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