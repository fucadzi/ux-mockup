<template>
  <v-container>
    <v-layout text-center wrap>
      <v-container>
        <v-row>
          <v-col>
            <v-btn color="#00c654" class="white--text">Button</v-btn>
          </v-col>
          <v-col>
            <v-btn color="#00c654" class="white--text" depressed=true>Button</v-btn>
          </v-col>
          <v-col>
            <v-btn color="#00c654" outlined=true>Button</v-btn>
          </v-col>
          <v-col>
            <v-btn color="#00c654" class="white--text" rounded=true>Button</v-btn>
          </v-col>
          <v-col>
            <v-btn color="#00c654" class="white--text" tile=true>Button</v-btn>
          </v-col>
          <v-col>

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" color="#00c654" class="white--text" tile=true depressed=true>Tooltip</v-btn>
              </template>
              <span>Tooltip</span>
            </v-tooltip>

            
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-overflow-btn label="Dropdown" :items="dropdown">
            </v-overflow-btn>
          </v-col>
          <v-col cols="4">
            <v-select label="Dropdown" :items="dropdown">
            </v-select>
          </v-col>
          <v-col>
            <v-select
              :items="dropdown"
              label="Dropdown"
              outlined
            ></v-select>
          </v-col>
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
            <v-checkbox color="#00c654" label="Checkbox"></v-checkbox>
          </v-col>
          <v-col>
            <v-radio-group>
              <v-radio label="Radio 1" color="#00c654"></v-radio>
              <v-radio label="Radio 2" color="#00c654"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col>
            <v-progress-linear class="white--text" color="#00c654" height="30" value="50" striped>50%</v-progress-linear>
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
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-stepper value="1">
              <v-stepper-header >
                <v-stepper-step color="#00c654" step="1" complete>Step 1</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step color="#00c654" step="2">Step 2</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">Step 3</v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-col>
        </v-row>
      
        <v-row>
          <v-col>
            <v-alert outlined=true color="#00c654">
              Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. In auctor lobortis lacus.
            </v-alert>
            <v-alert outlined=true color="#dc3545">
              Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. In auctor lobortis lacus.
            </v-alert>
            <v-alert outlined=true color="orange">
              Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. In auctor lobortis lacus.
            </v-alert>
          </v-col>
          <v-col>
            <v-alert text=true color="#00c654">
              Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. In auctor lobortis lacus.
            </v-alert>
            <v-alert text=true color="#dc3545">
              Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. In auctor lobortis lacus.
            </v-alert>
            <v-alert text=true color="orange">
              Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. In auctor lobortis lacus.
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
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
                  <tr v-for="item in table" :key="item.name" class="text-left">
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                    <td><v-btn color="#00c654" class="white--text" tile=true depressed=true>Edit</v-btn></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>

      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "UiElements",

  data: () => ({
    valid: false,
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
    dropdown: ['Item 1', 'Item 2', 'Item 3'],
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
};
</script>
