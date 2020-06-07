<template>
  <div>
    {{ story.title }}
    <p>
      {{ story.content }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
import Jsona from "jsona";
const dataFormatter = new Jsona();

export default {
  name: "StoryView",
  data() {
    return {
      story: {}
    };
  },
  mounted() {
    axios
      .get(
        `https://dev.aliflearning.co/api/v1/stories/${this.$route.params.storyId}`
      )
      .then(response => {
        this.story = dataFormatter.deserialize(response.data);
      });
  }
};
</script>
