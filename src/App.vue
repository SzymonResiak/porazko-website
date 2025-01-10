<template>
  <div>
    <NavBar v-if="showNavBar" />
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';

const route = useRoute();

// Show NavBar only on /dentist/* and /nephrologist/* routes
const showNavBar = computed(() => {
  return (
    route.path.startsWith('/dentist/') ||
    route.path.startsWith('/nephrologist/')
  );
});
</script>
