<template>
  <header class="header">

    <div class="user-short ml-auto">
      <a href="/" class="user-short__icon">
        <img src="@/assets/img/user-img.jpg" alt="">
      </a>
      <div class="user-short__content">
        <a href="/">Mike Smith</a>
      </div>
      <div class="user-short__drop">
        <ul>
          <li><a href="/">Profile</a></li>
          <li><a href="/">Wallet</a></li>
          <li><a href="/">Log out</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "TheHeader"
    }
</script>

<style scoped>

</style>
