<template>
  <div class="sidebar">
    <div class="sidebar__content">
      <a href="/" class="logo"><img src="@/assets/img/logo.svg" alt=""></a>
      <nav class="sidebar__nav">
        <ul>
          <li><a href="#"><img src="@/assets/img/menu-dashboard.svg" alt="">Dashboard</a></li>
          <li><a href="#"><img src="@/assets/img/menu-wallet.svg" alt="">Send</a></li>
          <li class="active"><a href="#"><img src="@/assets/img/menu-setting.svg" alt="">Setting</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar"
}
</script>

<style scoped>

</style>
