<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-md">
    <div class="container mx-auto flex items-center justify-between h-16 px-4">
      <!-- Logo or Back to Home -->
      <router-link to="/" class="text-xl font-bold text-gray-800"
        >Logo</router-link
      >

      <!-- Dynamic Links -->
      <div class="flex space-x-4">
        <template v-if="isDentistRoute">
          <router-link
            to="/dentist/about"
            class="text-gray-800 hover:text-green-500"
            >About</router-link
          >
          <router-link
            to="/dentist/services"
            class="text-gray-800 hover:text-green-500"
            >Services</router-link
          >
          <router-link
            to="/dentist/certificates"
            class="text-gray-800 hover:text-green-500"
            >Certificates</router-link
          >
        </template>
        <template v-if="isNephrologistRoute">
          <router-link
            to="/nephrologist/about"
            class="text-gray-800 hover:text-blue-500"
            >About</router-link
          >
          <router-link
            to="/nephrologist/services"
            class="text-gray-800 hover:text-blue-500"
            >Services</router-link
          >
          <router-link
            to="/nephrologist/certificates"
            class="text-gray-800 hover:text-blue-500"
            >Certificates</router-link
          >
        </template>
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
</script>
