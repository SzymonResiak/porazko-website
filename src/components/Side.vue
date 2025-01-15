<template>
    <div
      :class="{
        'flex-[51%]': (isHovered && hoveredSide === side.id) || (isClicked && clickedSide === side.id && isMobile),
        'flex-[49%]': (isHovered && hoveredSide !== side.id) || (isClicked && clickedSide !== side.id && isMobile),
        'flex-full': isClicked && clickedSide === side.id && !isMobile,
        'flex-none': isClicked && clickedSide !== side.id && !isMobile,
      }"
      class="flex-1 relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group"
      @mouseenter="$emit('hover', side.id)"
      @mouseleave="$emit('hover', null)"
      @click="$emit('click', side.id)"
    >
      <!-- Image with zoom and center positioning -->
       <!-- TODO: after applying final images make sure they start at [right center, left center] and scale them to fix the shrinking side animation: shrink -> slide -->
      <div class="absolute inset-0 overflow-hidden">
        <img
          :src="side.image"
          :alt="side.title"
          class="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <!-- Overlay Content -->
      <div
        class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out"
      >
      <h2
        :class="{
          'opacity-0': isClicked && clickedSide !== side.id,
        }"
        class="font-bold text-white opacity-90 transition-opacity duration-300 ease-in-out mb-2 sm:mb-4 text-sm md:text-lg sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl"
      >
      {{ side.title }}
      </h2>

      <h3
        :class="{
          'opacity-0': isClicked && clickedSide !== side.id,
        }"
        class="text-white opacity-90 transition-opacity duration-300 ease-in-out mt-1 sm:mt-3 md:mt-4 lg:mt-4 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl"
      >
      {{ side.subtitle }}
      </h3>
        <div
          v-if="showTapHint && isMobile"
          class="absolute bottom-8 text-white text-sm animate-tap-hint"
        >
          Tap to explore
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    side: {
      type: Object,
      required: true,
    },
    isHovered: {
      type: Boolean,
      required: true,
    },
    hoveredSide: {
      type: String,
      default: null,
    },
    isClicked: {
      type: Boolean,
      required: true,
    },
    clickedSide: {
      type: String,
      default: null,
    },
    isMobile: {
      type: Boolean,
      required: true,
    },
    showTapHint: {
      type: Boolean,
      required: true,
    },
  });
  
  defineEmits(['hover', 'click']);
  </script>
  
  <style scoped>
  /* Custom animation for tap hint */
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
    animation: tap-hint 3s ease-in-out infinite;
  }
  
  .opacity-0 {
    opacity: 0 !important;
  }
  
  /* Custom flex classes for smooth transitions */
  .flex-full {
    flex: 1 1 100%;
    transition: flex 0.5s ease-in-out;
  }
  
  .flex-none {
    flex: 1 1 0%;
    transition: flex 0.5s ease-in-out;
  }
  </style>