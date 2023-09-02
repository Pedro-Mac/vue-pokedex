<template>
    <div class="loader">

    </div>
</template>

<script>
export default {

}
</script>

<style>
.loader {
    width: 60px;
    height: 60px;
    border: 5px solid rgb(185 28 28);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>