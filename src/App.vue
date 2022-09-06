<template>
  <!-- <nav> -->
  <NavBar />
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/css">css</router-link>|
    <router-link to="/js">js</router-link>|
    <router-link to="/games">games</router-link>| -->
  <!-- </nav> -->
  <router-view />
</template>

<script>
/* eslint-disable */
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {};
  },
};
</script>
