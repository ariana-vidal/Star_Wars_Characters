<template>
  <div id="app"> 
    <TheHeader />
    <TheHome />
  </div>
</template>

<script>
import './styles/global.css'
import TheHeader from './components/TheHeader';
import TheHome from './components/TheHome';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheHome
  }
}
</script>
