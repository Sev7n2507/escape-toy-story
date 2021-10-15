<template>
  <div class="bloc-modale" v-if="revele">

    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <button class="btn-modale" v-on:click="toggleModale">X</button>
      <h2>Entrez le code</h2>
      <input type="text" v-model="inputPass" />
      <button class="btn-check" v-on:click="checkPass()">Valider</button>
    </div>

    <router-link v-if="finishGame" to="/finish"></router-link>
    
  </div>
</template>

<script>
export default {
  name: 'Modale',
  props: ['revele', 'toggleModale'],

  data() {
    return {
      password: "6424",
      inputPass: "",

    }
  },
  methods: {
    checkPass: function() {
        return this.password === this.inputPass?this.finishGame():this.error()
    },

    finishGame: function() {
      location.href="/finish"
    },

    error: function() {
      alert('Mauvais code')
    }
  }
  
}
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
    background: rgba(0, 0, 0, 0.5);
    color: #333;
    padding: 50px;
    position: fixed;
    top: 30%;
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

  .text {
    font-family: "Peace";
    margin-right: 2%;
  }

  h2 {
    color:#ffffff;
  }

</style>