<script setup>
import { ref, onMounted } from "vue";
import { db } from "../firebase/init.js";

import { collection, getDocs } from "firebase/firestore";

import Spinner from "../components/Spinner.vue";

const authors = ref([]);
const isLoading = ref(true);
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "users"));

  const authorLocal = [];

  querySnapshot.forEach((doc) => {
    const auth = {
      id: doc.id,
      name: doc.data().name,
      password: doc.data().password,
      gender: doc.data().gender,
      userId: doc.data().user_id,
      postCount: 0,
    };

    authorLocal.push(auth);
  });

  // Fetch the posts for each author
  const postsSnapshot = await getDocs(collection(db, "posts"));
  postsSnapshot.forEach((postDoc) => {
    const authorId = postDoc.data().userId;
    const author = authorLocal.find((auth) => auth.userId === authorId);
    if (author) {
      author.postCount++; // Increment the post count for the author
    }
  });

  authors.value = authorLocal;
  isLoading.value = false;
});
</script>
<template>
  <div v-if="isLoading">
    <Spinner />
  </div>
  <div v-else>
    <h1>Authors - {{ authors.length }}</h1>
    <div class="flex">
      <div v-for="author in authors" :key="author.id">
        <div
          class="card item"
          :style="{
            background: author.gender === 'male' ? '#2980b9' : '	#FF69B4',
          }"
        >
          <div class="card-details">
            <p class="text-title">{{ author.name }}</p>
            <p class="text-body">Here are the details of the card</p>
            <p class="text-body">Post Count: {{ author.postCount }}</p>
          </div>
          <button
            class="card-button"
            :style="{
              background: author.gender === 'male' ? 'dimgray' : 'dimgray',
            }"
          >
            {{ author.gender }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 190px;
  height: 254px;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease-out;
  overflow: visible;
}

.card-details {
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
}

.card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #008bf8;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
}

.text-body {
  color: rgb(241, 236, 236);
}

/*Text*/
.text-title {
  font-size: 1em;
  font-weight: bold;
  color: white;
  /* word-wrap: break-word; */
  white-space: nowrap; /* Prevents line breaks within the text */
  overflow: hidden; /* Hides any overflowing content */
  text-overflow: ellipsis;
}

/*Hover*/
.card:hover {
  border-color: #008bf8;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}

/* card */

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
}
.item {
  flex: 1;
  max-width: 300px;
}
.blue {
  color: blue;
}
.pink {
  color: rgb(187, 79, 97);
}

h1 {
  font-weight: 550;
  color: dimgray;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 30px;
}
</style>
