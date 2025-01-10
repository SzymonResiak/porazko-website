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
import { ref, onMounted, onUnmounted, computed } from 'vue';

const router = useRouter();

const showTapHint = ref(false);
const isMobile = computed(() => window.innerWidth < 768); // Check if the device is mobile

let animationInterval;

const startAnimation = () => {
  animationInterval = setInterval(() => {
    // Show the tap hint
    showTapHint.value = true;

    // Hide the tap hint after 3 seconds
    setTimeout(() => {
      showTapHint.value = false;
    }, 3000); // Animate for 3 seconds
  }, 5000); // Repeat every 5 seconds (3s animation + 2s pause)
};

onMounted(() => {
  if (isMobile.value) {
    // Only start animation on mobile
    startAnimation();
  }

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
    // Mobile behavior: Apply 1.25% expand/shrink and opacity changes, then route after 300ms
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
    }, 300); // Wait for the transition to complete
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
    }, 800); // 500ms (animation) + 300ms (delay)
  }
};
</script>

<style scoped>
/* Mobile-specific transitions (300ms) */
.flex-grow-mobile {
  flex: 51.25; /* 51.25% width (1.25% expand) */
  transition: flex 0.3s ease-in-out, filter 0.3s ease-in-out; /* Smooth transition (300ms) */
}

.flex-shrink-mobile {
  flex: 48.75; /* 48.75% width (1.25% shrink) */
  transition: flex 0.3s ease-in-out, filter 0.3s ease-in-out; /* Smooth transition (300ms) */
}

/* Desktop-specific transitions */
.flex-grow {
  flex: 50.5; /* 50.5% width (0.5% expand) */
  transition: flex 0.5s ease-in-out, filter 0.5s ease-in-out; /* Smooth transition (500ms) */
}

.flex-shrink {
  flex: 49.5; /* 49.5% width (0.5% shrink) */
  transition: flex 0.5s ease-in-out, filter 0.5s ease-in-out; /* Smooth transition (500ms) */
}

.flex-full {
  flex: 100%; /* 100% width */
  transition: flex 0.5s ease-in-out, filter 0.5s ease-in-out; /* Smooth transition (500ms) */
}

.flex-none {
  flex: 0%; /* 0% width */
  transition: flex 0.5s ease-in-out, filter 0.5s ease-in-out; /* Smooth transition (500ms) */
}

.responsive-text {
  font-size: clamp(
    1rem,
    5vw,
    3rem
  ); /* Scales between 1rem and 3rem based on 5% of viewport width */
  transition: opacity 0.3s ease-in-out; /* Smooth text fade-out (300ms) */
}

.responsive-subtext {
  font-size: clamp(
    0.75rem,
    3.5vw,
    1.5rem
  ); /* Scales between 0.75rem and 1.5rem based on 3.5% of viewport width */
  transition: opacity 0.3s ease-in-out; /* Smooth text fade-out (300ms) */
}

.opacity-0 {
  opacity: 0; /* Fully transparent */
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

.animate-tap-hint {
  animation: tap-hint 3s ease-in-out infinite; /* Infinite loop for the animation */
}
</style>
