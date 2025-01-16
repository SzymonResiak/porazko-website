<template>
  <div>
    <!-- Navbar should be fixed at the top -->
    <NavBar class="fixed top-0 left-0 w-full z-50" />
    <div
      class="container mx-auto px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28 2xl:px-20 2xl:py-32 3xl:px-24 3xl:py-36 4xl:px-28 4xl:py-40 5xl:px-32 5xl:py-44"
    >
      <div
        class="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-28 5xl:gap-32"
      >
        <!-- Dentist Image -->
        <div class="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
          <img
            src="../assets/images/dentist-about.png"
            alt="Dentist"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <!-- Dentist Information -->
        <div class="w-full lg:w-1/2 text-left relative">
          <h1
            class="text-3xl font-bold mb-10 sm:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-4xl 4xl:text-5xl 5xl:text-10xl text-left"
          >
            About Dr. Jane Doe
          </h1>
          <p
            class="text-lg text-gray-700 mb-4 sm:text-xl lg:text-1xl xl:text-2xl 2xl:text-3xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl leading-relaxed xl:leading-relaxed 2xl:leading-loose 3xl:leading-loose 4xl:leading-loose 5xl:leading-loose text-left"
          >
            Dr. Jane Doe is a highly skilled and compassionate dentist with over
            10 years of experience in general and cosmetic dentistry. She is
            dedicated to providing personalized care to her patients, ensuring
            their comfort and satisfaction.
          </p>
          <p
            class="text-lg text-gray-700 mb-4 sm:text-xl lg:text-1xl xl:text-2xl 2xl:text-3xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl leading-relaxed xl:leading-relaxed 2xl:leading-loose 3xl:leading-loose 4xl:leading-loose 5xl:leading-loose text-left"
          >
            Dr. Doe believes in a patient-centered approach, combining the
            latest dental technologies with a gentle touch to deliver
            exceptional results.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>
