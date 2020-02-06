<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="separator"></div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-alert class="showInfo" text color="#00c654">
                    Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. In auctor lobortis lacus.
                </v-alert>
                <v-alert class="showInfo" text color="#dc3545">
                    Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. In auctor lobortis lacus.
                </v-alert>
                <v-alert class="showInfo" text color="orange">
                    Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. In auctor lobortis lacus.
                </v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="separator"></div>
            </v-col>
        </v-row>
        <v-row class="buttons">
            <v-col>
                <v-btn color="#00c654" class="white--text" tile>Button</v-btn>
            </v-col>
            <v-col>
                <v-btn color="#00c654" tile outlined>Button</v-btn>
            </v-col>
            <v-col>
                <v-btn color="#00c654" class="white--text" rounded>Button</v-btn>
                <!-- <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" color="#dc3545" class="white--text" tile>Delete</v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>
                    <v-btn color="green darken-1" text @click="dialog = false">Yes</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog> -->
            </v-col>
            <v-col>
                <v-btn color="#00c654" rounded outlined>Button</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="separator"></div>
            </v-col>
        </v-row>


        <v-row class="icons">
            <v-col>
                <v-icon style="outline:none">mdi-account-plus</v-icon>
            </v-col>
            <v-col >
                <v-icon style="outline:none">mdi-magnify</v-icon>
            </v-col>
            <v-col >
                <v-icon style="outline:none">mdi-pencil</v-icon>
            </v-col>
            <v-col >
                <v-icon style="outline:none">mdi-delete</v-icon>
            </v-col>
            <v-col>
                <v-icon style="outline:none">mdi-close</v-icon>
            </v-col>
            <v-col >
                <v-icon style="outline:none" color="#00c654" small>mdi-check-circle</v-icon>
            </v-col>
            <v-col >
                <v-icon style="outline:none" color="red" small>mdi-close-circle</v-icon>
            </v-col>
            <v-col >
                <v-icon style="outline:none" color="grey" small>mdi-checkbox-blank-circle</v-icon>
            </v-col>
            <v-col >
                <v-icon style="outline:none" color="orange" small>mdi-checkbox-blank-circle</v-icon>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="separator"></div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-select
                :items="dropdown" 
                label="Dropdown"
                solo
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="separator"></div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-checkbox color="#00c654" label="Checkbox"></v-checkbox>
            </v-col>
            <v-col>
                <v-radio-group>
                <v-radio label="Radio 1" color="#00c654"></v-radio>
                <v-radio label="Radio 2" color="#00c654"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="separator"></div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field
                color="grey"
                v-model="firstname"
                :counter="10"
                label="First name"
                required
                ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
                <v-text-field
                v-model="lastname"
                color="grey"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
                ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
                <v-text-field
                v-model="email"
                color="grey"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="separator"></div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-progress-linear class="white--text" color="#00c654" height="30" value="50" striped>50%</v-progress-linear>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="separator"></div>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col>
                <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Description</th>
                        <th class="text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, i) in table" :key="i" class="text-left">
                        <td>{{ item.name }}</td>
                        <td>{{ item.description }}</td>
                        <td><v-btn color="#00c654" class="white--text" tile depressed>Edit</v-btn></td>
                    </tr>
                    </tbody>
                </template>
                </v-simple-table>
            </v-col>
        </v-row> -->
        <v-row>
            <v-col>
                <div class="separator"></div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'StyleElementss',
    data: () => ({
        dropdown: ['Item 1', 'Item 2', 'Item 3'],
        valid: false,
        dialog: false,
        firstname: '',
        lastname: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        table: [
            {
                name: 'Name',
                description: 'Description'
            },
            {
                name: 'Name',
                description: 'Description'
            },
            {
                name: 'Name',
                description: 'Description'
            }
        ]
    })
}
</script>

<style>
    .separator {
        height: 40px;
    }

    .col .v-alert.v-sheet {
        border-radius: 0;
    }

    .v-alert .v-icon {
        font-size: 16px;
        position: absolute;
        right: 5px;
        top: 5px;
        color: lightgrey;
    }


    .buttons .col { 
        display: flex;
        justify-content: center;
    }

    .icons .col {
        justify-content: center;
        display: flex;
    }
</style>