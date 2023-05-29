<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const errMsg = ref(false);
const isLoading = ref(false);

const login = (e) => {
  e.preventDefault();

  const auth = getAuth();

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      router.push("/feed");
    })
    .catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
  isLoading.value = true;
};
</script>
<template>
  <div class="container">
    <form class="form" @submit.prevent="login">
      <p class="form-title">Sign in to your account</p>
      <div class="input-container">
        <input
          type="email"
          placeholder="Enter email"
          v-model="email"
          required
        />
        <span> </span>
      </div>
      <div class="input-container">
        <input
          type="password"
          placeholder="Enter password"
          v-model="password"
          required
        />
        <p v-if="errMsg" class="err-mgs">{{ errMsg }}</p>
      </div>
      <button type="submit" class="submit">Sign in</button>

      <p class="signup-link">
        No account?
        <router-link to="/register">Sign up</router-link>
      </p>
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
