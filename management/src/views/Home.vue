<template>
    <h1>Homepage</h1>

    <div v-if = "role === 'Member'">
        <h1> We are {{role}} </h1>
        <MemberDashboard/>
    </div>


    <div v-if = "role === 'Admin'">
        <h1> We are {{role}} </h1>
    </div>


    <div v-if = "role === 'Manager'">
        <h1> We are {{role}} </h1>
        <CreateProject/>
        <ManagerDashboard/>
        <router-link to="/kpi">Go see KPI</router-link>
    </div>
    <BackButton/>
    <LogOut/>
</template>

<script>
import CreateProject from '@/components/Manager/CreateProject.vue'
import ManagerDashboard from '@/components/Manager/ManagerDashboard.vue'
import MemberDashboard from '@/components/Member/MemberDashboard.vue'
import LogOut from '@/components/User/LogOut.vue'
import BackButton from '@/components/BasicComponent/BackButton.vue'
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
        BackButton
    }, 
    data(){
        return{
            email:"",
            role:"",
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("I trusted you")
            this.email = user.email
            console.log(this.email)
            this.findRole()
        } else {
            console.log("Sorry")
        }
});
    },

    methods: {
        async findRole() {
            const docRef = doc(db, "user", this.email);
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