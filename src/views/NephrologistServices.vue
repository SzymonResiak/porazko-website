<template>
  <div>
    <NavBar />
    <div
      class="container mx-auto px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28 2xl:px-20 2xl:py-32 3xl:px-24 3xl:py-36 4xl:px-28 4xl:py-40 5xl:px-32 5xl:py-44"
      ref="container"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Cards -->
        <div class="bg-white rounded-lg shadow-lg p-8 4xl:p-12 5xl:p-16 w-full">
          <img
            src="../assets/images/kidney-disease.png"
            alt="Kidney Disease"
            class="rounded-lg mb-6 4xl:mb-8 5xl:mb-10"
          />
          <h2 class="text-3xl font-bold mb-4 4xl:text-4xl 5xl:text-5xl">
            Chronic Kidney Disease
          </h2>
          <p class="text-xl text-gray-700 4xl:text-2xl 5xl:text-4xl">
            Comprehensive management of chronic kidney disease.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8 4xl:p-12 5xl:p-16 w-full">
          <img
            src="../assets/images/dialysis.png"
            alt="Dialysis"
            class="rounded-lg mb-6 4xl:mb-8 5xl:mb-10"
          />
          <h2 class="text-3xl font-bold mb-4 4xl:text-4xl 5xl:text-5xl">
            Dialysis
          </h2>
          <p class="text-xl text-gray-700 4xl:text-2xl 5xl:text-4xl">
            Expert care for patients requiring dialysis.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8 4xl:p-12 5xl:p-16 w-full">
          <img
            src="../assets/images/hypertension.png"
            alt="Hypertension"
            class="rounded-lg mb-6 4xl:mb-8 5xl:mb-10"
          />
          <h2 class="text-3xl font-bold mb-4 4xl:text-4xl 5xl:text-5xl">
            Hypertension
          </h2>
          <p class="text-xl text-gray-700 4xl:text-2xl 5xl:text-4xl">
            Specialized treatment for high blood pressure.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>
