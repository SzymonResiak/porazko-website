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
            src="../assets/images/teeth-whitening.png"
            alt="Teeth Whitening"
            class="rounded-lg mb-6 4xl:mb-8 5xl:mb-10"
          />
          <h2 class="text-3xl font-bold mb-4 4xl:text-4xl 5xl:text-5xl">
            Teeth Whitening
          </h2>
          <p class="text-xl text-gray-700 4xl:text-2xl 5xl:text-4xl">
            Achieve a brighter smile with our professional teeth whitening
            services.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8 4xl:p-12 5xl:p-16 w-full">
          <img
            src="../assets/images/dental-implants.png"
            alt="Dental Implants"
            class="rounded-lg mb-6 4xl:mb-8 5xl:mb-10"
          />
          <h2 class="text-3xl font-bold mb-4 4xl:text-4xl 5xl:text-5xl">
            Dental Implants
          </h2>
          <p class="text-xl text-gray-700 4xl:text-2xl 5xl:text-4xl">
            Restore your smile with durable and natural-looking dental implants.
          </p>
        </div>
        <!-- Additional Service Cards here if needed -->
      </div>
    </div>
  </div>
</template>
