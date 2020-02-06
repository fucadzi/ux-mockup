<template>
    <v-content>

        <v-row>
            <v-col>
                <mgs-table />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                
                <v-data-table
                    :headers="headers"
                    :items="tableData"
                    :search="search"
                    disable-pagination
                    hide-default-footer
                    disable-sort
                >
                    <template v-slot:item.systems="{ item }">
                        <v-row
                            v-for="(system, i) in item.systems"
                            :key="i"
                        >
                            <div>
                                <a v-if="system.url" :href="system.url" >{{system.system}}</a>
                                <span v-else>{{system.system}}</span>
                            </div>
                        </v-row>
                    </template>
                    <template v-slot:item.used="{ item }">
                        <v-row
                            v-for="(use, i) in item.used"
                            :key="i"
                        >
                            <div>{{use}}</div>
                        </v-row>
                    </template>


                    <template v-slot:item.action="{ item }">
                        <v-icon
                            style="outline: none" 
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            style="outline: none"
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>

                </v-data-table>
            </v-col>
        </v-row>




        

        <v-row>
            <v-col></v-col>
        </v-row>
    </v-content>
</template>

<script>
import MgsTable from '../components/MsgTable.vue';

export default {
    name: 'TablePage',
    components: {
        MgsTable
    },
    data() {
        return {
            search: '',
            headers: [
                {
                    text: 'Name', value: 'name'
                },
                {
                    text: 'Allowed systems', value: 'systems'
                },
                {
                    text: 'Used', value: 'used'
                },
                {
                    text: 'Token', value: 'token', filterable: false  
                },
                {
                    text: 'Company', value: 'company'
                },
                {
                    text: 'Actions', 
                    value: 'action',
                    sortable: false
                },
                { value: 'data-table-expand' }
            ],
            tableData: [
                {
                    name: 'Test',
                    systems: [
                        {
                            system: 'Kolumbus Web'
                        },
                        {
                            system: 'HJH'
                        },
                        {
                            system: 'Ticketing machine'
                        },
                        {
                            system: 'New system',
                            url: 'https://www.google.com/'
                        }
                    ], 
                    used: [0,0,2, 1],
                    token: 'eWTf3qR45bijwT3ngNLqJk14JMt3kmD1o85QXR44QUDZJuLSn2TFdZqGNwtBMWd2',
                    company: '111'
                },
                {
                    name: 'HJH test',
                    systems: [
                        {
                            system: 'HJH'
                        }
                    ],
                    used: [0],
                    token: '7IUhfG1VDjEAnHv01kEmdOmYNncZ5gJebKHvh4sgMp0e3fjFbhMopAVoB6ozQ1R6',
                    company: 'random company'
                },
                {
                    name: 'Skynet',
                    systems: [
                        {
                            system: 'Skynet',
                            url: 'https://www.google.com/'
                        }
                    ],
                    used: [3],
                    token: '7IUhfG1VDjEAnHv01kEmdOmYNncZ5gJebKHvh4sgMp0e3fjFbhMopAVoB6ozQ1R6',
                    company: 'xyz'
                },
                {
                    name: 'QWERTY',
                    systems: [
                        {
                            system: 'Skynet',
                            url: 'https://www.google.com/'
                        },
                        {
                            system: 'Test system',
                            url: 'https://www.google.com/'
                        }
                    ],
                    used: [2, 0],
                    token: '7IUhfG1VDjEAnHv01kEmdOmYNncZ5gJebKHvh4sgMp0e3fjFbhMopAVoB6ozQ1R6',
                    company: 'xyz'
                }
            ]
        }
    },
    methods: {
        editItem: function(item) {
            console.log('edit this ', item);
        },
        deleteItem (item) {
            const index = this.tableData.indexOf(item);
            confirm('Are you sure you want to delete this item?') && this.tableData.splice(index, 1);
        },
    }
}
</script>

<style>
    .v-data-table th {
        font-size: 15px;
    }

    .v-data-table .row a {
        color: #00c654;
    }
</style>