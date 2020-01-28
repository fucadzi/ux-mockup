<template>
<div>
    <v-stepper
        v-model="e1"
    >
        <v-stepper-items>
            <v-stepper-content
                v-for="n in steps"
                :key="`${n}-content`"
                :step="n"
            >
                <!-- <v-card
                    class="mb-12"
                    height="200px"
                >This is card content {{n}}</v-card> -->
                <v-text-field label="Title"></v-text-field>
                <v-textarea solo=true>
                </v-textarea>

                <v-btn
                    color="#00c654"
                    outlined="true"
                    @click="nextStep(n)"
                >
                Continue
                </v-btn>

            </v-stepper-content>
        </v-stepper-items>
       



        <v-stepper-header>
            <template v-for="n in steps">
                <v-stepper-step
                    :key="`${n}-step`"
                    :complete="e1 > n"
                    :step="n"
                    :editable=true
                >
                Step {{ n }}
                </v-stepper-step>

                <v-divider
                    v-if="n !== steps"
                    :key="n"
                ></v-divider>
            </template>
        </v-stepper-header>
    </v-stepper>
</div>
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
            console.log('next step', n, this.steps);
            if (n === this.steps) {
                console.log('iz it');
                this.e1 = 1
            } else {
                this.e1 = n + 1
                console.log('heloo', this.e1);
            }
        }
    }
}
</script>