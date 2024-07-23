<template>
  <div>
    <Navbar />
    <router-view class="body"></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  name: "App",
  components: {
    Navbar,
  }

};

</script>

<style scoped>
.body {
  padding: 40px;
}
</style>