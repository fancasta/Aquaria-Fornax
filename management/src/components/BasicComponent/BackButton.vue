<template>
    <button @click="reRoute" class="btn btn-primary btn-lg m-3">Back</button>
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