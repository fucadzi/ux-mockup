<template>
    <v-content>
        <v-row>
            <v-col></v-col>
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
                ></v-data-table>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
export default {
    name: 'TablePage',
    data() {
        return {
            search: '',
            headers: [
                {
                    text: 'Name', value: 'name'
                },
                {
                    text: 'Description', value: 'systems'
                },
                {
                    text: 'Notes', value: 'notes'
                },
                {
                    text: 'Actions', 
                    value: 'actions',
                    sortable: false
                }
            ],
            tableData: [
                {
                    name: 'Test',
                    systems: 'Some test',
                    notes: 'Test test',
                },
                {
                    name: 'Blank',
                    systems: 'Blank 123',
                    notes: 'Blank notes',
                },
                {
                    name: 'Abcd',
                    systems: 'Abcd 123',
                    notes: 'Dcba 321',
                }
            ]
        }
    }
}
</script>