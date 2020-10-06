<template>
  <div class="auth-box__content">
    <div class="auth-box__title">
      <p>Reset password</p>
      <div class="auth-box__title-text mt-2">
        <p>Set new password for your account</p>
      </div>
    </div>
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
    <div class="custom-input mt-4">
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
    <button class="my-btn w-100 mt-4"><span>
     Confirm reset
    </span></button>
    <div class="text-center mt-4">
      <a href="/" class="custom-link auth-box__link">Back to login</a>
    </div>
  </div>
</template>

<script>

    export default {
        name: "SetNewPassword",
    }
</script>

<style scoped lang="scss">
</style>
