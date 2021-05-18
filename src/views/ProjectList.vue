<template>
  <div>
    <h1>Проекты</h1>
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
          let deadline;
          let created_at;
          if (project.deadline) {
            deadline = new Date(Date.parse(project.deadline));
          }
          if (project.created_at) {
            created_at = new Date(Date.parse(project.created_at));
          }
          this.projects.push({
            id: project.id,
            title: project.title,
            code: project.code,
            preview: project.preview,
            deadline: deadline,
            created_at: created_at,
            created_by: 1,
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
