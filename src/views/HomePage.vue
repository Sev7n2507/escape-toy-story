<template>
  <div class="container">

    <div class="intro">
      <div class="top-intro">
        <img class="logo" src="../assets/Toy_Story_gore_logo_blanc.png"/> 
      </div>
      

      <div class="link">
        <router-link class="link" to="/scenario"><button>cliquez pour commencer</button></router-link>
      </div>
      
      
    </div>
    <div class="reseaux">

      <p class="txt-reseaux">Suis-nous sur :</p>
      <a class="logo-reseaux" href="https://www.facebook.com/Toy-Story-Escape-Game-102712532200302/?ref=pages_you_manage"><img  src="../assets/logo-fb-simple.svg"/></a>
      <a class="logo-reseaux" href="https://twitter.com/ToysStoryEG"><img  src="../assets/logo-twitter.svg"/></a>
      <a class="logo-reseaux" href="https://www.instagram.com/toystoryescapegame/"><img  src="../assets/logo-instagram.svg"/></a>

    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage"
}
</script>
<style scoped>
  .container {    
    background-image: url('../assets/homepage1.jpg');
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .logo {
    width: 30%;
    padding-bottom: 3%;
    
  }

  .intro {
    width: 100%;
    padding: 8.4% 0;
  }


  button {
    text-decoration: none;
    width: 576px;
    height: 67px;
    background-color: #A20C19;
    border: none;
    color: #ffffff;
    font-size: 21px;
    text-transform: uppercase;
    font-family: "Peace";

  }

  button:hover {
    cursor: pointer;
  }
  .reseaux {
    display: flex;
    font-size: 14px;
    color: #ffffff;
    padding: 0 0 0.8% 80%;
    font-weight: bold;

  }

  .txt-reseaux {
    padding-right: 10%;
    font-family: "Peace";
    font-size:14px;

  }

  .logo-reseaux {
    padding-right: 10%;
  }

</style>