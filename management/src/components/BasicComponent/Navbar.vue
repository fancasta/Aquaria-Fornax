<template>
<nav class="navbar navbar-expand-lg p-2 bg-dark text-white">
    <img style="width:100px" src="@/assets/logo.png" alt="">
    <ul class="navbar-nav">
        <li class="nav-item active">
        <a class="nav-link" href="./home">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="./chat">Chat</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="./about">About</a>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    data(){
        return{
            location:"",
        }
    },
    mounted(){
        this.location =  this.$router.currentRoute
        console.log(this.location)
    },
}
</script>

<style>

</style>