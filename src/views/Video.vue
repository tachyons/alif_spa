<template>
  <div class="video">
    <VideoView />
  </div>
</template>

<script>
// @ is an alias to /src
import VideoView from "@/components/VideoView.vue";

export default {
  name: "Story",
  components: {
    VideoView
  }
};
</script>
