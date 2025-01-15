<template>
  <div class="flex flex-col min-h-screen">
    <!-- Conditionally render NavBar -->
    <NavBar v-if="showNavBar" />

    <!-- Main Content -->
    <main :class="mainContentClass">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue'; // Ensure this path is correct

const route = useRoute();

// Show NavBar only on /dentist/* and /nephrologist/* routes
const showNavBar = computed(() => {
  return (
    route.path.startsWith('/dentist/') ||
    route.path.startsWith('/nephrologist/')
  );
});

// Conditionally apply margin-top to main content
const mainContentClass = computed(() => {
  return showNavBar.value
    ? 'flex-grow  2xl:mt-1 3xl:mt-18 4xl:mt-10 5xl:mt-24'
    : 'flex-grow';
});
</script>