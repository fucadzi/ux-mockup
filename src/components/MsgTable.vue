<template>
    <v-content>
        <v-row>
            <v-col>
                <v-row>
                    <v-col cols="9">
                        <v-text-field
                            v-model="search"
                            label="Search"
                            single-line
                            hide-details
                            color="#00c654"
                            append-icon="mdi-magnify"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <v-icon 
                            small
                            style="outline:none; padding-top: 26px;"
                            v-if="search" 
                            @click="search = ''"
                        >
                            mdi-close
                        </v-icon>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="controlBtns">
                <v-btn 
                    :class="{ activeBtn: layout === 'type2' }"
                    rounded
                    outlined
                    @click="layout = 'type2'" 
                >
                    Type 2
                </v-btn>
                <v-btn 
                    :class="{ activeBtn: layout === 'type1' }"
                    rounded
                    outlined
                    @click="layout = 'type1'" 
                >
                    Type 1
                </v-btn>
                <v-btn 
                    :class="{ activeBtn: layout === '' }"
                    rounded
                    outlined
                    @click="layout = ''" 
                >
                    Default
                </v-btn>
                    
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                
                <v-data-table
                    :headers="computedHeaders"
                    :items="tableData"
                    :search="search"
                >
                    <template v-slot:item.lest="{ item }">

                        <v-progress-linear 
                            class="white--text" 
                            color="#00c654"
                            height="25" 
                            :value="`${item.lest}`" 
                            striped
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
            layout: '',
            headers: [
                {
                    text: 'Subject', value: 'subject', layout: 'type1'
                },
                {
                    text: 'Start publishing', value: 'start', layout: 'type1'
                },
                {
                    text: 'End publishing', value: 'end', layout: 'type1'
                },
                {
                    text: 'Sent to', value: 'sent', layout: 'type2'
                },
                {
                    text: 'Status', value: 'published', layout: 'type2'
                },
                {
                    text: 'Lest', value: 'lest', layout: 'type2'
                },
                {
                    text: 'From', value: 'from', layout: 'type1'
                },
                {
                    text: 'Departure', value: 'depart', layout: 'type1'
                },
                {
                    text: 'Channel', value: 'channel', layout: 'type2'
                },
                {
                    text: 'Cause', value: 'cause', layout: 'type2'
                },
                {
                    text: 'Actions', 
                    value: 'action',
                    sortable: false,
                    layout: 'all'
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
        },
        showLayout: function( layout ){
            console.log('filtering');
            if(layout === '') {
                return;
            }
        },
        filterByLayout: function(el) {
            if(this.layout === '' || el.layout === 'all') {
                return true;
            }

            return el.layout === this.layout;
        }
    },

    computed: {
        computedHeaders () {
            return this.headers.filter(this.filterByLayout );  
        }
    }
    
}
</script>

<style>
    .controlBtns .v-btn {
        margin: 0 2px;
        float: right;
    }
    .col.controlBtns .v-btn--rounded.v-btn.activeBtn {
        color: #ffffff;
        background-color: #00c654;
    }

    .theme--light.v-btn.v-btn--outlined {
        border-color:#00c654;
        color: #00c654;
    }

    .v-data-table th {
        font-size: 15px;
    }
</style>