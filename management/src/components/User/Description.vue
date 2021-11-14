<template>
    <p>{{description}}</p>
</template>

<script>
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, getDoc} from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    components: {
    }, 
    data(){
        return{
            user:false,
            name:"",
            email:"",
            description:"",
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            this.user = user;
            this.email = user.email
            this.name = user.displayName
            this.getProfile()

        });
    },

    methods: {
        async getProfile() {
            const docRef = doc(db, "user", this.name);
            const docSnap = await getDoc(docRef);
            if (docSnap.data().description != undefined) {
                this.description = docSnap.data().description
            } else {
                this.description = "Say something positive!"
            }
        },
    },
}
</script>