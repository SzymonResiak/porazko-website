<template>
  <nav
    class="fixed top-0 left-0 w-full bg-white shadow-md no-select"
    :class="navHeightClass"
  >
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
            'text-gray-800 opacity-80 hover:text-black hover:opacity-100':
              !isActive(link.path),
            navRouteLinkClass,
          }"
        >
          <span class="font-bold invisible">{{ link.label }}</span>
          <span
            class="absolute"
            :class="{
              'font-bold': isActive(link.path),
              'font-normal': !isActive(link.path),
              'text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl': true,
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
          class="flex items-center justify-center p-1 rounded-md transition-all duration-200"
          :class="navBackButtonClass"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-6 2xl:w-6 3xl:h-8 3xl:w-8 4xl:h-10 4xl:w-10 5xl:h-12 5xl:w-12"
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
const navHeightClass =
  'h-8 sm:h-10 md:h-12 lg:h-12 xl:h-14 2xl:h-14 3xl:h-18 4xl:h-24 5xl:h-32';

const navGapClass =
  'gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 3xl:gap-24 4xl:gap-32 5xl:gap-64';

const navWidthClass =
  'w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] 3xl:w-[60%] 4xl:w-[55%] 5xl:w-[50%]';

const navRouteLinkClass =
  'text-xs sm:text-sm md:text-base lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl !important';

const navBackButtonClass =
  'h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 3xl:h-20 3xl:w-20 4xl:h-32 4xl:w-32 5xl:h-48 5xl:w-48';
</script>
