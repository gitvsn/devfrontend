<template>
<div class="profile-page">
<!--    <GoogleAuthSetModal/>-->
<!--    <GoogleAuthDisableModal/>-->
<!--  <SuccessModal/>-->
<!--  <ErrorModal/>-->
  <div class="page-title">
    <p>Account settings</p>
  </div>
  <div class="box profile">
    <div class="profile__main">
      <div class="profile-photo">
        <label>
          <input type="file"  class="profile-photo__input">
          <img src="@/assets/img/user-img.jpg" alt="">
        </label>
      </div>
      <div class="safety">
        <div class="title">
          <p>
            Safety
            <span>2FA disabled</span>
          </p>
        </div>
        <div class="switcher-wrap ml-auto">
          <div class="switcher">
            <label>
              <input type="checkbox">
              <span class="switcher__box"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="profile__info">
      <div class="title">
        <p>Personal data</p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="custom-input">
            <label>
              <input type="text" class="custom-input__input" required>
              <span class="custom-input__content">
          <span class="custom-input__text">Name</span>
        <span class="custom-input__icon">
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 7.5C8.55156 7.5 10.2143 5.82129 10.2143 3.75C10.2143 1.67871 8.55156 0 6.5 0C4.44844 0 2.78571 1.67871 2.78571 3.75C2.78571 5.82129 4.44844 7.5 6.5 7.5ZM9.1 8.4375H8.6154C7.9712 8.73633 7.25446 8.90625 6.5 8.90625C5.74554 8.90625 5.0317 8.73633 4.3846 8.4375H3.9C1.74687 8.4375 0 10.2012 0 12.375V13.5938C0 14.3701 0.623884 15 1.39286 15H11.6071C12.3761 15 13 14.3701 13 13.5938V12.375C13 10.2012 11.2531 8.4375 9.1 8.4375Z" fill="#C6C6D7"/>
</svg>

        </span>
        </span>
            </label>
            <div class="error-msg">
              <p>User is not found</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="custom-input">
            <label>
              <input type="text" class="custom-input__input" required>
              <span class="custom-input__content">
          <span class="custom-input__text">Surname</span>
        <span class="custom-input__icon">

<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 7.5C8.55156 7.5 10.2143 5.82129 10.2143 3.75C10.2143 1.67871 8.55156 0 6.5 0C4.44844 0 2.78571 1.67871 2.78571 3.75C2.78571 5.82129 4.44844 7.5 6.5 7.5ZM9.1 8.4375H8.6154C7.9712 8.73633 7.25446 8.90625 6.5 8.90625C5.74554 8.90625 5.0317 8.73633 4.3846 8.4375H3.9C1.74687 8.4375 0 10.2012 0 12.375V13.5938C0 14.3701 0.623884 15 1.39286 15H11.6071C12.3761 15 13 14.3701 13 13.5938V12.375C13 10.2012 11.2531 8.4375 9.1 8.4375Z" fill="#C6C6D7"/>
</svg>

        </span>
        </span>
            </label>
            <div class="error-msg">
              <p>User is not found</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="custom-input">
            <label>
              <input type="text" class="custom-input__input" required>
              <span class="custom-input__content">
          <span class="custom-input__text">Country</span>
        <span class="custom-input__icon">
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 7.5C8.55156 7.5 10.2143 5.82129 10.2143 3.75C10.2143 1.67871 8.55156 0 6.5 0C4.44844 0 2.78571 1.67871 2.78571 3.75C2.78571 5.82129 4.44844 7.5 6.5 7.5ZM9.1 8.4375H8.6154C7.9712 8.73633 7.25446 8.90625 6.5 8.90625C5.74554 8.90625 5.0317 8.73633 4.3846 8.4375H3.9C1.74687 8.4375 0 10.2012 0 12.375V13.5938C0 14.3701 0.623884 15 1.39286 15H11.6071C12.3761 15 13 14.3701 13 13.5938V12.375C13 10.2012 11.2531 8.4375 9.1 8.4375Z" fill="#C6C6D7"/>
</svg>
        </span>
        </span>
            </label>
            <div class="error-msg">
              <p>User is not found</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="custom-input">
            <label>
              <input type="text" class="custom-input__input" required>
              <span class="custom-input__content">
          <span class="custom-input__text">Phone</span>
        <span class="custom-input__icon">
          <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M12.629 9.89271L9.78529 8.58021C9.66381 8.52446 9.5288 8.51271 9.40058 8.54673C9.27236 8.58076 9.15787 8.65872 9.07436 8.76888L7.81498 10.4259C5.83851 9.42234 4.2479 7.70938 3.31602 5.58088L4.85469 4.22463C4.95718 4.13485 5.02973 4.01156 5.06134 3.87341C5.09295 3.73527 5.08191 3.58979 5.02988 3.45901L3.81113 0.396509C3.75403 0.255528 3.65304 0.140421 3.52558 0.0710368C3.39811 0.00165297 3.25216 -0.0176587 3.11289 0.0164317L0.472266 0.672681C0.337992 0.706073 0.218193 0.787491 0.132421 0.903649C0.046649 1.01981 -3.09311e-05 1.16384 1.53771e-08 1.31225C1.53771e-08 8.32591 5.27871 13.9997 11.7812 13.9997C11.9191 13.9998 12.0529 13.9496 12.1608 13.8572C12.2687 13.7648 12.3444 13.6358 12.3754 13.4911L12.9848 10.6474C13.0162 10.4967 12.9979 10.3389 12.933 10.2011C12.8681 10.0634 12.7606 9.95433 12.629 9.89271Z" fill="#C6C6D7"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="13" height="14" fill="white"/>
</clipPath>
</defs>
</svg>

        </span>
        </span>
            </label>
            <div class="error-msg">
              <p>User is not found</p>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="custom-input">
            <label>
              <input type="text" class="custom-input__input" required>
              <span class="custom-input__content">
          <span class="custom-input__text">E-mail</span>
        <span class="custom-input__icon">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6969 3.9625C15.8187 3.86563 16 3.95625 16 4.10938V10.5C16 11.3281 15.3281 12 14.5 12H1.5C0.671875 12 0 11.3281 0 10.5V4.1125C0 3.95625 0.178125 3.86875 0.303125 3.96562C1.00312 4.50937 1.93125 5.2 5.11875 7.51562C5.77813 7.99687 6.89062 9.00938 8 9.00313C9.11563 9.0125 10.25 7.97813 10.8844 7.51562C14.0719 5.2 14.9969 4.50625 15.6969 3.9625ZM8 8C8.725 8.0125 9.76875 7.0875 10.2937 6.70625C14.4406 3.69688 14.7562 3.43437 15.7125 2.68437C15.8937 2.54375 16 2.325 16 2.09375V1.5C16 0.671875 15.3281 0 14.5 0H1.5C0.671875 0 0 0.671875 0 1.5V2.09375C0 2.325 0.10625 2.54062 0.2875 2.68437C1.24375 3.43125 1.55938 3.69688 5.70625 6.70625C6.23125 7.0875 7.275 8.0125 8 8Z" fill="#C6C6D7"/>
</svg>
        </span>
        </span>
            </label>
            <div class="error-msg">
              <p>User is not found</p>
            </div>
          </div>
        </div>
      </div>
      <div class="title mt-4">
        <p>Change Password</p>
      </div>
      <div class="row ">
        <div class="col-md-12">
          <div class="custom-input">
            <label>
              <input type="password" class="custom-input__input" required>
              <span class="custom-input__content">
          <span class="custom-input__text">Password</span>
        <span class="custom-input__icon">
          <button class="pass-toggle"></button>
        </span>
        </span>
            </label>
            <div class="error-msg">
              <p>User is not found</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="custom-input">
            <label>
              <input type="password" class="custom-input__input" required>
              <span class="custom-input__content">
          <span class="custom-input__text">Password</span>
        <span class="custom-input__icon">
          <button class="pass-toggle"></button>
        </span>
        </span>
            </label>
            <div class="error-msg">
              <p>User is not found</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="custom-input">
            <label>
              <input type="password" class="custom-input__input" required>
              <span class="custom-input__content">
          <span class="custom-input__text">Password</span>
        <span class="custom-input__icon">
          <button class="pass-toggle"></button>
        </span>
        </span>
            </label>
            <div class="error-msg">
              <p>User is not found</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <button class="my-btn w-100"><span>save changes</span></button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    import GoogleAuthSetModal from "../plugins/TwoFaGoogle/GoogleAuthSetModal";
    import GoogleAuthDisableModal from "../plugins/TwoFaGoogle/GoogleAuthDisableModal";
    import ErrorModal from "@/components/ErrorModal";
    import SuccessModal from "@/components/SuccessModal";
    export default {
        name: "Profile",
        components:{
          ErrorModal,
           SuccessModal,
            GoogleAuthSetModal,
            GoogleAuthDisableModal
        }
    }
</script>

<style scoped>

</style>
