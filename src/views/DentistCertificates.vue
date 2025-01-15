<template>
  <div>
    <NavBar />
    <div
      class="container mx-auto px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28 2xl:px-20 2xl:py-32 3xl:px-24 3xl:py-36 4xl:px-28 4xl:py-40 5xl:px-32 5xl:py-44"
      ref="container"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Certificate Cards -->
        <div class="bg-white rounded-lg shadow-lg p-8 4xl:p-12 5xl:p-16 w-full">
          <img
            src="../assets/images/certificate-1.png"
            alt="Certificate 1"
            class="rounded-lg mb-6 4xl:mb-8 5xl:mb-10"
          />
          <h2 class="text-3xl font-bold mb-4 4xl:text-4xl 5xl:text-5xl">
            Advanced Cosmetic Dentistry
          </h2>
          <p class="text-xl text-gray-700 4xl:text-2xl 5xl:text-4xl">
            Awarded by the American Academy of Cosmetic Dentistry.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8 4xl:p-12 5xl:p-16 w-full">
          <img
            src="../assets/images/certificate-2.png"
            alt="Certificate 2"
            class="rounded-lg mb-6 4xl:mb-8 5xl:mb-10"
          />
          <h2 class="text-3xl font-bold mb-4 4xl:text-4xl 5xl:text-5xl">
            Dental Implantology
          </h2>
          <p class="text-xl text-gray-700 4xl:text-2xl 5xl:text-4xl">
            Certified by the International Congress of Oral Implantologists.
          </p>
        </div>
        <!-- Additional certificates -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';

// Reference for the container element
const container = ref(null);

// Dynamic styles based on container width
const getDynamicStyles = computed(() => {
  if (!container.value) return {};
  const containerWidth = container.value.offsetWidth;

  // Return dynamic styles based on the container width
  if (containerWidth >= 3840) {
    // For 5K or larger
    return { padding: '24px' };
  } else if (containerWidth >= 2560) {
    // For 4K
    return { padding: '20px' };
  } else {
    return { padding: '16px' };
  }
});

// Adjust text size based on the container width for h2 and p
const getDynamicTextStyles = computed(() => {
  if (!container.value) return {};
  const containerWidth = container.value.offsetWidth;

  // Font sizes based on container size (larger screens need bigger font)
  if (containerWidth >= 3840) {
    // For 5K or larger
    return { fontSize: '2.5rem' }; // Adjust as needed for 5K
  } else if (containerWidth >= 2560) {
    // For 4K
    return { fontSize: '2rem' }; // Adjust as needed for 4K
  } else {
    return { fontSize: '1.5rem' }; // For smaller screens
  }
});

// Classes for h2 and p tags
const h2Class = computed(() => {
  return container.value && container.value.offsetWidth >= 3840
    ? 'text-5xl'
    : container.value && container.value.offsetWidth >= 2560
    ? 'text-4xl'
    : 'text-3xl';
});

const pClass = computed(() => {
  return container.value && container.value.offsetWidth >= 3840
    ? 'text-4xl'
    : container.value && container.value.offsetWidth >= 2560
    ? 'text-3xl'
    : 'text-xl';
});

onMounted(() => {
  // Ensure dynamic adjustments are calculated once mounted
  if (container.value) {
    console.log(container.value.offsetWidth); // Debug container width
  }
});
</script>
