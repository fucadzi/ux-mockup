<template>
    <v-container>
        <div style="min-height:60px;">
            <v-alert 
                text 
                color="#00c654"
                v-bind:class="{ showInfo: created }"
            >
                Created successfully!
            </v-alert>
        </div>
        <v-form v-model="valid">
        <v-row> 
            
            <v-col>
                <v-text-field
                    color="grey"
                    label="Subject"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row class="autocomplete-row">
            <v-col>


            <v-autocomplete
                v-model="modelOps"
                :items="operators"
                return-object
                hide-selected
                color="grey"
                placeholder="Search for operator"
                append-icon="mdi-magnify"
            ></v-autocomplete>

            
            </v-col>
            <v-col>

                <v-btn 
                    v-for="operator in selectedOps"
                    :key="operator"
                    rounded 
                    color="#00c654" 
                    class="white--text"
                    style="margin: 2px"
                    @click="removeOperator(operator)"
                >
                    {{operator}}
                    <v-icon small style="width:12px">mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="autocomplete-row">
            <v-col>
                <v-autocomplete
                    v-model="modelLines"
                    :items="lines"
                    hide-selected
                    color="grey"
                    placeholder="Search for line"
                    append-icon="mdi-magnify"
                ></v-autocomplete>
            </v-col>
            <v-col>
                <v-btn 
                    v-for="line in selectedLines"
                    :key="line"
                    rounded 
                    color="#00c654" 
                    class="white--text"
                    style="margin: 2px"
                    @click="removeLine(line)"
                >
                    {{line}}
                    <v-icon small style="width:12px">mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-icon style="outline: none; float: right" large @click="addRecipient()">mdi-account-plus</v-icon>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col>
                <div>Send notifications to:</div>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Phone</th>
                            <th>Notification type</th>
                            <th>Send to</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                            v-for="(user, i) in users" 
                            :key="i" 
                            class="text-left"
                        >
                            <td>
                                <v-text-field
                                    color="grey"
                                    :value="user.name"
                                ></v-text-field>
                            </td>
                            <td>
                                <v-text-field
                                    color="grey"
                                    :value="user.email"
                                    :rules="user.emailRules"
                                ></v-text-field>
                            </td>
                            <td>
                                <v-text-field
                                    color="grey"
                                    :value="user.phoneNum"
                                    :rules="user.phoneRules"
                                ></v-text-field>
                            </td>
                            <td class="checkbox">
                                <v-checkbox 
                                    color="#00c654" 
                                    label="Delayed"
                                    v-model="user.notifications.delay"
                                ></v-checkbox>
                                <v-checkbox 
                                    color="#00c654" 
                                    label="Canceled"
                                    v-model="user.notifications.cancel"
                                ></v-checkbox>
                                <v-checkbox 
                                    color="#00c654" 
                                    label="Full bus"
                                    v-model="user.notifications.full"
                                ></v-checkbox>
                            </td>
                            <td class="checkbox">
                                <v-checkbox 
                                    color="#00c654" 
                                    label="E-mail"
                                    v-model="user.sendType.email"
                                    @click="updateRules(user)"
                                ></v-checkbox>
                                <v-checkbox 
                                    color="#00c654" 
                                    label="SMS"
                                    v-model="user.sendType.sms"
                                    @click="updateRules(user)"
                                ></v-checkbox>
                            </td>
                            <td>
                                <v-row>
                                    
                                    <v-col>
                                        <v-icon style="outline:none" @click="removeRecipient(i)">mdi-delete</v-icon>
                                    </v-col>
                                </v-row>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn 
                    color="#00c654" 
                    style="float: right; margin-top: 20px" 
                    class="white--text"
                    @click="create()"
                    tile
                >
                    Create
                </v-btn>
            </v-col>
        </v-row>
        </v-form>
    </v-container>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'subscription',
    data: () => ({
        valid: true,
        operatorInput: '',
        lineInput: '',
        selectedOps: [],
        selectedLines: [],
        modelOps: null,
        modelLines: null,
        created: false,
        users: [
            {
                name: 'Jane Doe',
                phoneNum:'87654321',
                email: 'jane@test.com',
                notifications: {
                    delay: false,
                    cancel: false,
                    full: true
                },
                sendType: {
                    sms: false,
                    email: true
                },
                emailRules: [],
                phoneRules: []
            },
            {
                name: 'Mary Smith',
                phoneNum:'12345678',
                email: '',
                notifications: {
                    delay: false,
                    cancel: false,
                    full: true
                },
                sendType: {
                    sms: true,
                    email: false
                },
                emailRules: [],
                phoneRules: []
            },
            {
                name: 'John Doe',
                phoneNum: '22222222',
                email: 'john@test.com',
                notifications: {
                    delay: true,
                    cancel: true,
                    full: false
                },
                sendType: {
                    sms: true,
                    email: false
                },
                emailRules: [],
                phoneRules: [],
            }
        ],
        operators: ['Norled AS (301)', 'Boreal Bus AS (302)', 'The Utsira liner (303)', 
            'Røværfjord AS (304)', 'Jærbanen (305)', 'L.Rødne & Sønner AS (306)', 
            'Norgesbuss AS (309)', 'Vy Buss AS (310)', 'Tide Buss AS (312)', 'Norled AS (314)'],
        lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }),
    watch: {
        modelOps: function(val) {
            this.selectedOps.push(val);
        },
        modelLines: function(val) {
            this.selectedLines.push(val);
        }
    },
    methods: {
        updateRules: function(user) {
            if(user.sendType.sms) {
                user.phoneRules = [
                    v => !!v || 'Phone number is required'
                ]
            } else {
                user.phoneRules = []; 
            }
            if(user.sendType.email) {
                user.emailRules = [
                    v => !!v || 'Email is required'
                ]
            } else {
                user.emailRules = []; 
            }
        },
        addRecipient: function() {
            this.users.unshift({
                phoneNum:'',
                name: '',
                email: '',
                notifications: {
                    delay: false,
                    cancel: false,
                    full: false
                },
                sendType: {
                    sms: false,
                    email: false
                },
                emailRules: [],
                phoneRules: [],
            });
        },
        removeRecipient: function(index) {
            Vue.delete(this.users, index);
        },
        removeOperator: function(item) {
            let index = this.selectedOps.indexOf(item);
            Vue.delete(this.selectedOps, index);
        },
        removeLine: function(item) {
            let index = this.selectedLines.indexOf(item);
            Vue.delete(this.selectedLines, index);
        },
        create: function(){
            this.$router.push('table');
            // this.created = !this.created; 
        }
    }
}
</script>

<style>
    .v-data-table .checkbox {
        padding-bottom: 2px;
    }

    .checkbox .v-input--checkbox {
        margin-top: 0;
    }

    .checkbox .v-input--checkbox .v-input__slot {
        margin-bottom: 0;
    }

    .v-alert {
        display: none;
    }

    .v-messages {
        min-height: 0;
    }

    .v-alert.showInfo {
        display: block;
    }

    .v-data-table th { 
        font-size: 15px;
    }

    .autocomplete-row .v-btn i:before {
        right: -7px;
        position: absolute;
    }
</style>