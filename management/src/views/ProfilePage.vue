<template>
    <Navbar/>
    <div class="d-flex justify-content-center m-2">
        <h1>Profile Page</h1>
    </div>
    <BackButton/>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-3">
            <h4>Profile picture</h4>
            <ProfilePic :key="pic_monitor"/>
            <br>
            <button @click="randomizePic" v-if="user" class="btn btn-primary btn-md m-2">Get randomized pic</button>

            <p><b>Username</b>: {{name}}</p>
            <p><b>Email</b>: {{email}}</p>
            <p><b>Role</b>: {{role}}</p>

        </div>
        <div class="col-3">
            <h4>Description</h4>
            <Description :key="desc_monitor"/>
            <div class="d-flex justify-content-left m-2">
            <button class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Write description
            </button>
            </div>
            <div class="collapse" id="collapseExample">
                <textarea class="form-control m-1" id="description" v-model="description"/>
                <button @click.prevent="newDescription" class="btn btn-primary col-6 m-2">Submit</button>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
    <div style="width: 100px; height: 200px;"></div>
</template>

<script>
import ProfilePic from '@/components/User/ProfilePic.vue'
import Description from '@/components/User/Description.vue'
import BackButton from '@/components/BasicComponent/BackButton.vue'
import Navbar from '@/components/BasicComponent/Navbar.vue'
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, getDoc, updateDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "Home", 
    components: {

        BackButton,
        Navbar,
        ProfilePic,
        Description
    }, 
    data(){
        return{
            user:false,
            name:"",
            email:"",
            role:"",
            pic_monitor: 0,
            desc_monitor: 0,
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
            console.log("Document data:", docSnap.data().role);
            this.role = docSnap.data().role
        },

        async randomizePic() {
            const docRef = doc(db, "user", this.name);
            var random = Math.floor(Math.random() * 101);
            await updateDoc(docRef, {
                img_url: "https://picsum.photos/id/" + random + "/300",
            });
            this.pic_monitor += 1
        },

        async newDescription() {
            const docRef = doc(db, "user", this.name);
            await updateDoc(docRef, {
                description: this.description,
            });
            this.desc_monitor += 1
        },
    },
}
</script>

<style>

</style>