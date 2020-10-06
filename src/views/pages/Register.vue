<template>
  <div class="auth-box__content">
    <div class="auth-box__title">
      <p>Sign in to account</p>
    </div>
    <nav class="auth-nav">
      <ul>
        <li><button type="button">Authorization</button></li>
        <li class="active"><button type="button">Registration</button></li>
      </ul>
    </nav>
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
    <div class="custom-input mt-4">
      <label>
        <input type="text" class="custom-input__input" required>
        <span class="custom-input__content">
          <span class="custom-input__text">Surmane</span>
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
    <div class="custom-input mt-4">
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
    <div class="custom-input mt-4">
      <label>
        <input type="password" class="custom-input__input" required>
        <span class="custom-input__content">
          <span class="custom-input__text">Repeat password</span>
        <span class="custom-input__icon">
          <button class="pass-toggle"></button>
        </span>
        </span>
      </label>
      <div class="error-msg">
        <p>User is not found</p>
      </div>
    </div>
    <div class="checkbox mt-4">
      <label>
        <input type="checkbox" name="remember">
        <span class="checkbox__content">
          <span class="checkbox__box"></span>
          <span class="checkbox__text">I agree to the <a href="#" target="_blank">Terms and Conditions</a></span>
        </span>
      </label>
    </div>
    <button class="my-btn w-100 mt-4"><span>
      register now <img class="ml-3" src="@/assets/img/right-arrow.svg" alt="">
    </span></button>
    <div class="text-center mt-4">
      <a href="/" class="custom-link auth-box__link">Forgot your password?</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>

</style>
