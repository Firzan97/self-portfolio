-<template>
  <div class="container">
    <div class="skill-header">
      <h1>My Skills</h1>
    </div>
    <div class="row justify-content-md-center">
      <div v-for="image in images" :key="image.link">
        <div class="col">
          <b-img :src="image.link" fluid alt="Fluid image" class="pt-3"></b-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      images: [
        {
          link:
            "https://www.gatsbyjs.cn/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png",
        },
        {
          link:
            "https://www.cnjobs.dk/drupal/sites/default/files/2019-01/nodejs-01.png",
        },
        {
          link:
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        },
        {
          link:
            "https://2.bp.blogspot.com/-bGTsFydT5d8/WM-Gs0K0FTI/AAAAAAAAFpM/AGJ-DWijk785bQjk9FF99PpcySIrtWHIgCPcB/s1600/laravel_logo.png",
        },
        {
          link:
            "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png",
        },
        {
          link:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/640px-Amazon_Web_Services_Logo.svg.png",
        },
        {
          link: "https://pngimg.com/uploads/wordpress/wordpress_PNG57.png",
        },
        {
          link:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.pngsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  height: 80px;
}
.skill-header {
  margin-top: 2rem;
  margin-bottom: 6rem;
}
</style>
