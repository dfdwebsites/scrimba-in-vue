<template>
  <div id="nav" :class="['navbar-container', 'clicked', path]">
    <img className="nav-logo" src="@/assets/styles/img/logo.png" alt="logo" />
    <div id="navBtn" className="nav-toggle">
      <span className="hamburgerLine line1"></span>
      <span className="hamburgerLine line2"></span>
      <span className="hamburgerLine line3"></span>
    </div>
    <nav>
      <ul>
        <router-link to="/">Home</router-link>
        <router-link to="/css">Css</router-link>
        <router-link to="/js">Javascript</router-link>
        <router-link to="/games">Games</router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "NavBar",
  //   props: ["path"],
  computed: {
    path() {
      return this.$route.path === "/" ? "homepage" : "";
    },
  },
};
</script>
