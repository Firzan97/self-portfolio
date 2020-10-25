-<template>
  <div class="container">
    <div class="row">
      <div class="p-4" v-for="project in projects" :key="project.name">
        <b-card
          :title="project.name"
          :img-src="project.image"
          img-alt="Image"
          img-top
          style="max-width: 20rem; height:30rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ project.description }}
          </b-card-text>

          <b-button :href="project.link" variant="warning"
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
          image: "/assets/calculator2.png",
          name: "Calculator Application",
          description:
            "Calculator application created using Vuejs. Developing the app for the purpose of learning on how vue js functioning.",
          link: "https://master.d131ilqmg8wmfc.amplifyapp.com/",
        },
        {
          image: "/assets/currencyconverter2.png",
          name: "Currency Converter",
          description:
            "A simple currency converter application created using vuejs. The data retrieve from Exchangerateapi.io API and the also from restcountries API. The APIs are pulled using axios",
          link: "https://master.d20i2rehr5l6wo.amplifyapp.com/",
        },
        {
          image: "./assets/portfolio2.png",
          name: "Portfolio",
          description:
            "My portfolio website for advertising myself. The tech that been used for developing this project are Gatsby, Graphql, Strapi, Netlify, Cloudinary and Vanilla CSS",
          link: "https://firzan-io.netlify.app/",
        },
        {
          image: "assets/weather2.png",
          name: "Weather Forecast Application",
          description:
            "Developed using nodejs, Expressjs, Vanilla CSS. The forecast data are retrieved using API which is MapBox API and WeatherStack API. Deploy via Heroku",
          link: "https://weather-application-firzan.herokuapp.com/",
        },
        {
          image: "assets/hukaloh2.png",
          name: "My Blog",
          description:
            "Just a simple blog for me to post the story of my life. Sometimes I post something related to tech and review. Created using Wordpress with the Elementary builder.",
          link: "http://hukaloh.online/",
        },
        {
          image:
            "https://www.dnsstuff.com/wp-content/uploads/2020/02/sam-summary.png",
          name: "DNS Monitoring System",
          description:
            "Developed using Ruby on Rails as the back end and HTML, Bootstrap as the front end. The result was retrieved from the dig command",
          link: "https://github.com/Firzan97/dns_monitoring",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
