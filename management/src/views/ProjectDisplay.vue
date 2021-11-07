<template>
    <h1>Project Display</h1>
    <ProjectInfo/>
    <div v-if = "role === 'Member'">
        <h1> We are {{role}} </h1>
    </div>


    <div v-if = "role === 'Admin'">
        <h1> We are {{role}} </h1>
    </div>


    <div v-if = "role === 'Manager'">
        <h1> We are {{role}} </h1>
        <AddMember/>
    </div>
    <BackButton/>
</template>

<script>
import ProjectInfo from '@/components/Project/ProjectInfo.vue'
import AddMember from '@/components/Manager/AddMember.vue'
import BackButton from '@/components/BasicComponent/BackButton.vue'

import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "ProjectDisplay", 
    components: {
        ProjectInfo,
        AddMember,
        BackButton
    }, 
    data(){
        return{
            email:"",
            role:""
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