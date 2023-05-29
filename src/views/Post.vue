<script setup>
import { ref, onMounted } from "vue";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase/init.js";

import { useRouter } from "vue-router";
import Spinner from "../components/Spinner.vue";

const title = ref("");
const description = ref("");
const errMsg = ref("");
const category = ref("");
const userIdPost = ref("");
const isLoading = ref(false);

const router = useRouter();

const createPost = async () => {
  const colref = collection(db, "posts");

  const dataObj = {
    title: title.value,
    description: description.value,
    category: category.value,
    createdAt: serverTimestamp(),
    userId: userIdPost.value,
  };

  await addDoc(colref, dataObj);
  router.push("/");
  isLoading.value = true;
};

onMounted(async () => {
  // Print the list of users
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      userIdPost.value = uid;
    } else {
      // User is signed out
      // ...
    }
  });
});
</script>

<template>
  <div v-if="isLoading">
    <Spinner />
  </div>
  <div class="container" v-else>
    <form @submit.prevent="createPost">
      <p class="form-title">Post new Item</p>
      <div class="input-container">
        <input type="text" placeholder="Title" v-model="title" required />
        <span> </span>
      </div>
      <div class="input-container">
        <input type="text" placeholder="Description" v-model="description" />
      </div>
      <div class="input-container">
        <input type="text" placeholder="Category" v-model="category" />
      </div>
      <p v-if="errMsg" class="err-mgs">{{ errMsg }}</p>
      <button type="submit" class="submit">Post</button>
    </form>
  </div>
</template>

<style scoped>
.form {
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 370px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.input-container {
  position: relative;
}

.input-container input,
.form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 1.2rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit {
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: font-size 0.2s ease-in-out;
  transition-delay: 0.1s;
}
.submit:hover {
  font-size: 15px;
}

.signup-link {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
}
.err-mgs {
  text-align: center;
  color: red;
}
</style>
