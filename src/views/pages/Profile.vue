<template>
<div>
    <GoogleAuthSetModal/>
</div>
</template>

<script>
    import GoogleAuthSetModal from "../plugins/TwoFaGoogle/GoogleAuthSetModal";
    export default {
        name: "Profile",
        components:{
            GoogleAuthSetModal
        }
    }
</script>

<style scoped>

</style>
