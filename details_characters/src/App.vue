<template>
  <div id="app">
    <TheHeader />
    <router-view path="$router.key"/>
    <TheFooter />
  </div>
</template>

<script> 
  import './styles/global.css'
  import TheHeader from './components/TheHeader';
  import TheFooter from './components/TheFooter';

  export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
