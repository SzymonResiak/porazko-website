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
            src="../assets/images/certificate-4.png"
            alt="Certificate 4"
            class="rounded-lg mb-6 4xl:mb-8 5xl:mb-10"
          />
          <h2 class="text-3xl font-bold mb-4 4xl:text-4xl 5xl:text-5xl">
            Board Certification
          </h2>
          <p class="text-xl text-gray-700 4xl:text-2xl 5xl:text-4xl">
            Certified by the American Board of Internal Medicine.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8 4xl:p-12 5xl:p-16 w-full">
          <img
            src="../assets/images/certificate-5.png"
            alt="Certificate 5"
            class="rounded-lg mb-6 4xl:mb-8 5xl:mb-10"
          />
          <h2 class="text-3xl font-bold mb-4 4xl:text-4xl 5xl:text-5xl">
            Nephrology Fellowship
          </h2>
          <p class="text-xl text-gray-700 4xl:text-2xl 5xl:text-4xl">
            Completed fellowship at Johns Hopkins University.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8 4xl:p-12 5xl:p-16 w-full">
          <img
            src="../assets/images/certificate-6.png"
            alt="Certificate 6"
            class="rounded-lg mb-6 4xl:mb-8 5xl:mb-10"
          />
          <h2 class="text-3xl font-bold mb-4 4xl:text-4xl 5xl:text-5xl">
            Hypertension Specialist
          </h2>
          <p class="text-xl text-gray-700 4xl:text-2xl 5xl:text-4xl">
            Certified by the American Society of Hypertension.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>
