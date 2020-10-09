<template>
  <div class="two-fa-google-auth-form">
    <div class="two-fa-google-auth-form__title">
      <p>Google Authentication</p>
    </div>
    <div class="two-fa-google-auth-form__wrap">
      <div class="ga-form-input">
        <input @input="input_1" @paste="paste" ref="ref1" class="mb-0 two-fa-input form-control" v-model="inp1"
               maxlength="6" autofocus/>
      </div>
      <div class="ga-form-input">
        <input @input="input_2" ref="ref2" class="mb-0 two-fa-input form-control" v-model="inp2" maxlength="1"/>
      </div>
      <div class="ga-form-input">
        <input @input="input_3" ref="ref3" class="mb-0 two-fa-input form-control" v-model="inp3" maxlength="1"/>
      </div>
      <div class="ga-form-input">
        <input @input="input_4" ref="ref4" class="mb-0 two-fa-input form-control" v-model="inp4" maxlength="1"/>
      </div>
      <div class="ga-form-input">
        <input @input="input_5" ref="ref5" class="mb-0 two-fa-input form-control" v-model="inp5" maxlength="1"/>
      </div>
      <div class="ga-form-input">
        <input @input="input_6" ref="ref6" class="mb-0 two-fa-input form-control" v-model="inp6" maxlength="1"/>
      </div>
    </div>
  </div>
</template>

<script>
//import {mapActions} from 'vuex'

export default {
  name: "TwoFaGoogleAuthForm",
  props: {
    clearFields: {
      type: Boolean,
      required: false
    },
  },
  watch: {
    clearFields: function (newV, oldV) {
      this.clearField()
    }
  },
  methods: {
    sendInputsValue(){
      this.twaCode += this.inp1;this.twaCode += this.inp2;this.twaCode += this.inp3;
      this.twaCode += this.inp4;this.twaCode += this.inp5;this.twaCode += this.inp6;
      this.$emit('twaCode',this.twaCode);


      this.twaCode = "";
    },
    paste(e) {
      this.text = e.clipboardData.getData('text').replace(/[^\d;]/g, '');
      if(this.text.length>=6) {
        this.inp1 = this.text[0];
        this.inp2 = this.text[1];
        this.inp3 = this.text[2];
        this.inp4 = this.text[3];
        this.inp5 = this.text[4];
        this.inp6 = this.text[5];
      } else {
        this.inp1 = '';
      }
      setTimeout(()=> {
        this.inp1 = this.inp1[0];
        this.$refs.ref6.focus();
      },300);
    },
    input_1(value){
      if (value.data !== null){
        this.$refs.ref2.focus();
      }
    },
    input_2(value){
      if (value.data !== null){
        this.$refs.ref3.focus();
      } else {
        this.$refs.ref1.focus();
      }
    },
    input_3(value){
      if (value.data !== null){
        this.$refs.ref4.focus();
      } else {
        this.$refs.ref2.focus();
      }
    },
    input_4(value){
      if (value.data !== null){
        this.$refs.ref5.focus();
      } else {
        this.$refs.ref3.focus();
      }
    },
    input_5(value){
      if (value.data !== null){
        this.$refs.ref6.focus();
      } else {
        this.$refs.ref4.focus();
      }
    },
    input_6(value){
      if (value.data !== null){
        this.sendInputsValue()
      } else {
        this.$refs.ref5.focus();
      }
    },
    clearField(){
      setTimeout(()=>{
        this.twaCode= '';
        this.inp6 = '';
        this.$refs.ref5.focus()
      },200);
      setTimeout(()=>{
        this.inp5 = '';
        this.$refs.ref4.focus()
      },400);
      setTimeout(()=>{
        this.inp4 = '';
        this.$refs.ref3.focus()
      },600);
      setTimeout(()=>{
        this.inp3 = '';
        this.$refs.ref2.focus()
      },800);
      setTimeout(()=>{
        this.inp2 = '';
        this.inp1 = '';
        this.$refs.ref1.focus()
      },1000)
    }
  },
  data() {
    return {
      inp1: '',
      inp2: '',
      inp3: '',
      inp4: '',
      inp5: '',
      inp6: '',
      twaCode: ''
    }
  },
  created() {
    setTimeout(()=> {
      this.$refs.ref1.focus();
    },300)
  }
}
</script>

<style scoped lang="scss">
</style>
