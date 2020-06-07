<template>
  <div class="w-full h-screen">
    <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
    <section
      id="bottom-navigation"
      class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
    >
      <div id="tabs" class="flex justify-between">
        <a
          href="#/"
          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
        >
          <img
            src="@/assets/icons/home.svg"
            width="50"
            height="50"
            class="justify-center"
          />
          <span class="tab tab-home block text-xs">Home</span>
        </a>

        <a
          href="#/stories"
          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
        >
          <img
            src="@/assets/icons/stories.svg"
            width="50"
            height="50"
            class="justify-center"
          />
          <span class="tab tab-home block text-xs">Stories</span>
        </a>
        <a
          href="#/videos"
          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
        >
          <img
            src="@/assets/icons/videos.svg"
            width="50"
            height="50"
            class="justify-center"
          />
          <span class="tab tab-home block text-xs">Videos</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BottomNavigation",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
