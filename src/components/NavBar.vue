<template>
  <nav
    class="fixed top-0 left-0 w-full bg-white shadow-md no-select p-4 3xl:p-6 z-50"
  >
    <div class="flex items-center h-full pl-[5%]">
      <!-- Router Links (Left Side) -->
      <div class="flex gap-4 3xl:gap-6 4xl:gap-10 5xl:gap-12">
        <router-link
          v-for="link in activeLinks"
          :key="link.path"
          :to="link.path"
          class="flex items-center justify-center text-center transition-all duration-300 min-w-0 text-base 2xl:text-2xl 3xl:text-3xl"
          :class="{
            'text-black opacity-100': isActive(link.path),
            'text-gray-800 opacity-80 hover:text-black hover:opacity-100':
              !isActive(link.path),
          }"
        >
          <span
            :class="{
              'font-bold': isActive(link.path),
              'font-normal': !isActive(link.path),
            }"
          >
            {{ link.label }}
          </span>
        </router-link>
      </div>

      <!-- Back Link (Right Side) -->
      <div class="absolute right-[5%] flex items-center justify-center">
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 sm:h-5 xl:h-6 xl:w-6 2xl:h-6 2xl:w-6 3xl:h-8 3xl:w-8 4xl:h-8 4xl:w-8 5xl:h-10 5xl:w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
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
const links = {
  dentist: [
    { path: '/dentist/about', label: 'About' },
    { path: '/dentist/services', label: 'Services' },
    { path: '/dentist/certificates', label: 'Certificates' },
  ],
  nephrologist: [
    { path: '/nephrologist/about', label: 'About' },
    { path: '/nephrologist/services', label: 'Services' },
    { path: '/nephrologist/certificates', label: 'Certificates' },
  ],
};

// Determine active links based on the current route
const activeLinks = computed(() => {
  if (route.path.startsWith('/dentist/')) return links.dentist;
  if (route.path.startsWith('/nephrologist/')) return links.nephrologist;
  return [];
});

const isActive = (path) => route.path === path;
</script>
