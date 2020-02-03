<template>
    <v-content>
        <v-stepper
            v-model="e1"
            style="margin-top: 40px"
        >

            <v-stepper-header>
                <template v-for="n in steps">
                    <v-stepper-step color="#00c654"
                        :key="`${n}-step`"
                        :complete="e1 > 4"
                        :step="n"
                        :editable=true
                    >
                    Step {{ n }}
                    </v-stepper-step>

                    <v-divider
                        :key="n"
                    ></v-divider>
                </template>
                <template>
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
                    <v-text-field color="#00c654" label="Title"></v-text-field>
                    <v-textarea solo>
                    </v-textarea>

                    <v-spacer></v-spacer>
                    <v-btn
                        color="#00c654"
                        tile
                        @click="nextStep(1)"
                        class="white--text"
                        style="float: right"
                    >
                        Continue
                    </v-btn>

                </v-stepper-content>
                <v-stepper-content step=2>
                    <v-input> Next step</v-input>
                    <v-text-field color="#00c654" label="Input"></v-text-field>
                    <v-text-field color="#00c654" label="Input"></v-text-field>
                    <v-btn
                        color="#00c654"
                        tile
                        @click="nextStep(2)"
                        class="white--text"
                        style="float: right"
                    >
                        Continue
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        outlined
                        @click="prevStep(2)"
                        style="float: right; margin-right: 12px"
                    >
                        Back
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step=3>
                    <v-checkbox color="#00c654" label="Setting 1"></v-checkbox>
                    <v-checkbox color="#00c654" label="Setting 2"></v-checkbox>
                    <v-checkbox color="#00c654" label="Setting 3"></v-checkbox>
                    <v-checkbox color="#00c654" label="Setting 4"></v-checkbox>
                    <v-btn
                        color="#00c654"
                        tile
                        class="white--text"
                        style="float: right"
                    >
                        Save
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        outlined
                        @click="prevStep(3)"
                        style="float: right; margin-right: 12px"
                    >
                        Back
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step=4>
                   
                    <v-btn
                        color="#00c654"
                        tile
                        class="white--text"
                        style="float: right"
                    >
                        Save &amp; Publish
                    </v-btn>
                    <v-btn
                        color="#00c654"
                        tile
                        outlined
                        @click="prevStep(3)"
                        style="float: right; margin-right: 12px"
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
            steps: 3
        }
    },
    watch: {
        steps(val) {
            if (this.e1 > val) {
                this.e1 = val
            }
        }
    },
    methods: {
        nextStep(n) {
            if (n === this.steps) {
                this.e1 = 1
            } else {
                this.e1 = n + 1
            }
        },
        prevStep(n) {
            console.log('go back', n);
            this.e1 = n-1;
        }
    }
}
</script>