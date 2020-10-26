<template>
    <v-content>

        <div style="min-height:60px; margin-top: 16px;">
            <v-alert 
                text 
                color="#00c654"
                v-bind:class="{ showInfo: saved }"
            >
                {{ notificationText ? notificationText : 'Draft saved successfully!'}}
            </v-alert>
        </div>
        <v-stepper
            v-model="e1"
            style="margin-top: 16px"
        >

            <v-stepper-header>
                <template>
                    <v-stepper-step color="#00c654"
                        :key="`1-step`"
                        :complete="e1 > 4"
                        :step="1"
                        :editable=true
                        :rules="[]"
                    >
                    Example 1
                    </v-stepper-step>

                    <v-divider
                        :key="1"
                    ></v-divider>

                    <v-stepper-step color="#00c654"
                        :key="`2-step`"
                        :complete="e1 > 4"
                        :step="2"
                        :editable=true
                        :rules="step2Rules"
                    >
                    Example 2
                    </v-stepper-step>

                    <v-divider
                        :key="2"
                    ></v-divider>

                    <v-stepper-step color="#00c654"
                        :key="`3-step`"
                        :complete="e1 > 4"
                        :step="3"
                        :editable=true
                        :rules="[]"
                    >
                    Example 3
                    </v-stepper-step>

                    <v-divider
                        :key="3"
                    ></v-divider>

                
                    <v-stepper-step
                    color="#00c654"
                    :key="`4-step`"
                    :complete="e1 > 4"
                    :step="4"
                    :editable=true
                    >Review &amp; Publish</v-stepper-step>
                    </template>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content
                    step=1
                >
                    <v-row>
                        <v-col>
                            <v-text-field v-model="title" color="#00c654" label="Title"></v-text-field>
                            <v-textarea v-model="text" solo height="366px">
                            </v-textarea>
                        </v-col>
                        <v-col>
                            <v-checkbox class="push" v-model="setting1" color="#00c654" label="Push notifications for mobile"></v-checkbox>
                            <div class="radio">
                                <v-label>Message type</v-label>
                                <v-radio-group>
                                    <v-radio label="Information" color="#00c654"></v-radio>
                                    <v-radio label="Warning" color="#00c654"></v-radio>
                                    <v-radio label="Cancellation" color="#00c654"></v-radio>
                                </v-radio-group>
                            </div>
                            <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    Engelsk innhold
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-text-field v-model="title" color="#00c654" label="Title"></v-text-field>
                                    <v-textarea v-model="text" solo height="366px">
                                    </v-textarea>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                    </v-row>

                    <v-spacer></v-spacer>
                    <v-btn
                        color="#00c654"
                        tile
                        outlined
                        style="float: right; margin-left: 12px;"
                        @click="e1 = 4"
                    >
                        Review &amp; Publish
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        class="white--text"
                        style="float: right; margin-left: 12px;"
                        @click="saved = !saved"
                    >
                        Save draft
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        @click="nextStep(1)"
                        class="white--text"
                        style="float: right; margin-left: 12px;"
                    >
                        Continue
                    </v-btn>
                    

                </v-stepper-content>
                <v-stepper-content step=2>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="title" color="#00c654" label="Title"></v-text-field>
                            <v-textarea v-model="text" solo height="366px">
                            </v-textarea>
                        </v-col>
                        <v-col>
                            <v-checkbox class="push" v-model="setting1" color="#00c654" label="Push notifications for mobile"></v-checkbox>
                            <v-select
                                class="messageType"
                                :items="dropdown" 
                                label="Message type"
                                solo
                            ></v-select>
                            <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    Engelsk innhold
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-text-field v-model="title" color="#00c654" label="Title"></v-text-field>
                                    <v-textarea v-model="text" solo height="366px">
                                    </v-textarea>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                    </v-row>

                    <v-spacer></v-spacer>
                    <v-btn
                        color="#00c654"
                        tile
                        outlined
                        style="float: right; margin-left: 12px;"
                        @click="e1 = 4"
                    >
                        Review &amp; Publish
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        class="white--text"
                        style="float: right; margin-left: 12px;"
                        @click="saved = !saved"
                    >
                        Save draft
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        @click="nextStep(2)"
                        class="white--text"
                        style="float: right; margin-left: 12px;"
                    >
                        Continue
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        outlined
                        @click="prevStep(2)"
                        style="float: right;"
                    >
                        Back
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step=3>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="title" color="#00c654" label="Title"></v-text-field>
                            <v-textarea v-model="text" solo height="366px">
                            </v-textarea>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="setting1" class="push" color="#00c654" label="Push notifications for mobile"></v-checkbox>
                            <v-autocomplete
                                v-model="modelMsgType"
                                :items="dropdown"
                                return-object
                                color="grey"
                                placeholder="Message type"
                                append-icon="mdi-magnify"
                            ></v-autocomplete>
                            <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    Engelsk innhold
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-text-field v-model="title" color="#00c654" label="Title"></v-text-field>
                                    <v-textarea v-model="text" solo height="366px">
                                    </v-textarea>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                    </v-row>

                    <v-spacer></v-spacer>
                    
                    <v-btn
                        color="#00c654"
                        tile
                        outlined
                        style="float: right; margin-left: 12px;"
                        @click="e1 = 4"
                    >
                        Review &amp; Publish
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        class="white--text"
                        style="float: right; margin-left: 12px;"
                        @click="saved = !saved"
                    >
                        Save draft
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        @click="nextStep(3)"
                        class="white--text"
                        style="float: right; margin-left: 12px;"
                    >
                        Continue
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        outlined
                        @click="prevStep(3)"
                        style="float: right;"
                    >
                        Back
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step=4>
                    <v-card style="margin-bottom: 16px; padding-bottom: 12px;">
                        <v-row>
                            <v-col>
                                <v-label>Title</v-label>
                                <div>{{title}}</div>
                                <v-label>Text</v-label>
                                <div>{{text}}</div>
                            </v-col>
                            <v-col>
                                <v-label>Input 1</v-label>
                                <div>{{input1}}</div>
                                <v-label>Input 2</v-label>
                                <div>{{input2}}</div>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                <v-label>Checkbox settings</v-label>
                                <div>
                                    <div v-if="setting1">First setting</div>
                                    <div v-if="setting2">Second setting</div>
                                    <div v-if="setting3">Third setting</div>
                                    <div v-if="setting4">Fourth setting</div>
                                </div>
                            </v-col>
                        </v-row>
                        
                    </v-card>
                   
                    <v-btn
                        color="#00c654"
                        tile
                        class="white--text"
                        style="float: right; margin-left: 12px;"
                        @click="validateForm()"
                    >
                        Save &amp; Publish
                    </v-btn>

                    <v-btn
                        color="#00c654"
                        tile
                        class="white--text"
                        style="float: right; margin-left: 12px;"
                        @click="saved = !saved"
                    >
                        Save draft
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        outlined
                        @click="prevStep(4)"
                        style="float: right;"
                    >
                        Back
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        



            
        </v-stepper>
    </v-content>
</template>

<script>
export default {
    name: 'stepper',
    data() {
        return {
            e1: 1,
            steps: 3,
            saved: false,
            notificationText: null,
            title: '',
            text: '',
            input1: '',
            input2: '',
            setting1: false,
            setting2: false,
            setting3: false,
            setting4: false,
            inputRules: [v => !!v || 'This field is required'],
            step2Rules: [],
            dropdown: ['Information', 'Warning', 'Cancellation'],
            modelMsgType: null,
            msgType: null
        }
    },
    watch: {
        steps(val) {
            if (this.e1 > val) {
                this.e1 = val
            }
        },
        e1() {
            this.saved = false;
            this.notificationText = null;
        },
        modelMsgType: function(val) {
            this.msgType = val;
        }
    },
    methods: {
        nextStep(n) {
            if (n === 4) {
                this.e1 = 1
            } else {
                this.e1 = n + 1
            }
        },
        prevStep(n) {
            this.e1 = n-1;
        },
        getValidation(step) {
            if(step===2){
                return false;
            }
            return true;
        },
        validateForm: function() {
            if(this.input1.length < 1) {
                this.step2Rules = [() => false];
            } else {
                this.step2Rules = [];
                this.notificationText = 'Published!';
                this.saved = true;
            }
        }
    }
}
</script>

<style>
    .push, .radio, .v-autocomplete {
        margin-bottom: 16px;
    }

    .messageType .v-input__slot {
        padding-left: 24px !important;
    }
</style>