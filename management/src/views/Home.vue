<template>
    <h1>Homepage</h1>
    <h1 v-if="role== 'Admin'">Is Admin</h1>
    <h1 v-if="role== 'Manager'">Is Manager</h1>
    <h1 v-if="role== 'Member'">Is Member</h1>
</template>

<script>
import firebaseApp from '../firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth } from "firebase/auth";

export default {
    name: "Home", 
    components: {
       
    },

    computed: {
        role() {
            const auth = getAuth();
            const user = auth.currentUser;
            const displayName = user.displayName;

            const userDoc = getDoc(doc(db, "user", displayName));
            return userDoc.role
        }
    }
}
</script>

<style>

</style>