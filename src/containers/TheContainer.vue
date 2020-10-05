<template>
    <div class="app">
        <div class="wrapper">
            <TheHeader/>
            <div class="body-container">
                <router-view></router-view>
            </div>
            <TheFooter/>
        </div>
    </div>
</template>

<script>
    import TheHeader from './TheHeader'
    import TheFooter from './TheFooter'

    export default {
        name: 'TheContainer',
        components: {
            TheHeader,
            TheFooter
        }
    }
</script>

<style scoped>

</style>
