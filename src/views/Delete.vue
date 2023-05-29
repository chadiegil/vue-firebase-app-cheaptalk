<script setup>
import { ref } from "vue";
import { getFirestore } from "firebase/firestore";
import { useRoute, useRouter } from "vue-router";
import { app } from "../firebase/init.js";
import { doc, deleteDoc } from "firebase/firestore";
const postId = ref("");

const router = useRoute();
const routes = useRouter();

const db = getFirestore(app);

postId.value = router.params.id;

const deletePost = async (postId) => {
  await deleteDoc(doc(db, "posts", postId));
  routes.push("/");
};

const deleteHandler = () => {
  deletePost(postId.value);
};
</script>

<template>
  <div class="container-delete">
    <h1>post id: {{ postId }}</h1>

    <button @click.prevent="deleteHandler">Delete Post</button>
  </div>
</template>

<style scoped>
button {
  padding: 17px 40px;
  border-radius: 10px;
  border: 0;
  background-color: rgb(255, 56, 86);
  letter-spacing: 1.5px;
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
  color: hsl(0, 0%, 100%);
}

button:hover {
  box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
}

button:active {
  background-color: rgb(255, 56, 86);
  /*50, 168, 80*/
  box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
  transform: translateY(5px);
  transition: 200ms;
}
.container-delete {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
