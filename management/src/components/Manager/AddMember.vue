<template>
    <div class="container shadow m-3 col-12">
    <div class="d-flex justify-content-center m-2">
        <h1>Add Member</h1>
    </div>
    <label for="member_name">Member name</label>
    <input class="form-control m-1" type="text" id="member_name" v-model="member_name"/>       
    <label for="member_email">Member Email</label>
    <input class="form-control m-1" type="email" id="member_email" v-model="member_email"/>       
    <div class="d-flex justify-content-center">
        <button @click.prevent="submit" class="btn btn-primary col-6 m-2">Submit</button>
    </div>
    </div>   
</template>

<script>
import firebaseApp from '@/firebase.js'
import { arrayUnion, getFirestore } from "firebase/firestore"
import { doc, updateDoc} from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "AddMember", 
    components: {
        
    }, 
    data(){
        return{
            email:"",
            name:"",
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
            this.name = user.displayName
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
            const projectDoc = doc(db, "projects", this.project_name);
            await updateDoc(projectDoc, {
                member_list_name: arrayUnion(this.member_name),
                [`member_list.${this.member_name}.name`] : this.member_name,
                [`member_list.${this.member_name}.email`]: this.member_email,
                [`member_list.${this.member_name}.task`]: 0,
                [`member_list.${this.member_name}.task_name`]: "",
                [`member_list.${this.member_name}.task_status`]: 0,
            });
            location.reload()
        }
    },
}
</script>

<style>

</style>