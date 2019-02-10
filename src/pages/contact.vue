<template>
    <div
            class="contact"
            v-show="!contactSentSuccessfully"
    >
        <h1 class="display-2 mb-4 mt-4 text-xs-center">{{contactUsTitle}}</h1>
        <v-form>
            <v-text-field
                    v-model="formData.email"
                    label="Email"
                    :error-messages="errors.email"
                    solo
                    required
            ></v-text-field>
            <v-textarea
                    v-model="formData.message"
                    label="Message"
                    solo
                    :error-messages="errors.message"
                    required
            ></v-textarea>
            <div class="text-xs-center">
                <v-btn color="primary" :loading="isLoading" dark large @click="submitForm">Submit</v-btn>
            </div>
        </v-form>
        <v-snackbar
                v-model="snackbar"
                :color="snackbarColor"
        >
            {{ snackbarMessage }}
        </v-snackbar>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'contact',
    mounted () {

    },
    methods: {
        submitForm(){

            this.isLoading = true;

            axios.post('/api/contact', this.formData)
                .then((response) => {
                    this.errors = {};
                    this.snackbarMessage = response.data.message;
                    this.snackbarColor = "success";
                    this.snackbar = true;
                    this.contactUsTitle = "Thank for contacting us, we'll get back to you soon!";
                    this.contactSentSuccessfully = true;
                    this.isLoading = false;
                })
                .catch((error) => {
                    this.errors = {};
                    this.snackbarMessage = "There are errors with data you submitted, please fix them and try again";
                    this.snackbarColor = "error";
                    this.snackbar = true;

                    error.response.data.errors.forEach((er) => {
                        this.errors[er.param] = er.msg;
                    })

                    this.isLoading = false;
                })
        }
    },
    data () {
        return {
            contactSentSuccessfully: false,
            isLoading: false,
            contactUsTitle: "Contact Us",
            snackbarColor: "success",
            snackbar: false,
            snackbarMessage: "",
            formData: {
                email: "",
                message: ""
            },
            errors: {}
        }
    }
}
</script>
<style>
    .contact{
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
    }
</style>