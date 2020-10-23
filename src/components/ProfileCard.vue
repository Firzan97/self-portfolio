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
  background-image: url("https://hukaloh.online/wp-content/uploads/2020/03/photo6255639271742482733.jpg");
  flex: none;
  height: 300px;
  background-size: 70% 100%;
  width: 800px;
}
</style>
