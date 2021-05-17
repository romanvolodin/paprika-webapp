<template>
  <div>
    <h2>{{ project.title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {
        title: "Project title",
      },
    };
  },
};
</script>
