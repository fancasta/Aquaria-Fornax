<template>
  <nav class="navbar navbar-expand-lg p-2 bg-dark text-white">
    <img style="width: 100px" src="@/assets/logo.png" alt="" />
    <ul class="navbar-nav p-2">
        <li class="nav-item m-2">
        <router-link tag="li" class="nav-link" to="/home" >Home</router-link>
        </li>
        <li class="nav-item m-2">
        <router-link tag="li" class="nav-link" to="/chat">Chat</router-link>
        </li>
        <li class="nav-item m-2">
        <router-link tag="li" class="nav-link" to="/whiteboard">Whiteboard</router-link>
        </li>
        <li class="nav-item m-2">
        <router-link tag="li" class="nav-link" to="/profile">Profile</router-link>
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
nav li:active,
nav li:hover,
nav a.router-link-active,
nav a.router-link-exact-active {
   background-color: rgba(24, 100, 161, 0.774);
   color:black;
   cursor: pointer;
 }

</style>