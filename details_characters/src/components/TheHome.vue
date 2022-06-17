<template>
  <main>
    <div v-if="!carregando" class="personApi">
        <section v-for="(personApi, index) in peopleApi" :key="index">
          <p>{{ personApi.name }}</p>
          <button class="button">Mais detalhes</button>
        </section>
    </div>
    <div v-else>
      carregando...
    </div>
  </main>
</template>

<script>
  import { consultarPeople } from '../services/api.js';
  export default {
    name: 'TheHome',
    data() {
      return {
        peopleApi: [],
        carregando: true
      }
    },
    mounted(){
      this.carregarObg();
    },

    methods: {
      carregarObg() {
        this.carregando = true;
        consultarPeople().then((peopleApi) => {
          this.peopleApi = peopleApi;
          console.log(this.peopleApi);
          this.carregando = false;
        });
      }
    },
  };

</script>

<style scoped>

main{
  background-image: linear-gradient(to top, #81AAB3 0%, #800080 100%);
}

.personApi{
  display: flex;
  max-width:600px;
  margin:0 auto;
  flex-wrap: wrap;
  justify-content: space-between;

}

.button{
  display: inline-block;
  padding: 2px 15px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #003964;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

</style>