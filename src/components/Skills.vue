-<template>
  <div class="container d-flex justify-content-center">
    <div class="row">
      <div v-for="image in images" :key="image.link">
        <b-img :src="image.link" fluid alt="Fluid image" class="pl-4"></b-img>
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
            "https://wp-api.agiratech.com/wp-content/uploads/2019/09/Flutter-9.1-whats-new.png",
        },
        {
          link:
            "https://www.cnjobs.dk/drupal/sites/default/files/2019-01/nodejs-01.png",
        },
        {
          link:
            "https://www.gatsbyjs.cn/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png",
        },
        {
          link:
            "https://www.gatsbyjs.cn/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  height: 40px;
}
</style>
