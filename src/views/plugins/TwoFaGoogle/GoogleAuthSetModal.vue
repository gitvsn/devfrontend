<template>
    <div class="KawaiiPopup-container">
        <div class="KawaiiPopup-bg"></div>
        <div class="KawaiiPopup-slide">
            <div class="KawaiiPopup TwoFaPopup">
                <button @click="close" class="KawaiiPopup__close"></button>
                <div class="KawaiiPopup__title mb-3">
                    <p>Google authenticator</p>
                </div>
                <ul class="steps">
                    <li class="step" :class="currentStep === 1 ? 'active' : '' || currentStep > 1 ? 'success' : ''">
                        <p class="step-item">1</p>
                    </li>
                    <li class="step" :class="currentStep === 2 ? 'active' : '' || currentStep > 2 ? 'success' : ''">
                        <p class="step-item">2</p>
                    </li>
                    <li class="step" :class="currentStep === 3 ? 'active' : '' || currentStep > 3 ? 'success' : ''">
                        <p class="step-item">3</p>
                    </li>
                    <li class="step" :class="currentStep === 4 ? 'active' : '' || currentStep > 4 ? 'success' : ''">
                        <p class="step-item">4</p>
                    </li>
                </ul>

                <StepOne v-if="currentStep === 1"/>
                <StepTwo v-if="currentStep === 2"/>
                <StepThree v-if="currentStep === 3"/>
                <StepFour v-if="currentStep === 4" :confirm="confirm"/>

              <div class="stepper-footer">
                <button type="button" class="my-btn w-100" v-if="currentStep !== 4" @click="nextStep"><span>Next step <img src="@/assets/img/right-arrow.svg" alt="" class="ml-2"></span></button>
                <button type="button" class="my-btn w-100" v-if="currentStep === 4" @click="_confirm"><span>Confirm <img src="@/assets/img/right-arrow.svg" alt="" class="ml-2"></span></button>
                <button type="button" class="custom-link" v-if="currentStep !== 1" @click="prevStep">Previous step</button>

              </div>
            </div>
        </div>
    </div>


</template>

<script>
    import StepOne from "./StepOne";
    import StepTwo from "./StepTwo";
    import StepThree from "./StepThree";
    import StepFour from "./StepFour";

    export default {
        name: "TwoFaGoogle",
        components: {
            StepOne,
            StepTwo,
            StepThree,
            StepFour
        },
        data() {
            return {
                currentStep: 1,
                confirm: false
            }
        },
        methods:{
            nextStep () {
                if(this.currentStep !== 4)
                    this.currentStep++;
            },
            prevStep () {
                if(this.currentStep !== 1)
                    this.currentStep--;
            },
            _confirm(){
                this.confirm = !this.confirm;
            },
            close() {
                this.$emit('close')
            },
        }
    }
</script>

<style scoped>

</style>
