<template>
  <div class="KawaiiPopup-container">
    <div class="KawaiiPopup-bg"></div>
    <div class="KawaiiPopup-slide">
      <div class="KawaiiPopup">
        <button @click="close" class="KawaiiPopup__close"></button>
        <div class="popup-result">
          <div class="popup-result__icon">
            <img src="@/assets/img/error-icon.svg" alt="">
          </div>
          <div class="KawaiiPopup__title mt-3">
            <p>Save error.<br> Сhanges not saved</p>
          </div>
          <button type="button" class="my-btn"><span>OK</span></button>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ErrorModal"
    }
</script>

<style scoped>

</style>
