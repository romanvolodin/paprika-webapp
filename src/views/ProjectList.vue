<template>
  <div>
    <h1>Project List</h1>
    <project-card
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import ProjectService from "@/services/ProjectService.js";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    ProjectService.getProjects()
      .then((response) => {
        response.data.forEach((project) => {
          let date = new Date(Date.parse(project.created_at));
          this.projects.push({
            id: project.id,
            title: project.title,
            date: date.toDateString(),
            time: date.toLocaleTimeString(),
          });
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>
