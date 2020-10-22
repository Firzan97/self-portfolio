-<template>
  <div>
    <ProjectCompleted />
    <Skills />
  </div>
</template>

<script>
import ProjectCompleted from "../components/ProjectCompleted.vue";
import Skills from "../components/Skills.vue";
export default {
  name: "Profile",
  components: {
    ProjectCompleted,
    Skills,
  },
};
</script>

<style scoped></style>
