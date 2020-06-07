<template>
  <div class="subjects">
    <StoriesList />
  </div>
</template>

<script>
// @ is an alias to /src
import StoriesList from "@/components/StoriesList.vue";

export default {
  name: "Stories",
  components: {
    StoriesList
  }
};
</script>
