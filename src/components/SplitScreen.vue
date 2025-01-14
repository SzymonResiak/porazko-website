<template>
  <div class="flex h-screen font-sans">
    <!-- Dentist Side -->
    <div
      class="flex-1 relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group"
      @mouseenter="expandDentist"
      @mouseleave="reset"
      @click="handleClick('dentist')"
    >
      <img
        src="../assets/images/dentist-placeholder.jpg"
        alt="Dentist"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-500 ease-in-out"
      >
        <h2 class="responsive-text font-bold text-white opacity-90">
          Dentysta
        </h2>
        <h3 class="responsive-subtext text-white mt-2 opacity-90">
          lek. med. Justyna Porażko
        </h3>
        <div
          v-if="showTapHint && isMobile"
          class="absolute bottom-8 text-white text-sm animate-tap-hint"
        >
          Tap to explore
        </div>
      </div>
    </div>

    <!-- Nephrologist Side -->
    <div
      class="flex-1 relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group"
      @mouseenter="expandNephrologist"
      @mouseleave="reset"
      @click="handleClick('nephrologist')"
    >
      <img
        src="../assets/images/nephrologist-placeholder.jpg"
        alt="Nephrologist"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-500 ease-in-out"
      >
        <h2 class="responsive-text font-bold text-white opacity-90">
          Nefrolog
        </h2>
        <h3 class="responsive-subtext text-white mt-2 opacity-90">
          dr. n. med. Tomasz Porażko
        </h3>
        <div
          v-if="showTapHint && isMobile"
          class="absolute bottom-8 text-white text-sm animate-tap-hint"
        >
          Tap to explore
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';

const router = useRouter();

const showTapHint = ref(false);

// Reactive reference for determining if the device is mobile
const isMobile = ref(false);

// Update the isMobile ref based on orientation and window size
const updateIsMobile = () => {
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  const isLandscape = window.matchMedia('(orientation: landscape)').matches;

  if (isPortrait) {
    isMobile.value = window.innerWidth <= 1024;
  } else if (isLandscape) {
    isMobile.value = window.innerHeight <= 1024;
  } else {
    isMobile.value = false;
  }
};

// Watch for changes in window size and orientation
watch(
  () => [window.innerWidth, window.innerHeight, window.orientation],
  updateIsMobile,
  { immediate: true }
);

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

  // Force a reflow to pre-render transitions on desktop
  if (!isMobile.value) {
    const dentistSide = document.querySelector('.flex-1:first-child');
    const nephrologistSide = document.querySelector('.flex-1:last-child');

    // Trigger reflow by accessing offsetHeight
    void dentistSide.offsetHeight;
    void nephrologistSide.offsetHeight;
  }
});

onUnmounted(() => {
  clearInterval(animationInterval);
});

const expandDentist = () => {
  if (!isMobile.value) {
    // Only apply hover effect on desktop
    const dentistSide = document.querySelector('.flex-1:first-child');
    const nephrologistSide = document.querySelector('.flex-1:last-child');

    dentistSide.classList.add('flex-grow');
    nephrologistSide.classList.add('flex-shrink', 'brightness-80');

    // Reduce opacity of the opposite side's text
    const nephrologistText = nephrologistSide.querySelectorAll('h2, h3');
    nephrologistText.forEach((el) => el.classList.add('opacity-75'));
  }
};

const expandNephrologist = () => {
  if (!isMobile.value) {
    // Only apply hover effect on desktop
    const dentistSide = document.querySelector('.flex-1:first-child');
    const nephrologistSide = document.querySelector('.flex-1:last-child');

    nephrologistSide.classList.add('flex-grow');
    dentistSide.classList.add('flex-shrink', 'brightness-80');

    // Reduce opacity of the opposite side's text
    const dentistText = dentistSide.querySelectorAll('h2, h3');
    dentistText.forEach((el) => el.classList.add('opacity-75'));
  }
};

const reset = () => {
  if (!isMobile.value) {
    // Only apply hover effect on desktop
    const dentistSide = document.querySelector('.flex-1:first-child');
    const nephrologistSide = document.querySelector('.flex-1:last-child');

    dentistSide.classList.remove('flex-grow', 'flex-shrink', 'brightness-80');
    nephrologistSide.classList.remove(
      'flex-grow',
      'flex-shrink',
      'brightness-80'
    );

    // Reset opacity of all text
    const allText = document.querySelectorAll('h2, h3');
    allText.forEach((el) => el.classList.remove('opacity-75'));
  }
};

const handleClick = (option) => {
  const chosenSide =
    option === 'dentist'
      ? document.querySelector('.flex-1:first-child')
      : document.querySelector('.flex-1:last-child');
  const otherSide =
    option === 'dentist'
      ? document.querySelector('.flex-1:last-child')
      : document.querySelector('.flex-1:first-child');

  if (isMobile.value) {
    chosenSide.classList.add('flex-grow-mobile');
    otherSide.classList.add('flex-shrink-mobile', 'brightness-80');

    // Reduce opacity of the opposite side's text
    const otherText = otherSide.querySelectorAll('h2, h3');
    otherText.forEach((el) => el.classList.add('opacity-75'));

    // Wait for the transition to complete (300ms), then route
    setTimeout(() => {
      if (option === 'dentist') {
        router.push('/dentist/about');
      } else {
        router.push('/nephrologist/about');
      }
    }, 300);
  } else {
    // Desktop behavior: Fade out text, shrink to 0%, expand to 100%, and route after delay
    const otherText = otherSide.querySelectorAll('h2, h3');
    otherText.forEach((el) => el.classList.add('opacity-0')); // Fade out text
    otherSide.classList.add('flex-none'); // Shrink to 0%

    // Expand the chosen side to 100%
    chosenSide.classList.add('flex-full');

    // Wait for the chosen side to fully expand (500ms animation) + 300ms delay, then route
    setTimeout(() => {
      if (option === 'dentist') {
        router.push('/dentist/about');
      } else {
        router.push('/nephrologist/about');
      }
    }, 800);
  }
};
</script>

<style scoped>
/* Mobile-specific transitions (300ms) */
.flex-grow-mobile {
  flex: 51.25; /* 51.25% width (1.25% expand) */
  transition: flex 0.3s ease-in-out, filter 0.3s ease-in-out;
}

.flex-shrink-mobile {
  flex: 48.75;
  transition: flex 0.3s ease-in-out, filter 0.3s ease-in-out;
}

/* Desktop-specific transitions */
.flex-grow {
  flex: 50.5;
  transition: flex 0.5s ease-in-out, filter 0.5s ease-in-out;
}

.flex-shrink {
  flex: 49.5;
  transition: flex 0.5s ease-in-out, filter 0.5s ease-in-out;
}

.flex-full {
  flex: 100%;
  transition: flex 0.5s ease-in-out, filter 0.5s ease-in-out;
}

.flex-none {
  flex: 0%;
  transition: flex 0.5s ease-in-out, filter 0.5s ease-in-out;
}

.responsive-text {
  font-size: clamp(1rem, 5vw, 3rem);
  transition: opacity 0.3s ease-in-out;
}

.responsive-subtext {
  font-size: clamp(0.75rem, 3.5vw, 1.5rem);
  transition: opacity 0.3s ease-in-out;
}

.opacity-0 {
  opacity: 0;
}

@keyframes tap-hint {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* For mobile-specific behaviors */
@media (max-width: 1024px) {
  .tap-effect:active {
  }
}

/* For landscape orientation on mobile */
@media (max-width: 1024px) and (orientation: landscape) {
  .tap-effect:active {
  }
}

.animate-tap-hint {
  animation: tap-hint 3s ease-in-out infinite;
}
</style>
