<template>
  <v-app>
    <v-content>
        <v-container>
            <v-tabs color="#00c654" v-model="activeTab">
                <v-tab><router-link to="/">Create message</router-link></v-tab>
                <v-tab color="#00c654"><router-link to="/elements">UI elements</router-link></v-tab>
                <v-tab><router-link to="/table">Table</router-link></v-tab>
                <v-tab><router-link to="/subcsription">Subscription</router-link></v-tab>
                
            </v-tabs>
            <router-view></router-view>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
    export default {
        name: "App",
        data: () => ({
            activeTab: 0
        }),
        created() {
            switch(this.$route.name) {
                case 'Stepper':
                    this.activeTab = 0;
                    break;
                case 'Home':
                    this.activeTab = 1;
                    break;
                case 'TablePage':
                    this.activeTab = 2;
                    break;
                case 'Subscription':
                    this.activeTab = 3;
                    break;
            }
        }
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
