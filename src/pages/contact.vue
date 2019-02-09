<template>
  <div class="contact">
    <v-parallax
            src="https://wallpapercave.com/wp/IDDzaKf.jpg"
            height="100%"
    >
      <h1 class="display-2 mb-4 mt-4 text-xs-center">Contact Us</h1>
        <v-flex
                xs12
                md4
                offset-md4
        >
          <v-form v-model="valid">
            <v-text-field
                    v-model="email"
                    label="Email"
                    :rules="emailRules"
                    solo
                    required
            ></v-text-field>
            <v-textarea
                    v-model="email"
                    label="Message"
                    solo
                    required
            ></v-textarea>
            <div class="text-xs-center">
              <v-btn color="primary" dark large>Submit</v-btn>
            </div>
          </v-form>
        </v-flex>
    </v-parallax>
   </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
    }
  }
}
</script>