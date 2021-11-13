<template>
    <BackButton/>
    <div v-if = "role === 'Member'">
        <ProjectInfo/>
        <FinishTask/>
        <UpdateMessage/>
    </div>

    <div v-if = "role === 'Admin'">
    </div>

    <div v-if = "role === 'Manager'">
        <div class="row">
        <div class="col-4">
            <ProjectInfo/>
            <div class="d-flex justify-content-center m-2">
            <button class="btn btn-primary" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                Add Member
            </button>
            <div class="collapse" id="collapse1">
                <AddMember/>
            </div>
            </div>

            <div class="d-flex justify-content-center m-2">
            <button class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
                Assign Task
            </button>
            <div class="collapse" id="collapse2">
                <AssignTask/>
            </div>
            </div>
        </div>
        <div class="col-8">
            <ProgressBar/>
            <MemberList/>
        </div>
        </div>
    </div>
    <div style="width: 100px; height: 200px;"></div>
</template>

<script>
import ProjectInfo from '@/components/Project/ProjectInfo.vue'
import AddMember from '@/components/Manager/AddMember.vue'
import AssignTask from '@/components/Manager/AssignTask.vue'
import BackButton from '@/components/BasicComponent/BackButton.vue'
import ProgressBar from '@/components/DashboardComponent/ProgressBar.vue'
import MemberList from '@/components/DashboardComponent/MemberList.vue'


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
        UpdateMessage,
        ProgressBar,
        MemberList
    }, 
    data(){
        return{
            email:"",
            name:"",
            role:""
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.email = user.email
            this.name = user.displayName
            this.findRole()
        } else {
            console.log("Sorry")
        }
});
    },

    methods: {
        async findRole() {
            const docRef = doc(db, "user", this.name);
            const docSnap = await getDoc(docRef);
            console.log("Document data:", docSnap.data().role);
            this.role = docSnap.data().role
            return docSnap.data().role;
        },
    },
}
</script>

<style>

</style>