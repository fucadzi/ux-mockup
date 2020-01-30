<template>
    <v-content>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-search"
                    label="Search"
                    single-line
                    hide-details
                    color="#00c654"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                
                <v-data-table
                    :headers="headers"
                    :items="tableData"
                    :search="search"
                >
                    <template v-slot:item.lest="{ item }">

                        <v-progress-linear 
                            class="white--text" 
                            color="#00c654"
                            height="30" 
                            :value="`${item.lest}`" striped
                        >
                            {{item.lest}}%
                        </v-progress-linear>
                    </template>

                    <template v-slot:item.published="{ item }">

                        <v-tooltip top v-if="getIcon(item) === 0" >
                            <template v-slot:activator="{ on }">
                                <v-icon 
                                    v-on="on"
                                    small 
                                    color="grey"
                                >
                                    mdi-checkbox-blank-circle
                                </v-icon>
                            </template>
                            <span>Draft</span>
                        </v-tooltip>
                        
                        <v-tooltip top v-if="getIcon(item) === 1" >
                            <template v-slot:activator="{ on }">
                                <v-icon 
                                    v-on="on"
                                    small 
                                    color="orange"
                                >
                                    mdi-checkbox-blank-circle
                                </v-icon>
                            </template>
                            <span>Pending</span>
                        </v-tooltip>

                        <v-tooltip top v-if="getIcon(item) === 2" >
                            <template v-slot:activator="{ on }">
                                <v-icon 
                                    v-on="on"
                                    small 
                                    color="green"
                                >
                                    mdi-check-circle
                                </v-icon> 
                            </template>
                            <span>Published</span>
                        </v-tooltip>

                        <v-tooltip top v-if="getIcon(item) === 3" >
                            <template v-slot:activator="{ on }">
                                <v-icon 
                                    v-on="on"
                                    small 
                                    color="red"
                                >
                                    mdi-close-circle
                                </v-icon>
                            </template>
                            <span>Failed</span>
                        </v-tooltip>
                    </template>


                    <template v-slot:item.action>
                        <router-link style="text-decoration: none" to="/stepper">
                        <v-icon
                            style="outline: none"
                            class="mr-2"
                        >
                            mdi-pencil
                        </v-icon>
                        </router-link>
                        <!-- <v-icon
                            
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon> -->
                    </template>

                </v-data-table>
            </v-col>
        </v-row>

    </v-content>
</template>

<script>
export default {
    name: 'MsgTable',
    data() {
        return {
            search: '',
            headers: [
                {
                    text: 'Subject', value: 'subject'
                },
                {
                    text: 'Start publishing', value: 'start'
                },
                {
                    text: 'End publishing', value: 'end'
                },
                {
                    text: 'Sent to', value: 'sent'
                },
                {
                    text: 'Status', value: 'published'
                },
                {
                    text: 'Lest', value: 'lest'
                },
                {
                    text: 'From', value: 'from'
                },
                {
                    text: 'Departure', value: 'depart'
                },
                {
                    text: 'Channel', value: 'channel'
                },
                {
                    text: 'Cause', value: 'cause'
                },
                {
                    text: 'Actions', 
                    value: 'action',
                    sortable: false
                }
            ],
            tableData: [
                {
                    subject: 'Canceled',
                    start: '14.01.2020 14:14', 
                    end: '15.01.2020 14:41',
                    sent: ['Departure: 10041049', 'Driver: 1_1'],
                    published: 0,
                    lest: 0,
                    from: 'Route 1',
                    depart: '24.01.2020 14:00',
                    channel: ['Sanntidapp', 'Real-Time Display'],
                    cause: 'Technical failure'
                },
                {
                    subject: 'Full bus',
                    start: '15.01.2020 14:41', 
                    end: '10.01.2020 12:02',
                    sent: ['Departure: 10041049', 'Driver: 1_1'],
                    published: 2,
                    lest: 50,
                    from: 'Route 1',
                    depart: '24.01.2020 14:00',
                    channel: ['Sanntidapp', 'Real-Time Display'],
                    cause: 'Full bus'
                },
                {
                    subject: 'Canceled',
                    start: '10.01.2020 12:02', 
                    end: '14.01.2020 14:14',
                    sent: ['Departure: 10041049', 'Driver: 1_1'],
                    published: 1,
                    lest: '0',
                    from: 'Sundelia',
                    depart: '',
                    channel: ['Real-Time Display'],
                    cause: 'Technical failure'
                },
                {
                    subject: 'Delayed - 5 to 15 minutes',
                    start: '14.01.2020 14:14', 
                    end: '24.01.2020',
                    sent: ['Departure: 10041049'],
                    published: 3,
                    lest: '0',
                    from: '',
                    depart: '24.01.2020 14:00',
                    channel: ['Sanntidapp', 'Real-Time Display'],
                    cause: 'Customers / Event on board'
                },
                {
                    subject: 'Canceled',
                    start: '10.01.2020 12:02', 
                    end: '10.01.2020 16:00',
                    sent: ['Driver: 1_1'],
                    published: 2,
                    lest: '100',
                    from: '',
                    depart: '24.01.2020 14:00',
                    channel: ['Sanntidapp'],
                    cause: 'Technical failure'
                },
                {
                    subject: 'Delayed - More than 15 minutes',
                    start: '14.01.2020 14:14', 
                    end: '24.01.2020',
                    sent: ['Departure: 10041049', 'Driver: 1_1'],
                    published: 2,
                    lest: '75',
                    from: '',
                    depart: '24.01.2020 14:00',
                    channel: ['Sanntidapp', 'Real-Time Display'],
                    cause: 'Customers / Event on board'
                },
                {
                    subject: 'Full bus',
                    start: '10.01.2020 12:02', 
                    end: '24.01.2020',
                    sent: ['Departure: 10041049', 'Driver: 1_1'],
                    published: 1,
                    lest: '25',
                    from: 'Route 1',
                    depart: '24.01.2020 14:00',
                    channel: ['Sanntidapp', 'Real-Time Display'],
                    cause: 'Full bus'
                },
                {
                    subject: 'Canceled',
                    start: '14.01.2020 14:14', 
                    end: '24.01.2020',
                    sent: ['Departure: 10041049', 'Driver: 1_1'],
                    published: 0,
                    lest: '0',
                    from: 'Sundelia',
                    depart: '',
                    channel: ['Sanntidapp', 'Real-Time Display'],
                    cause: 'Technical failure'
                },
                {
                    subject: 'Delayed - 5 to 15 minutes',
                    start: '10.01.2020 12:02', 
                    end: '24.01.2020',
                    sent: ['Departure: 10041049', 'Driver: 1_1'],
                    published: 0,
                    lest: '0',
                    from: '',
                    depart: '',
                    channel: ['Sanntidapp', 'Real-Time Display'],
                    cause: 'Customers / Event on board'
                },
                {
                    subject: 'Full bus',
                    start: '14.01.2020 14:14', 
                    end: '24.01.2020',
                    sent: ['Departure: 10041049', 'Driver: 1_1'],
                    published: 3,
                    lest: '0',
                    from: 'Sundelia',
                    depart: '24.01.2020 14:00',
                    channel: ['Sanntidapp', 'Real-Time Display'],
                    cause: 'Full bus'
                },
                {
                    subject: 'Full bus',
                    start: '10.01.2020 12:02', 
                    end: '24.01.2020',
                    sent: ['Departure: 10041049', 'Driver: 1_1'],
                    published: 2,
                    lest: '100',
                    from: 'Route 1',
                    depart: '24.01.2020 14:00',
                    channel: ['Sanntidapp', 'Last page'],
                    cause: 'Full bus'
                },
                {
                    subject: 'Full bus',
                    start: '10.01.2020 12:02', 
                    end: '24.01.2020',
                    sent: ['Departure: 10041049', 'Driver: 1_1'],
                    published: 2,
                    lest: '100',
                    from: 'Route 1',
                    depart: '24.01.2020 14:00',
                    channel: ['Sanntidapp', 'Last page'],
                    cause: 'Full bus'
                }
            ]
        }
    },
     methods: {
        getIcon: function(item) {
            return item.published;
        }
     }

     //   Hiding columns https://stackoverflow.com/questions/52625562/hide-a-particular-header-and-its-corresponding-column-in-vuetify-datatable
    // computed: {
    // computedHeaders () {
    //     return this.headers.filter(....Your filter logic here)  
    // }
    // }
    // Change your headers bind in your html to point to 'computedHeaders' instead of headers

    // :headers="computedHeaders"
}
</script>