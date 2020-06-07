<template>
  <div id="app">
    <router-view />
    <BottomNavigation/>
  </div>
</template>

<script>
// @ is an alias to /src
import BottomNavigation from "@/components/BottomNavigation.vue";

export default {
  name: "App",
  components: {
    BottomNavigation
  }
};
</script>
<style lang="scss"></style>
