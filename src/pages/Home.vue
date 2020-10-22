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
        <b-button variant="primary" href="#"
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

            <b-button :href="project.link" variant="primary"
              >Go somewhere</b-button
            >
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
          image:
            "https://www.site24x7.com/help/images/anomaly-widget-dns-server.png",
          name: "DNS Monitoring System",
          description:
            "A monitoring system that was developed for monitory the dns availablity using cronjob",
          link: "https://github.com/Firzan97/dns_monitoring",
        },
        {
          image:
            "https://www.site24x7.com/help/images/anomaly-widget-dns-server.png",
          name: "DNS Monitoring System",
          description:
            "A monitoring system that was developed for monitory the dns availablity using cronjob",
          link: "https://github.com/Firzan97/dns_monitoring",
        },
        {
          image:
            "https://www.site24x7.com/help/images/anomaly-widget-dns-server.png",
          name: "DNS Monitoring System",
          description:
            "A monitoring system that was developed for monitory the dns availablity using cronjob",
          link: "https://github.com/Firzan97/dns_monitoring",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
