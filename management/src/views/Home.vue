<template>
    <Navbar/>
    <div class="d-flex justify-content-center m-2">
        <h1>Homepage</h1>
    </div>
    <BackButton/>
    <div v-if = "role === 'Member'">
        <MemberDashboard/>
    </div>


    <div v-if = "role === 'Admin'">
    </div>


    <div v-if = "role === 'Manager'">
        <ManagerDashboard/>
        <div class="d-flex justify-content-center m-2">
        <button class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Create Project
        </button>
        </div>
        <div class="collapse" id="collapseExample">
            <CreateProject/>
        </div>
    </div>
    <div class="d-flex justify-content-center m-2">
        <LogOut/>
    </div>
    <div style="width: 100px; height: 200px;"></div>
</template>

<script>
import CreateProject from '@/components/Manager/CreateProject.vue'
import ManagerDashboard from '@/components/Manager/ManagerDashboard.vue'
import MemberDashboard from '@/components/Member/MemberDashboard.vue'
import LogOut from '@/components/User/LogOut.vue'
import BackButton from '@/components/BasicComponent/BackButton.vue'
import Navbar from '@/components/BasicComponent/Navbar.vue'
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "Home", 
    components: {
        LogOut, 
        CreateProject,
        ManagerDashboard,
        MemberDashboard,
        BackButton,
        Navbar
    }, 
    data(){
        return{
            user:false,
            name:"",
            email:"",
            role:"",
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            this.user = user;
            this.email = user.email
            this.name = user.displayName
            this.findRole()

        });
    },

    methods: {
        async findRole() {
            const docRef = doc(db, "user", this.name);
            const docSnap = await getDoc(docRef);
            console.log("Document data:", docSnap.data().role);
            this.role = docSnap.data().role
            return docSnap.data().role;
        }
    },
}
</script>

<style>

</style>