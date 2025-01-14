<template>
  <nav
    class="fixed top-0 left-0 w-full bg-white shadow-md"
    :class="navHeightClass"
  >
    <div class="flex items-center h-full pl-[5%]">
      <!-- Router Links (Left Side, dynamic width and gap based on screen size) -->
      <div class="flex" :class="[navWidthClass, navGapClass]">
        <template v-if="isDentistRoute">
          <router-link
            v-for="link in dentistLinks"
            :key="link.path"
            :to="link.path"
            class="flex items-center justify-center text-center opacity-80 transition-all duration-200 min-w-0"
            :class="{ 'opacity-100 font-bold': isActive(link.path) }"
          >
            <span :class="navLinkClass">{{ link.label }}</span>
          </router-link>
        </template>

        <template v-if="isNephrologistRoute">
          <router-link
            v-for="link in nephrologistLinks"
            :key="link.path"
            :to="link.path"
            class="flex items-center justify-center text-center opacity-80 transition-all duration-200 min-w-0"
            :class="{ 'opacity-100 font-bold': isActive(link.path) }"
          >
            <span :class="navLinkClass">{{ link.label }}</span>
          </router-link>
        </template>
      </div>

      <!-- Logo (Right Side, 5% from the edge) -->
      <div class="absolute right-[5%] flex items-center justify-center">
        <router-link to="/" :class="logoClass"> Logo/Back </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isDentistRoute = computed(() => route.path.startsWith('/dentist/'));

const isNephrologistRoute = computed(() =>
  route.path.startsWith('/nephrologist/')
);

// Check if a link is active
const isActive = (path) => route.path === path;

// Computed property for the navigation height class
const navHeightClass = computed(() => {
  return `
    h-[10vh]
    mobile:h-[3vh]
    tablet:h-[3.5vh]
    laptop:h-[3vh]
    desktop:h-[4vh]
    xl-desktop:h-[3.5vh]  // Standard height for large desktop
    mobile-landscape:h-[6vh]  // Mobile landscape height (shorter height)
    tablet-landscape:h-[5vh]  // Tablet landscape height
    laptop-landscape:h-[4.5vh]  // Laptop landscape height
    desktop-landscape:h-[4.5vh]  // Desktop landscape height
    xl-desktop-landscape:h-[3.5vh]  // Large desktop landscape height
  `;
});

const navGapClass = computed(() => {
  return `
    gap-2
    mobile:gap-4
    tablet:gap-5
    laptop:gap-6
    desktop:gap-7
    xl-desktop:gap-8
    mobile-landscape:gap-7
    tablet-landscape:gap-8
    laptop-landscape:gap-9
    desktop-landscape:gap-10
    xl-desktop-landscape:gap-12
  `;
});

const navWidthClass = computed(() => {
  return `
    w-[90%]
    mobile:w-[80%]
    tablet:w-[75%]
    laptop:w-[70%]
    desktop:w-[65%]
    xl-desktop:w-[60%]
    mobile-landscape:w-[85%]
    tablet-landscape:w-[80%]
    laptop-landscape:w-[75%]
    desktop-landscape:w-[70%]
    xl-desktop-landscape:w-[65%]
  `;
});

const navLinkClass = computed(() => {
  return `
    whitespace-nowrap
    text-gray-800
    hover:text-black
    mr-[2vw]
    last:mr-0
    text-[4.5vw]  // Default text size for small screens
    mobile:text-[3vw]  // Mobile text size
    tablet:text-[2.5vw]  // Tablet text size
    laptop:text-[2.5vw]  // Laptop text size
    desktop:text-[2.5vw]  // Default for desktops
    xl-desktop:text-[2vw]  // Large desktop text size
    mobile-landscape:text-[2.5vw]  // Mobile landscape text size
    tablet-landscape:text-[1.5vw]  // Tablet landscape text size
    laptop-landscape:text-[1.5vw]  // Laptop landscape text size
    desktop-landscape:text-[1.5vw]  // Desktop landscape text size
    xl-desktop-landscape:text-[1vw]  // Large desktop landscape text size
  `;
});

const logoClass = computed(() => {
  return `
    font-bold
    text-gray-800
    hover:text-black
    text-[4.5vw]  // Default text size for logo on small screens
    mobile:text-[3vw]  // Mobile text size for logo
    tablet:text-[2.5vw]  // Tablet text size for logo
    laptop:text-[2.5vw]  // Laptop text size for logo
    desktop:text-[2.5vw]  // Default logo text size for large desktops
    xl-desktop:text-[2vw]  // Large desktop logo text size
    mobile-landscape:text-[2.5vw]  // Mobile landscape logo text size
    tablet-landscape:text-[1.5vw]  // Tablet landscape logo text size
    laptop-landscape:text-[1.5vw]  // Laptop landscape logo text size
    desktop-landscape:text-[1.5vw]  // Desktop landscape logo text size
    xl-desktop-landscape:text-[1vw]  // Large desktop landscape logo text size
  `;
});
</script>
