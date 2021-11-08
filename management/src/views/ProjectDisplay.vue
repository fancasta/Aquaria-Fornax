<template>
    <h1>Project Display</h1>
    <ProjectInfo/>
    <div v-if = "role === 'Member'">
        <FinishTask/>
        <UpdateMessage/>
    </div>


    <div v-if = "role === 'Admin'">
        <h1> We are {{role}} </h1>
    </div>


    <div v-if = "role === 'Manager'">
        <h1> We are {{role}} </h1>
        <AddMember/>
        <AssignTask/>
    </div>
    <BackButton/>
    <div style="width: 100px; height: 200px;"></div>
</template>

<script>
import ProjectInfo from '@/components/Project/ProjectInfo.vue'
import AddMember from '@/components/Manager/AddMember.vue'
import AssignTask from '@/components/Manager/AssignTask.vue'
import BackButton from '@/components/BasicComponent/BackButton.vue'

import FinishTask from '@/components/Member/FinishTask.vue'
import UpdateMessage from '@/components/Member/UpdateMessage.vue'

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
        AssignTask,
        BackButton,
        FinishTask,
        UpdateMessage
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