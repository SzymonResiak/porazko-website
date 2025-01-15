<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-md no-select" :class="navHeightClass">
    <div class="flex items-center h-full pl-[5%]">
      <!-- Router Links (Left Side) -->
      <div class="flex" :class="[navWidthClass, navGapClass]">
        <router-link
          v-for="link in activeLinks"
          :key="link.path"
          :to="link.path"
          class="flex items-center justify-center text-center transition-all duration-300 min-w-0"
          :class="{
            'text-black opacity-100': isActive(link.path),
            'text-gray-800 opacity-80 hover:text-black hover:opacity-100': !isActive(link.path),
          }"
        >
          <span class="font-bold invisible">{{ link.label }}</span>
          <span
            class="absolute"
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
        <router-link
          to="/"
          class="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 transition-all duration-200"
          :class="logoClass"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
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

// Computed properties for dynamic classes
const navHeightClass = 'h-8 sm:h-8 md:h-8 lg:h-10 xl:h-10';
const navGapClass = 'gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-10';
const navWidthClass = 'w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%]';
const navLinkClass = 'whitespace-nowrap mr-2 last:mr-0 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base';
const logoClass = 'font-bold text-gray-800 hover:text-black text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base';
</script>

<style>
.no-select {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard syntax */
}
</style>