<template>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field
                    color="grey"
                    label="Subject"
                ></v-text-field>
                <v-text-field
                    color="grey"
                    label="Search for operator"
                ></v-text-field>
                <v-text-field
                    color="grey"
                    label="Search by line"
                ></v-text-field>
            </v-col>
            <v-col>
                Options
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div>Send notifications to:</div>
                <v-simple-table>
                <!-- <template v-slot:default> -->
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
                        <tr v-for="user in users" :key="user.name" class="text-left">
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
                            <td> Edit </td>
                        </tr>
                    </tbody>
                <!-- </template> -->
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn right=true color="#00c654" class="white--text" tile=true>Create</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'subscription',
    data: () => ({
        isActive: false,
        users: [
            {
                inactive: false,
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
            },
            {
                inactive: true,
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
            }
        ]
    }),
    // nextRow: () =>{
    //     console.log('focused');
    //     this.isActive = true;
    // }
    methods: {
        focusedForm: function() {
            console.log('Focus!');
            this.isActive = true;
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
</style>