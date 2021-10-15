<template>
  <div class="container">
    <audio autoplay>
       <source src="../assets/ambiance.mp3" type="audio/mpeg">
    </audio>
    <counter />

    <div class="image">
      <img src="../assets/decor_sous_lit.png" alt="lit" usemap="#lit-map" />

      <map name="lit-map">
        <area
          v-on:click="toggleLivre"
          class="rectangle"
          shape="rectangle"
          coords="89,408,406,436"
          alt="livre"
        />
        <area
          v-on:click="toggleCode"
          class="rectangle"
          shape="rectangle"
          coords="79,439,376,512"
          alt="code"
        />
      </map>
      <livre
        v-bind:reveleLivre="reveleLivre"
        v-bind:toggleLivre="toggleLivre"
      ></livre>
      <qr  v-bind:reveleCode="reveleCode"
        v-bind:toggleCode="toggleCode" 
        ></qr>
    </div>
  </div>
</template>
<script>
import Livre from './Livre';
import Counter from './Counter';
import Qr from './Qr.vue';
export default {
  name: 'Lit',

  components: {
    Livre,
    Counter,
    Qr,
  },
  data() {
    return {
      reveleLivre: false,
      reveleCode: false,
    };
  },

  methods: {
    toggleLivre: function() {
      this.reveleLivre = !this.reveleLivre;
    },
    toggleCode: function() {
      this.reveleCode = !this.reveleCode;
    },
  },
  component: {
    'livre': Livre,
    'counter': Counter,
    'qr': Qr,
  },
};
</script>
<style scoped>
.container {
  text-align: center;
}
</style>
