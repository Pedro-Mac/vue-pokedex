<template>
    <div :class="getLoadingStyles">
        <LoadingSpinner v-if="isLoading" />
    </div>
</template>

<script>
import LoadingSpinner from '../components/AppLoadingSpinner.vue';
export default {

    props: ['isLoading'],
    computed: {
        getLoadingStyles() {
            console.log("this.isLoading", this.isLoading);
            return {
                'flex': this.isLoading,
                'justify-center': this.isLoading,
                'items-center': this.isLoading,
                'min-h-full': true
            }
        },
    },

    components: {
        LoadingSpinner
    }
}
</script>