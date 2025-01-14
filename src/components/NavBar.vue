<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-md">
    <div class="container mx-small flex items-center h-full">
      <!-- Router Links (Left Side, 40% width, starting at the left edge) -->
      <div class="w-[40%] flex pl-[5%]">
        <template v-if="isDentistRoute">
          <router-link
            v-for="link in dentistLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link-container"
            :class="{ 'active': isActive(link.path) }"
          >
            <span class="nav-link-text">{{ link.label }}</span>
          </router-link>
        </template>
        <template v-if="isNephrologistRoute">
          <router-link
            v-for="link in nephrologistLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link-container"
            :class="{ 'active': isActive(link.path) }"
          >
            <span class="nav-link-text">{{ link.label }}</span>
          </router-link>
        </template>
      </div>

      <!-- Logo (Right Side, 5% from the edge) -->
      <div class="absolute right-[5%]">
        <router-link to="/" class="logo-text">
          Logo/Back
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Define links for each route
const dentistLinks = [
  { path: '/dentist/about', label: 'About' },
  { path: '/dentist/services', label: 'Services' },
  { path: '/dentist/certificates', label: 'Certificates' },
];

const nephrologistLinks = [
  { path: '/nephrologist/about', label: 'About' },
  { path: '/nephrologist/services', label: 'Services' },
  { path: '/nephrologist/certificates', label: 'Certificates' },
];

// Check if the current route is a dentist or nephrologist route
const isDentistRoute = computed(() => route.path.startsWith('/dentist/'));
const isNephrologistRoute = computed(() => route.path.startsWith('/nephrologist/'));

// Check if a link is active
const isActive = (path) => route.path === path;
</script>

<style scoped>
/* Base styles for nav link containers */
.nav-link-container {
  @apply flex items-center justify-center text-center transition-all duration-200 opacity-80;
  min-width: 0; /* Allow text to shrink if necessary */
}

/* Active link styles */
.nav-link-container.active {
  @apply opacity-100 font-bold;
}

/* Base styles for nav link text */
.nav-link-text {
  @apply whitespace-nowrap text-gray-800 hover:text-black text-[2.5vw] md:text-[2vw] lg:text-[1.5vw];
  margin-right: 2vw; /* Add spacing between texts */
}

/* Remove margin from the last link */
.nav-link-container:last-child .nav-link-text {
  margin-right: 0;
}

/* Logo styles */
.logo-text {
  @apply text-[3vw] md:text-[2.5vw] lg:text-[2vw] font-bold text-gray-800 hover:text-black;
}

/* Ensure consistent height for the nav */
nav {
  height: 5vh; /* Default height for vertical view */
}

@media (orientation: landscape) {
  nav {
    height: 7vh; /* Height for horizontal view */
  }
}
</style>