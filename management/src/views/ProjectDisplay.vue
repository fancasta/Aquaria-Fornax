<template>
    <h1>Project Display</h1>
    <ProjectInfo/>
    <div v-if = "role === 'Member'">
        <h1> We are {{role}} {{position}}</h1>
        <div v-if = "position === 'Leader'">
            <AddMember/>
        </div>
    </div>


    <div v-if = "role === 'Admin'">
        <h1> We are {{role}} </h1>
    </div>


    <div v-if = "role === 'Manager'">
        <h1> We are {{role}} </h1>
        <AddMember/>
    </div>
</template>

<script>
import ProjectInfo from '@/components/Project/ProjectInfo.vue'
import AddMember from '@/components/Project/AddMember.vue'

import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "ProjectDisplay", 
    components: {
        ProjectInfo,
        AddMember
    }, 
    data(){
        return{
            email:"",
            role:"",
            position:"",
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
            this.findPosition()
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
        },

        async findPosition() {
            this.project_name = this.$route.query.project_name
            const docRef = doc(db, "user", this.email);
            const docSnap = await getDoc(docRef);
            let leadingProject = docSnap.data().leading_project
            console.log(leadingProject.includes(this.project_name));
            if (leadingProject.includes(this.project_name)) {
                this.position = "Leader"
            } else {
                this.position = "Member"
            }
        }
    },
}
</script>

<style>

</style>