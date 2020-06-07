<template>
  <div class="subjects">
    <ChaptersList />
  </div>
</template>

<script>
// @ is an alias to /src
import ChaptersList from "@/components/ChaptersList.vue";

export default {
  name: "Subjects",
  components: {
    ChaptersList
  }
};
</script>
