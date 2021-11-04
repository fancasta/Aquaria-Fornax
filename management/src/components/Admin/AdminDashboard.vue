<template>
    <h1>Homepage</h1>
    <p>Computed reversed message: {{isManager}}</p>
</template>

<script>
import firebaseApp from '../../firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth } from "firebase/auth";

export default {
    method: {
        role() {
            const auth = getAuth();
            const user = auth.currentUser;
            const displayName = user.displayName;
            console.log(displayName)
            const userDoc = getDoc(doc(db, "user", displayName));
            console.log(userDoc.getString("role"))
            return userDoc.getString("role")
        }
    },

    computed: {
        isAdmin() {
            return this.role == "Admin"
        },

        isManager() {
            return this.role == "Manager"
        },

        isMember() {
            return this.role == "Member"
        }
    }
}
</script>

<style>

</style>