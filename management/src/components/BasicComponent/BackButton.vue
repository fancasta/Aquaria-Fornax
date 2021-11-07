<template>
    <button @click="reRoute" class="btn btn-primary m-1">Back</button>
</template>

<script>

export default {   
    data() {
        return {
        }
    },

    methods: {
        reRoute() {
            this.$router.go(-1)
        }
    } 
};
</script>

<style>

</style>