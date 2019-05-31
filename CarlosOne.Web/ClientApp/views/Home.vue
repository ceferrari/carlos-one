<template>
  <div class="home">
    <img alt="Vue logo" src="require(assets/img/logo.png)" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "components/app-root.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
