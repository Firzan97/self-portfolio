-<template>
  <div class="container">
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
</template>

<script>
export default {
  name: "ProjectCompleted",
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
