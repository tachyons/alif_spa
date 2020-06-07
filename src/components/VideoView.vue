<template>
  <div class="w-screen">
    {{ video.title }}
    <p>
      {{ video.content }}
    </p>
    <video
      :src="video.content_url"
      autoplay="autoplay"
      class="video-js"
      controls
      preload="auto"
      height="264"
      ref="videoPlayer"
    ></video>
  </div>
</template>

<script>
import axios from "axios";
import Jsona from "jsona";
import videojs from "video.js";
import "video.js/dist/video-js.css";
const dataFormatter = new Jsona();

export default {
  name: "VideoView",
  data() {
    return {
      video: {},
      player: null
    };
  },
  mounted() {
    axios
      .get(
        `https://dev.aliflearning.co/api/v1/videos/${this.$route.params.videoId}`
      )
      .then(response => {
        this.video = dataFormatter.deserialize(response.data);
      });
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>
