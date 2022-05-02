<template>
  <div id ="block-header">
    <h1 id="title">Have you Visited Every State?</h1>
  </div>
</template>

<script>

export default {
  name: 'PageHeader',
}

</script>

<style scoped>

#block-header{
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  border-radius: .3rem;
  background-color: saddlebrown;
  background-image: url("~@/assets/header.png");
  background-position: center;
  background-size: cover;
  box-shadow: grey 2px 2px;
}

#title{
  font-weight: 500;
  color: white;
  text-shadow: black 2px 2px;
}

</style>