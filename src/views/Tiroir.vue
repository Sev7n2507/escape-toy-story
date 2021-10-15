<template>
 
  <div class="bloc-modale" v-if="reveleTiroir">

    <audio autoplay>
          <source src="../assets/tiroir.mp3" type="audio/mpeg">
    </audio>

    <div class="overlay" v-on:click="toggleTiroir"></div>

    <div class="modale">
      <button class="btn-modale" v-on:click="toggleTiroir">X</button>
      <img src="../assets/tiroir.png" alt="tiroir" usemap="#tiroir-map" />
    </div>
    
    
  </div>
</template>
<script>
export default {
  name: 'Tiroir',
  props: ['reveleTiroir', 'toggleTiroir']
};
</script>
<style scoped>
.container {
  display: flex;
}
.image {
  padding: 8.6% 4%;
  margin: auto;
}

img {
  max-width: 100%;
  margin: auto;
  align-items: center;
}

.rectangle {
  background-color: red;
}

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
  top: 20%;
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
