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
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="text-left">
                        <td>John Doe</td>
                        <td>john@test.com</td>
                        <td>22222222</td>
                        <td>
                            <v-checkbox color="#00c654" label="Delayed"></v-checkbox>
                            <v-checkbox color="#00c654" label="Canceled"></v-checkbox>
                            <v-checkbox color="#00c654" label="Full bus"></v-checkbox>
                        </td>
                        <td>
                            <v-checkbox color="#00c654" label="E-mail"></v-checkbox>
                            <v-checkbox color="#00c654" label="SMS"></v-checkbox>
                        </td>
                    </tr>
                        <tr class="text-left">
                            <td>
                                <v-text-field
                                    color="grey"
                                    label="Name"
                                    required
                                ></v-text-field>
                            </td>
                            <td>
                                <v-text-field
                                    color="grey"
                                    label="E-mail"
                                    required
                                ></v-text-field>
                            </td>
                            <td>
                                <v-text-field
                                    color="grey"
                                    label="Phone"
                                    required
                                ></v-text-field>
                            </td>
                            <td>
                                <v-checkbox color="#00c654" label="Delayed"></v-checkbox>
                                <v-checkbox color="#00c654" label="Canceled"></v-checkbox>
                                <v-checkbox color="#00c654" label="Full bus"></v-checkbox>
                            </td>
                            <td>
                                <v-checkbox color="#00c654" label="E-mail"></v-checkbox>
                                <v-checkbox color="#00c654" label="SMS"></v-checkbox>
                            </td>
                        </tr>
                    </tbody>
                <!-- </template> -->
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn right="true" color="#00c654" class="white--text" tile="true">Create</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'subscription',
    components: {
    }
}
</script>