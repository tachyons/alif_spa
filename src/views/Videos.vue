<template>
  <div class="subjects">
    <VideosList />
  </div>
</template>

<script>
// @ is an alias to /src
import VideosList from "@/components/VideosList.vue";

export default {
  name: "Videos",
  components: {
    VideosList
  }
};
</script>
