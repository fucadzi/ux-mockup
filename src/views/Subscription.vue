<template>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field
                    color="grey"
                    label="Subject"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
            <v-text-field
                color="grey"
                label="Search for operator"
                v-model="operatorInput"
                @keyup.enter.native="operatorSearch()"
            ></v-text-field>
            </v-col>
            <v-col>
                <v-btn 
                    v-for="operator in operators"
                    :key="operator"
                    rounded 
                    color="#00c654" 
                    class="white--text"
                    style="margin: 2px"
                    @click="removeOperator(operator)"
                >
                    {{operator}}
                    <v-icon small>mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field
                    color="grey"
                    label="Search by line"
                    v-model="lineInput"
                    @keyup.enter.native="lineSearch()"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-btn 
                    v-for="line in lines"
                    :key="line"
                    rounded 
                    color="#00c654" 
                    class="white--text"
                    style="margin: 2px"
                    @click="removeLine(line)"
                >
                    {{line}}
                    <v-icon small>mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    
        <div style="min-height: 66px"></div>
        
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
                                ></v-text-field>
                            </td>
                            <td>
                                <v-text-field
                                    color="grey"
                                    :value="user.phone"
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
                                ></v-checkbox>
                                <v-checkbox 
                                    color="#00c654" 
                                    label="SMS"
                                    v-model="user.sendType.sms"
                                ></v-checkbox>
                            </td>
                            <td>
                                <v-row>
                                    <v-col>
                                        <v-icon large @click="addRecipient()">mdi-account-plus</v-icon>
                                    </v-col>
                                    <v-col v-if="users.length > 1">
                                        <v-icon large @click="removeRecipient(i)">mdi-delete</v-icon>
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
                <v-alert 
                    text 
                    color="#00c654"
                    v-bind:class="{ createdSub: created }"
                >
                    Created successfully!
                </v-alert>
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
    </v-container>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'subscription',
    data: () => ({
        operatorInput: '',
        lineInput: '',
        operators: [],
        lines: [],
        created: false,
        users: [
            {
                name: 'John Doe',
                email: 'john@test.com',
                phone: '22222222',
                notifications: {
                    delay: true,
                    cancel: true,
                    full: false
                },
                sendType: {
                    sms: true,
                    email: false
                }
            }
        ]
    }),
    methods: {
        addRecipient: function() {
            this.users.push({
                name: '',
                email: '',
                phone: '',
                notifications: {
                    delay: false,
                    cancel: false,
                    full: false
                },
                sendType: {
                    sms: false,
                    email: false
                }
            });
        },
        removeRecipient: function(index) {
            Vue.delete(this.users, index);
        },
        operatorSearch: function() {
            this.operators.push(this.operatorInput);
            this.operatorInput = '';
        },
        removeOperator: function(item) {
            let index = this.operators.indexOf(item);
            Vue.delete(this.operators, index);
        },
        lineSearch: function() {
            this.lines.push(this.lineInput);
            this.lineInput = '';
        },
        removeLine: function(item) {
            let index = this.lines.indexOf(item);
            Vue.delete(this.lines, index);
        },
        create: function(){
            this.created = !this.created; 
        }
    }
}
</script>

<style>
    .checkbox .v-input--checkbox {
        margin-top: 0;
    }

    .checkbox .v-input--checkbox .v-input__slot {
        margin-bottom: 0;
    }

    .inactive {
        opacity: 0.5;
    }

    .inactive:focus {
        opacity: 1;
    }

    .v-alert {
        display: none;
    }

    .v-alert.createdSub {
        display: block;
    }
</style>