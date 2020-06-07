<template>
  <div class="container flex mx-auto w-full items-center justify-center">
    <ul class="flex flex-col bg-gray-300 p-4">
      <li
        class="border-gray-400 flex flex-row mb-2"
        v-for="story in stories"
        :key="story.id"
      >
        <router-link :to="{ name: 'Story', params: { storyId: story.id } }">
          <div
            class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4"
            >
              📚
            </div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">{{ story.title }}</div>
              <div class="text-gray-600 text-sm">
                {{ story.conent }}
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
  name: "StoriesList",
  data() {
    return {
      stories: []
    };
  },
  mounted() {
    axios.get("https://dev.aliflearning.co/api/v1/stories").then(response => {
      this.stories = dataFormatter.deserialize(response.data);
    });
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
