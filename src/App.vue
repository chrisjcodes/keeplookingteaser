<template>
  <div id="app">
    <div id="logo" />
    <CountDown />
  </div>
</template>

<script>
import CountDown from "./components/CountDown.vue";

export default {
  name: "App",
  components: {
    CountDown,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

#app {
  font-family: "Bebas Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

@keyframes fadeinout {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.15;
  }
  100% {
    opacity: 0;
  }
}

#logo {
  opacity: 0;
  animation-name: fadeinout;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
  background-image: url("./assets/logo.png");
  background-repeat: none;
  background-size: contain;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -9999;
}
</style>
