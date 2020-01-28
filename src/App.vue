<template>
  <v-app>
    <v-content>
        <v-container>
            <v-tabs color="#00c654">
                <v-tab color="#00c654"><router-link to="/">Home</router-link></v-tab>
                <v-tab><router-link to="/subcsription">Subscription</router-link></v-tab>
                <v-tab><router-link to="/stepper">Add message</router-link></v-tab>
            </v-tabs>
            <router-view></router-view>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
    export default {
        name: "App"
    };
</script>

<style>
    .v-tabs .v-tab a {
        text-decoration: none;
        height: 100%;
        display: flex;
        align-items: center;
        color: #333;
    }

</style>
