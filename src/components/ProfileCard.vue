-<template>
  <div class=" a container d-flex justify-content-end">
    <div class="row">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">feel boring reading my portfolio?</h5>
          <p class="card-text">
            Lets read my blog for something interesting.
          </p>
          <a href="http://www.hukaloh.online" class="btn btn-primary"
            >My Blog</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
};
</script>

<style scoped>
.container {
  background-image: url("../assets/profile2.jpg");
  flex: none;
  height: 300px;
}
</style>
