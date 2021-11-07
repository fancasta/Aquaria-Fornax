<template>
    <h1>Add Member</h1>
    <div>
        <label for="member_name">Member name</label>
        <br><input type="text" id="member_name" v-model="member_name"/>       
    </div>
    <br>
    <div>
        <label for="member_email">Member Email</label>
        <br><input type="email" id="member_email" v-model="member_email"/>       
    </div>

    <br>
    <button @click.prevent="submit">Add member</button>
</template>

<script>
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, updateDoc, arrayUnion } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "AddMember", 
    components: {
        
    }, 
    data(){
        return{
            email:"",
            project_name:"",
            member_name:"",
            member_email:"",
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.email = user.email
            console.log(this.email)
        } else {
            console.log("Sorry")
        }
});
    },

    methods: {
        async submit() {
            alert("Add new member successfully!")
            this.project_name = this.$route.query.project_name
            const memberDoc = doc(db, "user", this.member_email);
            await updateDoc(memberDoc, {
                member_project: arrayUnion(this.project_name)
            });

            const projectDoc = doc(db, "projects", this.project_name);
            await updateDoc(projectDoc, {
                member_list: arrayUnion(this.member_email)
            });
        }
    },
}
</script>

<style>

</style>