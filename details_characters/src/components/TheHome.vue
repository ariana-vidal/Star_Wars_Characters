<template>
  <main>
    <div v-if="!carregando" class="personApi">
        <section class="section" v-for="(personApi, index) in peopleApi" :key="index">
          <p><b><i>{{ `Name: ${personApi.name}` }}</i></b></p>
          <p>{{ `Height: ${personApi.height}` }}</p>
          <p>{{ `Birth year: ${personApi.birth_year}` }}</p>
          <p>{{ `Gender: ${personApi.gender}` }}</p>
          <button class="button">
            <router-link :to="'/more-details/' + personApi.id">
              <b>Mais detalhes</b>
            </router-link>
          </button>
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
  max-width:100%;
  margin:10 auto;
  margin-top: 30px;
 margin-left: 30px;
  flex-wrap: wrap;
  justify-content: space-between;

}

.section{
  width: 30%;
  height: 10%;
}

.button{
  display: inline-block;
  padding: 2px 15px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  background-color: #fff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}



</style>