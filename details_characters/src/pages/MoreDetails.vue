<template>
  <main>
    <div v-if="!carregando" class="personApi">
        <section class="section" v-for="(detail, index) in details" :key="index">
          <p><b><i>{{ `Name: ${detail.name}` }}</i></b></p>
          <p><b>{{ `Model: ${detail.model}` }}</b></p>
          <p><b>{{ `Manufacturer: ${detail.manufacturer}` }}</b></p>
          <p><b>{{ `Cost in credits: ${detail.cost_in_credits}` }}</b></p>
          <p><b>{{ `Length: ${detail.length}` }}</b></p>
          <p><b>{{ `Max atmosphering speed: ${detail.max_atmosphering_speed}` }}</b></p>
          <p><b>{{ `Crew: ${detail.crew}` }}</b></p>
          <p><b>{{ `Passengers: ${detail.passengers}` }}</b></p>
          <p><b>{{ `Cargo capacity: ${detail.cargo_capacity}` }}</b></p>
          <p><b>{{ `Consumables: ${detail.consumables}` }}</b></p>
          <p><b>{{ `Hyperdrive_rating: ${detail.hyperdrive_rating}` }}</b></p>
          <p><b>{{ `MGLT: ${detail.MGLT}` }}</b></p>
          <p><b>{{ `Starship class: ${detail.starship_class}` }}</b></p>

        </section>
        <button class="button">
            <router-link :to="'/'">
              <b>Voltar</b>
            </router-link>
          </button>
    </div>
    <div v-else>
      carregando...
    </div>
  </main>
</template>

<script>
  import { consultarPeopleDetails } from '../services/api-details.js';
  import axios from 'axios';
  export default {
    name: 'MoreDetails',
    data() {
      return {
        details: [],
        carregando: true
      }
    },
    mounted(){
      this.carregarObg();
    },
    methods: {
      carregarObg() {
        this.carregando = true;
        
        consultarPeopleDetails(this.$route.params.id).then(details => {
          
          details.starships.forEach(url => {   
           
            axios.get(url).then(res => this.details.push(res.data))
          })
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
  margin-top: 30px;
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
  color: #fff;
  background-color: #003964;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  height: 30px;
  width: 100px;
}

</style>