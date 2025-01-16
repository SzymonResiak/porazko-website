<template>
  <div class="flex h-screen font-sans no-select">
    <!-- Side Component -->
    <Side
      v-for="side in sides"
      :key="side.id"
      :side="side"
      :is-hovered="isHovered"
      :hovered-side="hoveredSide"
      :is-clicked="isClicked"
      :clicked-side="clickedSide"
      :is-mobile="isMobile"
      :show-tap-hint="showTapHint"
      @hover="handleHover"
      @click="handleClick"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import Side from './Side.vue';

const router = useRouter();

// Reactive state
const showTapHint = ref(false);
const isMobile = ref(false);
const isHovered = ref(false);
const hoveredSide = ref(null);
const isClicked = ref(false);
const clickedSide = ref(null);

// Side data
const sides = [
  {
    id: 'dentist',
    image: new URL('../assets/images/dentist-placeholder.jpg', import.meta.url)
      .href,
    title: 'Dentysta',
    subtitle: 'lek. stom. Justyna Porażko',
    route: '/dentist/about',
  },
  {
    id: 'nephrologist',
    image: new URL(
      '../assets/images/nephrologist-placeholder.jpg',
      import.meta.url
    ).href,
    title: 'Nefrolog',
    subtitle: 'dr. n. med. Tomasz Porażko',
    route: '/nephrologist/about',
  },
];

// Update the isMobile ref based on window width
const updateIsMobile = () => {
  const mobileBreakpoint = 768;
  isMobile.value = window.innerWidth <= mobileBreakpoint;
};

// Watch for changes in window size
watch(() => window.innerWidth, updateIsMobile, { immediate: true });

// Add event listener for window resize
window.addEventListener('resize', updateIsMobile);

let animationInterval;

const startAnimation = () => {
  animationInterval = setInterval(() => {
    showTapHint.value = true;
    setTimeout(() => {
      showTapHint.value = false;
    }, 3000);
  }, 5000);
};

onMounted(() => {
  updateIsMobile();
  if (isMobile.value) startAnimation();
});

onUnmounted(() => {
  clearInterval(animationInterval);
});

// Handle hover effect
const handleHover = (side) => {
  if (!isMobile.value && !isClicked.value) {
    isHovered.value = true;
    hoveredSide.value = side;
  }
};

// Reset hover effect
const resetHover = () => {
  if (!isMobile.value && !isClicked.value) {
    isHovered.value = false;
    hoveredSide.value = null;
  }
};

// Handle click effect
const handleClick = (side) => {
  isClicked.value = true;
  clickedSide.value = side;

  if (isMobile.value) {
    // Mobile behavior: Expand chosen side by 1%, shrink other side by 1%s and route after delay
    setTimeout(() => {
      router.push(sides.find((s) => s.id === side).route);
    }, 300);
  } else {
    // Desktop behavior: Expand chosen side to 100%, shrink other side to 0% and route after delay
    setTimeout(() => {
      router.push(sides.find((s) => s.id === side).route);
    }, 800);
  }
};
</script>

<style>
/* Disable text selection */
.no-select {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard syntax */
}
</style>
