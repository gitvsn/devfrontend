<template>
    <div class="main-wrapper">
      <TheSidebar/>
      <div class="main-content">
        <TheHeader/>
        <router-view></router-view>
      </div>
      <TheFooter/>
    </div>
</template>

<script>
    import TheHeader from './TheHeader'
    import TheFooter from './TheFooter'
    import TheSidebar from "@/containers/TheSidebar";

    export default {
        name: 'TheContainer',
        components: {
          TheSidebar,
            TheHeader,
            TheFooter,
        }
    }
</script>

<style scoped>

</style>
