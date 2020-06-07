<template>
  <div class="subjects">
    <SubjectList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import SubjectList from "@/components/SubjectList.vue";

export default {
  name: "Subjects",
  components: {
    SubjectList
  }
};
</script>
