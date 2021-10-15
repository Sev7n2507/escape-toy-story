<template>
  <div class="container">
    <audio autoplay>
       <source src="../assets/ambiance.mp3" type="audio/mpeg">
    </audio>
    
    
    <counter/>
      
    <div class="image">
      <img src="../assets/decor_v2.png" alt="chambre" usemap="#image-map" />

      <map name="image-map">
        <area  v-on:click="toggleTiroir"
          class="rectangle"
          shape="rectangle"
          coords="841,637,924,660"
          alt="tiroir"
        />
        <area v-on:click="toggleModale"
          class="rectangle"
          shape="rectangle"
          coords="582,499,708,339"
          alt="code"
        />

        <area 
          v-on:click="armoire"
          class="poly"
          shape="poly"
          coords="978,527,1321,368,1342,608,1197,706,983,676"
          alt="armoire"
          
        />
        <audio autoplay v-if="armoire">
          <source src="../assets/armoire.mp3" type="audio/mpeg">
        </audio>
        <router-link class="link" to="/lit">
          <area 
            class="rectangle"
            shape="rectangle"
            coords="479,656,517,687"
            alt="sous-lit"
            
            
          />
        </router-link>
        
      </map>
      <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
      <tiroir v-bind:reveleTiroir="reveleTiroir" v-bind:toggleTiroir="toggleTiroir"></tiroir>
      

    </div>
  </div>
</template>
<script>
import Modale from './Modale.vue';
import Tiroir from './Tiroir.vue';
import Counter from './Counter';


export default {
  
  name: 'Chambre',
  components: { Modale, Tiroir, Counter},
  data() {
    return {
      revele: false,
      reveleTiroir: false
    }
  },

  methods: {
    toggleModale: function(){
      this.revele = !this.revele
    },
    toggleTiroir: function(){
      this.reveleTiroir = !this.reveleTiroir
    }
  },

  component: {
    'modale': Modale,
    'tiroir': Tiroir,
    'counter': Counter,
   
  }
};
</script>
<style scoped>
.container {
 text-align: center; 
 padding-top: 1%;
 
}

.image {
  padding-top: 2%;
}
</style>
