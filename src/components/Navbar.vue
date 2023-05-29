<script setup>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "../firebase/init.js";
import { onMounted, ref } from "vue";
const isLoggedIn = ref(false);
const emailName = ref("");

const router = useRouter();

onMounted(() => {
  //check the current loggin user
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      emailName.value = getEmailName(user.email);
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignout = () => {
  if (confirm("Want to exit?")) {
    signOut(auth).then(() => {
      router.push("/");
    });
  }
};

function getEmailName(email) {
  // Split the email address on the @ symbol.
  const parts = email.split("@");

  // Return the first part of the email address.
  return parts[0];
}
</script>
<template>
  <nav>
    <div class="navbar">
      <div class="logo">
        <router-link to="/">Cheaptalk.com</router-link>
      </div>
      <div class="menu">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <!-- <li>
            <router-link to="/feed">Feed</router-link>
          </li> -->

          <li>
            <router-link to="/create-post" v-if="isLoggedIn"
              >Create Posts</router-link
            >
          </li>
          <li>
            <router-link to="/authors">Authors</router-link>
          </li>
          <li>
            <router-link to="/feed" v-if="isLoggedIn">Feed</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/sign-in">Login</router-link>
          </li>
          <li>
            <!-- <button @click="handleSignout" v-if="isLoggedIn">Sign out</button> -->
            <button @click="handleSignout" v-if="isLoggedIn">
              <svg
                viewBox="0 0 16 16"
                class="bi bi-twitter"
                fill="currentColor"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                ></path>
              </svg>
              <span class="email-style">{{ emailName }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
nav {
  /* position: fixed;
  left: 0;
  top: 0; */
  width: 100%;
  height: 75px;
  background: #2980b9;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
nav .navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 90%;
  background: #2980b9;
  margin: auto;
}
nav .navbar .logo a {
  color: #fff;
  font-size: 27px;
  font-weight: 600;
  text-decoration: none;
}
nav .navbar .menu ul {
  display: flex;
  align-items: center;
}
.navbar .menu li {
  list-style: none;
  margin: 0 15px;
}
.navbar .menu li a {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
}
section {
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #96c7e8;
  font-size: 70px;
}
.logo {
  color: white;
  font-weight: bold;
  font-size: 20px;
}
.button a {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  background: #2980b9;
  padding: 7px 12px;
  font-size: 18px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.15);
}

/* button style */
button {
  background: transparent;
  position: relative;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid rgb(40, 144, 241);
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: rgb(40, 144, 241);
  transition: color 0.3s 0.1s ease-out;
  text-align: center;
  color: #fff;
}

button span {
  margin: 1px;
}

button::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  content: "";
  border-radius: 50%;
  display: block;
  width: 20em;
  height: 20em;
  left: -5em;
  text-align: center;
  transition: box-shadow 0.5s ease-out;
  z-index: -1;
}

button:hover {
  border: 1px solid rgb(40, 144, 241);
  transform: scale(1);
}

button:hover::before {
  box-shadow: inset 0 0 0 10em rgb(40, 144, 241);
}
.email-style {
  padding: 0px 2px 0px 3px;
}
</style>
