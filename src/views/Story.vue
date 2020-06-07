<template>
  <div class="stories">
    <StoryView />
  </div>
</template>

<script>
// @ is an alias to /src
import StoryView from "@/components/StoryView.vue";

export default {
  name: "Story",
  components: {
    StoryView
  }
};
</script>
