<template>
  <div class="container-fluid px-5">
    <hr class="featurette-divider" />

    <div class="row featurette py-5">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          FUTURE FULLSTACK
          <span class="text-muted"></span>
        </h2>
        <p class="lead">
          I love to see how the complex systems are working well. I really
          curious on how this kind of systems operates from low level to high
          level
        </p>
      </div>
      <div class="col-md-5">
        <img
          src="/assets/profile2.jpg"
          class="rounded float-left"
          alt="..."
          style="width:400px; height:500px;"
        />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">
          RUNNER
          <span class="text-muted"></span>
        </h2>
        <p class="lead">
          Life as a programmer means that you exposed yourself to many kinds of
          disease because all you do just sit on the chair and coding for 8
          hours. Running can help you to eliminate this
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          src="/assets/runner.jpg"
          class="rounded float-right"
          alt="..."
          style="width:400px; height:500px;"
        />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          Like to do hards things <span class="text-muted"></span>
        </h2>
        <p class="lead">
          uring my internship at LocalHost Sdn bhd, Seksyen 15 Shah Alam. I was
          exposed by my supervisor to do things that I never do before and it
          was the hard one. In the end, that kind of experience that I learned
          helped me to be a fast learner and growth me to be someone that hard
          to give up
        </p>
      </div>
      <div class="col-md-5">
        <img
          src="/assets/profile4.jpg"
          class="rounded float-left"
          alt="..."
          style="width:400px; height:500px;"
        />
      </div>
    </div>

    <hr class="featurette-divider" />
  </div>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style scoped>
img {
  transition: 1s;
  transform: rotate(-9deg);
}

img:hover {
  transform: scale(1.05);
  background: white;
  color: black;
  box-shadow: 2px 7px 12px 1px grey;
  transform: rotate(0deg);
}
</style>
