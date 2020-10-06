<template>
  <div class="auth-box__content">
    <div class="auth-box__title">
      <p>Reset password</p>
      <div class="auth-box__title-text mt-2">
        <p>Enter your email to send set new
          password link

        </p>
      </div>
    </div>
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
    <button class="my-btn w-100 mt-4"><span>
     Reset password
    </span></button>
    <div class="text-center mt-4">
      <a href="/" class="custom-link auth-box__link">Back to login</a>
    </div>
  </div>
</template>

<script>


    export default {
        name: "RestorePassword",
    }
</script>

<style scoped lang="scss">
</style>
