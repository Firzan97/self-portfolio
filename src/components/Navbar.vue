<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      class="shadow-lg"
      style="background-color: #faee1c;"
    >
      <b-navbar-brand class="font-weight-bolder text-monospace" href="#"
        >FIRZAN AZRAI</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item><router-link to="/">Home</router-link> </b-nav-item>
          <b-nav-item>
            <router-link to="/Profile">Profile</router-link></b-nav-item
          >
          <b-nav-item>
            <router-link to="/About">Aboout</router-link></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
}
a {
  color: inherit;
}
</style>
