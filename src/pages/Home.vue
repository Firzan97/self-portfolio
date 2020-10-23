-<template>
  <div>
    <div>
      <b-jumbotron
        style="background-image: url(https://hukaloh.online/wp-content/uploads/2020/03/photo6282989919836154229.jpg); background-size: 100%; height:50vh;"
        header="Firzan Azrai"
        lead="Life is a learning experience"
        class="text-black text-monospace"
      >
        <p>
          Future full stack developer that strives to be the best among the best
        </p>
        <b-button variant="warning" href="#"
          >Want to know more about me?</b-button
        >
      </b-jumbotron>
    </div>
    <div class="container">
      <h1>PORTFOLIO</h1>
      <h4>-- * --</h4>
      <div class="row">
        <div class="p-4" v-for="project in projects" :key="project.name">
          <b-card
            :title="project.name"
            :img-src="project.image"
            img-alt="Image"
            img-top
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              {{ project.description }}
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
    <Education />
    <ProfileCard />
  </div>
</template>

<script>
import Education from "../components/Education.vue";
import ProfileCard from "../components/ProfileCard.vue";
export default {
  name: "Home",
  components: {
    Education,
    ProfileCard,
  },
  data() {
    return {
      projects: [
        {
          image: "/assets/rocket.png",
          name: "Fast Learner",
          description:
            "I am very fast learner in learning a new technology that might be hard for the first time.",
          link: "https://github.com/Firzan97/dns_monitoring",
        },
        {
          image: "/assets/barchart.png",
          name: "Always productive",
          description:
            "I strives to be productive because I believe every hours is important in IT field",
          link: "https://github.com/Firzan97/dns_monitoring",
        },
        {
          image: "/assets/target.png",
          name: "Goal-Oriented",
          description:
            "I always trying to give all the best to meet my goal even if I failed 1000 times",
          link: "https://github.com/Firzan97/dns_monitoring",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  transform: scale(0.45);

  transition: 1s;
}

img:hover {
  transform: scale(1.05);

  transform: rotate(0deg);
}
</style>
