<template>
 
  <div class="bloc-modale" v-if="reveleLivre">

    <audio autoplay>
          <source src="../assets//bruitage-tourner-la-page.mp3" type="audio/mpeg">
    </audio>

    <div class="overlay" v-on:click="toggleLivre"></div>

    <div class="modale">
      <button class="btn-modale" v-on:click="toggleLivre">X</button>
      <img src="../assets/livre_face.png" alt="livre" usemap="#livre-map"/>
    </div>
    
    
  </div>
</template>
<script>
export default {
  name:'Livre',
  props: ['reveleLivre', 'toggleLivre']
};
</script>
<style scoped>

.bloc-modale {
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
}

.modale {
  color: #333;
  padding: 50px;
  position: fixed;
  top: 10%;
}

.btn-modale {
  background: red;
  color: #ffffff;
  border: none;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
