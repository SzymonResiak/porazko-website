import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DentistAbout from '../views/DentistAbout.vue';
import DentistServices from '../views/DentistServices.vue';
import DentistCertificates from '../views/DentistCertificates.vue';
import NephrologistAbout from '../views/NephrologistAbout.vue';
import NephrologistServices from '../views/NephrologistServices.vue';
import NephrologistCertificates from '../views/NephrologistCertificates.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/dentist/about', component: DentistAbout },
  { path: '/dentist/services', component: DentistServices },
  { path: '/dentist/certificates', component: DentistCertificates },
  { path: '/nephrologist/about', component: NephrologistAbout },
  { path: '/nephrologist/services', component: NephrologistServices },
  { path: '/nephrologist/certificates', component: NephrologistCertificates },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
