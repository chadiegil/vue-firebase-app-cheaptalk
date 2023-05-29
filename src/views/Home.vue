<script setup>
import { ref, onMounted, computed } from "vue";
import { db } from "../firebase/init.js";
import { collection, getDocs } from "firebase/firestore";
import Spinner from "../components/Spinner.vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const posts = ref([]);
const isLoading = ref(true);
const selectedCat = ref("");
const currentPage = ref(1);
const pageSize = 5;
const router = useRouter();

const filteredPosts = computed(() => {
  return posts.value.filter((post) =>
    selectedCat.value === "all"
      ? true
      : post.category.includes(selectedCat.value)
  );
});

const pageCount = computed(() => {
  return Math.ceil(filteredPosts.value.length / pageSize);
});

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return filteredPosts.value.slice(startIndex, endIndex);
});

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const postsLocal = [];

  querySnapshot.forEach((doc) => {
    const post = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      category: doc.data().category,
      createdAt: doc.data().createdAt,
      userId: doc.data().userId,
    };
    postsLocal.push(post);
  });
  posts.value = postsLocal;
  isLoading.value = false;
});

const editPost = (id) => {
  router.push(`/edit/${id}`);
};

const deletePost = (id) => {
  router.push(`/delete/${id}`);
};

const setPage = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div class="div">
    <div class="search">
      <select
        name="category"
        id="category"
        v-model="selectedCat"
        class="search__input"
      >
        <option disabled value="">Select Category</option>
        <option value="all">All</option>
        <option v-for="post in posts" :value="post.category" :key="post.id">
          {{ post.category }}
        </option>
      </select>
    </div>
  </div>
  <div v-if="isLoading" class="center-spinner">
    <Spinner />
  </div>
  <div
    v-else
    v-for="post in paginatedPosts"
    :key="post.id"
    class="card-container"
  >
    <div class="card">
      <div class="container-btn">
        <button @click.prevent="editPost(post.id)">
          <Icon icon="mdi-light:pencil" width="20" color="green" />
        </button>
        <button @click.prevent="deletePost(post.id)">
          <Icon icon="mdi-light:delete" width="20" color="red" />
        </button>
      </div>
      <h3 class="card__title">{{ post.title }}</h3>
      <p class="card__content">{{ post.description }}</p>
      <p>category {{ post.category }}</p>
      <div class="card__date">{{ post.createdAt }}</div>
      <div class="card__arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="15"
          width="15"
        >
          <path
            fill="#fff"
            d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
  <div style="display: flex; justify-content: center; margin-top: -30px">
    <button
      v-for="page in pageCount"
      :key="page"
      @click="setPage(page)"
      :class="{ edit: page === currentPage, delete: page !== currentPage }"
      style="
        border-radius: 50%;
        width: 32px;
        height: 32px;
        border: none;
        color: white;
        margin: 2px;
        background-color: blue;
        margin-top: 20px;
      "
    >
      {{ page }}
    </button>
  </div>
</template>

<style scoped>
.container-btn {
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 10px;
}
.card-container {
  margin: 20px;
  border: 1px solid var(--primary-color);
}

.card {
  --border-radius: 0.75rem;
  --primary-color: #2980b9;
  --secondary-color: #3c3852;
  width: 100%;
  font-family: "Arial";
  padding: 1rem;
  cursor: pointer;
  border-radius: var(--border-radius);
  background: #dfdfe2;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
  position: relative;
  margin-bottom: 20px;
  margin-right: 20px;
}
.card > * + * {
  margin-top: 1.1em;
}

.card .card__content {
  color: var(--secondary-color);
  font-size: 0.86rem;
}

.card .card__title {
  padding: 0;
  font-size: 1.3rem;
  font-weight: bold;
}

.card .card__date {
  color: #6e6b80;
  font-size: 0.8rem;
}

.card .card__arrow {
  position: absolute;
  background: var(--primary-color);
  padding: 0.4rem;
  border-top-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  bottom: 0;
  right: 0;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card svg {
  transition: 0.2s;
}

/* hover */
.card:hover .card__title {
  color: var(--primary-color);
  text-decoration: underline;
}

.card:hover .card__arrow {
  background: #111;
}

.card:hover .card__arrow svg {
  transform: translateX(3px);
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px; /* Adjust the margin-top value to center the search box vertically */
}

.search__input {
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: box-shadow 0.3s ease;
}

.search__input:focus {
  outline: none;
  box-shadow: 0 0 5px #7257fa;
}

.filter {
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  margin-left: 20px;
}
</style>
