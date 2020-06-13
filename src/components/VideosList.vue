<template>
  <div class="container flex mx-auto w-full items-center justify-center">
    <ul class="flex flex-col bg-gray-300 p-4">
      <li
        class="border-gray-400 flex flex-row mb-2"
        v-for="video in videos"
        :key="video.id"
      >
        <router-link
          :to="{ name: 'Video', params: { videoId: video.id } }"
          class="w-full"
        >
          <div
            class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4"
            >
              📼
            </div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">{{ video.name }}</div>
              <div class="text-gray-600 text-sm">
                {{ 1 }}
              </div>
            </div>
            <div class="text-gray-600 text-xs">1:00 PM</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Jsona from "jsona";
const dataFormatter = new Jsona();

export default {
  name: "VideoList",
  data() {
    return {
      videos: []
    };
  },
  mounted() {
    axios.get("https://dev.aliflearning.co/api/v1/videos").then(response => {
      this.videos = dataFormatter.deserialize(response.data);
    });
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
