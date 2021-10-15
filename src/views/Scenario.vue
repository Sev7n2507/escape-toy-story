<template>
  <div class="fond" :style="{ backgroundImage: 'url(' + require('../assets/homepage2.jpg') + ')' }">>
    <div class="container">

      <div class="intro">
        <div class="top-intro">
          <img class="logo" src="../assets/Toy_Story_gore_logo_blanc.png"/>
    
          <p class="txt-intro">Woody est dans la chambre de Sid Phillips qui maltraite ses jouets. Il doit les libérer et s’échapper de la chambre à temps pendant que Sid est parti dîner.<br/><br/> 

          Arriverez vous à vous en sortir dans ce remake
          <br/>
          de Toy Story 1 en mode gore. A vous de jouer, 
          <br/>
          vous avez 10 minutes pour réussir à aider Woody !
          <br/>
          <br/>
          <br/>
          <br/>
          <span class="jaune">Sortirez-vous vivant d'ici ?</span>
          </p>
        </div>
        
        <div class="link">
          <router-link class="link" to="/chambre"><button>Jouer</button></router-link>
        </div>        
        
      </div>
      <div class="reseaux">

        <p class="txt-reseaux">Suis-nous sur :</p>
        <a class="logo-reseaux" href="https://www.facebook.com/Toy-Story-Escape-Game-102712532200302/?ref=pages_you_manage"><img  src="../assets/logo-fb-simple.svg"/></a>
        <a class="logo-reseaux" href="https://twitter.com/ToysStoryEG"><img  src="../assets/logo-twitter.svg"/></a>
        <a class="logo-reseaux" href="https://www.instagram.com/toystoryescapegame/"><img  src="../assets/logo-instagram.svg"/></a>


      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "Scenario"
}
</script>
<style scoped>


  .container {    
    display: block;
    width: 100%;
    height: 100%;
  }
  .logo {
    width: 30%;
    padding-bottom: 2.3%;
    
  }

  .intro {
    width: 50%;
    text-align: left;
    padding: 2% 7% 0 7%
  }

  .txt-intro {
    font-size: 20px;
    color: #ffffff;
    width: 65%;
  }

  .jaune {
    color: #E9C917;
    font-size: 41px;
    font-family: "Peace";

  }

  .link {
    margin: 2% 0;
    padding-top: 9.1%;
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