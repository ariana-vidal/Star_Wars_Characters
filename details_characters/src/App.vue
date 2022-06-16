<template>
  <div id="app"> 
    <TheHeader />
    <TheHome />
    <TheFooter />
  </div>
</template>

<script>
import './styles/global.css'
import TheHeader from './components/TheHeader';
import TheHome from './components/TheHome';
import TheFooter from './components/TheFooter';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheHome,
    TheFooter
  }
}
</script>
