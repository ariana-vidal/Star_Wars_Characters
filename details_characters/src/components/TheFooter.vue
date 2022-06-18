<template>
  <footer>
    <p>
      <b>“Seu foco determina sua realidade.”</b>
    </p>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter',
  }
</script>

<style scoped>
  footer{
    width: 100%;
    height: 60px;
    background-image: linear-gradient(to top, #003964 0%, #000000 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

p{
  color: var(--color-font)
}


</style>