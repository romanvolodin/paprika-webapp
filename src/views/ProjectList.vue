<template>
  <div>
    <h1>Project List</h1>
    <project-card />
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "Home",
  components: {
    ProjectCard,
  },
};
</script>
