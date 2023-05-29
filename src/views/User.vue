<template>
  <div>
    <h1>List of Users</h1>
    <ul>
      <li v-for="user in users" :key="user.uid">
        <img :src="user.photoURL" :alt="user.displayName" />
        <div>
          <h2>{{ user.displayName }}</h2>
          <p>{{ user.email }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { getAuth } from "firebase/auth";

const auth = getAuth();

const users = ref([]);

const listAllUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
  auth()
    .listUsers(1000, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        console.log("user", userRecord.toJSON());
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log("Error listing users:", error);
    });
};

onMounted(listAllUsers);
</script>
