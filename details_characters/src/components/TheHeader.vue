<template>
  <header>
    <img alt="STW" id="logo" src="https://logodownload.org/wp-content/uploads/2015/12/Star-Wars-Logo-9.png">
  </header>
</template>

<script>
export default {
  name:'TheHeader',
}
</script>

<style scoped>
  header{
    background-image: linear-gradient(to top, #000000 0%, #003964 100%);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
  }

  #logo{
    width: 125px;
    height: 60px;
  }

</style>