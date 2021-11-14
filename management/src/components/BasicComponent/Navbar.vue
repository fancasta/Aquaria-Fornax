<template>
<nav class="navbar navbar-expand-lg p-2 bg-dark text-white">
    <img style="width:100px" src="@/assets/logo.png" alt="">
    <ul class="navbar-nav">
        <li class="nav-item m-2">
        <a class="nav-link" href="./home">Home</a>
        </li>
        <li class="nav-item m-2">
        <a class="nav-link" href="./chat">Chat</a>
        </li>
        <li class="nav-item m-2">
        <a class="nav-link" href="./profile">Profile</a>
        </li>
        <li class="nav-item ml-6 m-auto">
            <LogOut/>
        </li>
    </ul>
</nav>
</template>

<script>
import LogOut from '@/components/User/LogOut.vue'
export default {
    data(){
        return{
            location:"",
        }
    },
    components: {
        LogOut, 
    },
    mounted(){
        this.location =  this.$router.currentRoute
        console.log(this.location)
    },
}
</script>

<style>

</style>