<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Home from "./components/Home.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Home
  }

};

</script>