<template>
    <div class='sk-three-bounce'>
        <div class='sk-bounce-1 sk-child'></div>
        <div class='sk-bounce-2 sk-child'></div>
        <div class='sk-bounce-3 sk-child'></div>
    </div>
</template>

<script>
    export default {
        name: "Preloader"
    }
</script>

<style scoped lang="scss">
    .sk-three-bounce {
        width: 8em;
        margin: auto;
        text-align: center;
    }
    .sk-three-bounce .sk-child {
        width: 2em;
        height: 2em;
        background: linear-gradient(90deg,#d932c5,#60359e);
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
        animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
    }
    .sk-three-bounce .sk-bounce-1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .sk-three-bounce .sk-bounce-2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }

    @-webkit-keyframes sk-three-bounce {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes sk-three-bounce {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
</style>
