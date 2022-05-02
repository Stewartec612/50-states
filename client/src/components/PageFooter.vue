<template>
  <div>
    <div id="navigation-link">
      <span class="nav-link">
          <router-link to="/">Home</router-link>
      </span>

      <span class="nav-link">
          <router-link to="/about">About</router-link>
      </span>

    <p>Header image by
      <a href="https://unsplash.com/photos/KpBXAOs80YI">@chrislawton on Unsplash</a>
    </p>
      <a target="_blank" href="https://icons8.com/icon/44022/map-marker">Map Marker icon by Icons8</a>
    </div>
  </div>


</template>

<script>

export default {
  name: 'page-footer'
}

</script>

<style scoped>

.nav-link{
  margin: 1rem;
}
</style>