<template>
  <router-link
    :to="{ name: 'project-details', params: { project_id: project.id } }"
  >
    <div class="card mb-2">
      <div class="card-body">
        <div class="project-preview">
          <img
            class="project_preview_image"
            v-if="project.preview"
            :src="project.preview"
          />
        </div>
        <h4 class="card-title fw-bold">{{ project.title }}</h4>
        <span class="text-secondary" v-if="project.deadline">
          Дедлайн: {{ project.deadline.toDateString() }}
        </span>
        <span class="text-secondary" v-else> Дедлайн не указан. </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style>
a {
  color: inherit;
  text-decoration: none;
}
.card {
  background: #f8f9fa;
  cursor: pointer;
  color: inherit;
}
.card:hover {
  background: #e9ecef;
}
.project-preview {
  width: 100px;
  height: 100px;
  background: lightgray;
  overflow: hidden;
  border-radius: 50%;
}
.project_preview_image {
  width: 100%;
  height: 100%;
}
</style>
