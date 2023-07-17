<template>
  <div class="container  text-center">

      <div class="row txt-espectacle text ">
        <h2 class="titles">ESPECTACLES</h2>
      </div>
      <div class="row  col-12 bloc_img_especatcle" id="spectacle" >

        <div class="espectacle-bloc col-12 col-md-6 col-lg-4 col-xl-3" v-for="(i, index) in imgData" :key="i._id">



          <div class="bloc-img-spect col-12 col-md-6" >
            <span class="span1"></span>
            <span class="span2"></span>

            <router-link v-if="index == 0" to="/kakos">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="i.showName" />
              <h3 class="showName text " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 1" to="/emperdonadas">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName text " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 2" to="/bernadette">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName text " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 3" to="/creation">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName text " :class="darkTheme ? 'txtDark' : 'txtDay'">{{ i.showName }} </h3>
            </router-link>

            <router-link v-if="index == 4" to="/elvira">
              <img class=" img-spectacle  rounded-circle col-12 " :src="i.imageUrl" alt="" />
              <h3 class="showName text txtDay" :class="{ txtDark: darkTheme }">{{ i.showName }} </h3>
            </router-link>
          </div>

        </div>

      </div>
    </div>
</template>

<script>

import { mapGetters, mapState, mapMutations } from "vuex";

export default {
    name: "espectacles",

    created: function () {
      console.log("CREATED ESPECTACLES");
    this.getLocation()
    this.getPageData();
  },
  computed: {
    ...mapState({
     
      imgData: "imgData",
     
      namePage: "namePage",
      geoLoc: "geoloc",
      
      darkTheme: "darkTheme"

    }),
    ...mapMutations(["NamePage","loading"])
  },

  methods: {

getLocation() {
  this.$store.dispatch("getLoc")
    .then((res) => {
      this.DataCookies()
    })
},

async DataCookies() {
  let dataTheme = await dataCookies();
},

getPageData() {
 console.log("GET PAGE DATA ESPECTACLES");
    this.$store.commit("loading", true)
    this.$store.commit("NamePage", "espectacles")
  const n = "portada";
  
        this.$store.dispatch("getImgData", n)
          .then((res) => {
            this.$store.commit("loading", false)
          })

},



}, // fin METHODS

}
</script>

<style scoped>

@import url("../styles/theme.css");
@import url("../styles/font.css");
.container {
    max-width: 1000px;
    margin-top: 0px;
  }
  .nameTitleC {
  width: 300px;
}

svg {
  width: auto;
  stroke-width: 18;
}

#title_1 {

  text-shadow: 0px 3px 3px rgb(251, 93, 93), 0px 5px 23px rgb(251, 93, 93), 5px 0px 23px rgb(254, 102, 102);

}

/* .bgTitleClT {
  position: relative;
  
  clip-path: polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%);
  background: var(--bgTitle);
 
  z-index: 2;

} */

/* .bgTitleClT {
  margin: 0 auto;
  width: calc(300px + 3vw);
  height: 100px
} */

/* svg text {
 
  animation: stroke 2s forwards;
  stroke-width: 16;
  stroke: rgb(62, 1, 1);
  font-size: 140px;
  width: 300px;
} */

/* @keyframes stroke {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(62, 1, 1);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 40%;
    stroke-width: 5;
  }


  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(62, 1, 1);
  }

  80% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(62, 1, 1);
    stroke-width: 6;
  }

  100% {
    fill: rgb(62, 1, 1);
    fill: rgb(250, 250, 251);
    stroke: rgba(251, 252, 253, .3);
    stroke: rgb(62, 1, 1);
    ;
    stroke-dashoffset: -25%;
    stroke-dasharray: 100% 0%;
    stroke-width: 2;
  }
} */



.switch_dynamic {
  margin-top: -10px;
  z-index: -1;
}

.titles {
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  font-size: var(--fontSizeTitleH2);
  color: white;
  text-shadow: 0 0 30px #f92424, 0px 0px 50px rgba(251, 41, 41, 0.5), 0 0 150px #EC637B, 0 0 30px #f92424;
}

html {
  scroll-behavior: smooth;
  --res: 25vw;
}

a {

  color: rgb(7, 8, 9);
  text-decoration: none;

}

.sticky_bloc {
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.left-bloc {
  position: relative;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title_name {
  display: flex;
  width: 50%;
  justify-content: center;
  margin: 0 auto;

}

.title_name>h1 {
  text-shadow: 0 0 30px #f92424, 0px 0px 50px rgba(251, 41, 41, 0.5), 0 0 150px #EC637B, 0 0 30px #f92424;
  color: #f2eeee;

}

h1 {

  display: flex;
  text-align: center;
}

.container-fluid {

  background: transparent;

  position: relative;
}





.copyright {
  color: white;

  text-align: right;
}

/* .container-fluid-footer {
  width: 100vw;
  margin: 0 auto
} */

.img_back {

  width: auto;
  height: auto;
  margin-top: 0;
  margin-right: 0;


}

.img_principale {
  width: 100%;
  height: auto;
}

.randow_data {
  color: azure;
  font-size: 18px;
  margin-bottom: 2rem;
}

.right_bloc {
  height: auto;
  overflow: hidden;
  object-fit: contain;
}

ul {
  list-style-type: none;
  margin-top: 1rem;
  padding: 0;
  align-items: center;
}

li {
  list-style-type: none;
}

.list_nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: space-evenly;
  padding-left: 1rem;
}

/* .left-bloc {
  text-align: center;
  align-items: center;
  color: white;
} */

.bloc_thumb {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
}

.bloc_img_especatcle {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.espectacle-bloc {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
  width: 100%;
  height: auto;
  margin: 0 auto;
}


.bloc-img-spect {
  position: relative;
  display: flex;
  justify-content: center;
  width: 300px;
  /* border: 1px solid red; */
  /* box-shadow: 0 0 10px rgba(252, 48, 48,.3), 0 0 15px rgba(252, 48, 48,.3), 0 0 30px rgba(252, 48, 48,.3);
    background-color: rgba(252, 48, 48,.3);
    box-shadow: 0 0 10px rgba(251, 250, 250, 0.3), 0 0 15px rgba(251, 250, 250, 0.3), 0 0 30px rgba(251, 250, 250, 0.3); */
  margin: 20px auto;
  padding-top: 20px;
  border-radius: 10px;
}


.img-spectacle {
  width: 240px;
  height: 240px;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 50%;
  padding: 0px;
  /* box-shadow: 0 0 10px rgb(252, 48, 48,.5), 0 0 15px rgb(252, 48, 48,.5), 0 0 30px rgb(252, 48, 48,.5) ; */
  border: 3px solid red;

}

.img-spectacle:hover {
  transform: rotate3d(0, 1, 0, 360deg);
  ;
  transition: .5s
}



.txt-espectacle {
  color: rgb(13, 15, 15);
  margin: 130px auto;
}

.showName {
  padding: 1rem;
  margin: 0 auto;
  /* text-shadow: 2px 2px 10px  white ; */
}

.txt-espectacle {
  margin: 0px auto;
  padding-top:120px
}


/* BLOC_THUMB  */

@media screen and (min-width:768px) and (max-height:440px) {

  .img_principale {
    width: 100%
  }

  .bloc_thumb {
    height: auto;
    display: flex;
    flex-direction: row;
  }

  .img_back {
    width: 100%;
  }

  .left-bloc {
    width: 50%;
  }

  .espectacle-bloc {
    flex-direction: row;
    width: 300px;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
}

@media screen and (min-width:768px) {
  .espectacle-bloc {
    flex-direction: row;
    width: 300px;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }

  /* .bloc-img-spect {
    
    width: 100%;

  } */
  .bloc_thumb {
    height: auto;
    display: flex;
    flex-direction: row;
  }

  .img-spectacle {
    width: 230px;
    height: 230px;
  }
}

@media screen and (min-width:1024px) {

  .img-spectacle {
    width: 230px;
    height: 230px;
  }

  .espectacle-bloc {
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    width: 300px;
  }

  .container {
    max-width: 1000px;
  }
}

@media screen and (min-width:1200px) {
  .right_bloc {
    position: relative;

  }

  .img_back {
    position: relative;
    /* background-color: #f60404;
    padding-top:20px; */


  }

  .img_principale {
    position: relative;
    /* top: -20px;
    left: -20px; */

    z-index: 2;
  }

  .img-spectacle {
    width: 230px;
    height: 230px;
  }

  .espectacle-bloc {
    padding: 0
  }

  .container {
    max-width: 1100px;
  }
}

@media screen and (min-width:1440px) {
  .right_bloc {
    margin-top: 100px
  }
  .txt-espectacle {
  
  padding-top:150px;
  
}
  #spectacle {
    padding: 20px 30px 30px 30px;
    justify-content: center;
    border-radius: 20px 0;
    
  }
.titles{
  font-size: 70px;
}
  .espectacle-bloc {
    margin: 30px;
  }

  .container {
    max-width: 1300px;
  }
}

@media screen and (min-width:1920px) {


  .bloc_thumb {
    margin-top: 0px;
    margin-bottom: 100px;

  }
}

/* ************************ ANIM ************************* */

/* ************  anim__navBar */
/* .line {
  width: 60%;
  border: solid 2px rgb(255, 0, 8);
  margin: 0 auto;
  animation-name: item3;
  animation-duration: 0.6s;
}

.item1 {
  animation-name: item1;
  animation-duration: 0.6s;
}

.item2 {
  animation-name: item2;
  animation-duration: 0.6s;
}

.item4 {
  animation-name: item4;
  animation-duration: 0.6s;
}

.item6 {
  animation-name: item6;
  animation-delay: 1s;
  animation-duration: 0.6s;
  animation: item6 .6s cubic-bezier(0, 1.32, 1, 1.14) 1s backwards;
}

@keyframes item1 {
  0% {
    transform: translateY(70px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes item2 {
  0% {
    transform: translateY(35px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes item3 {
  from {
    width: 0;
  }

  to {
    width: 60%;
  }
}

@keyframes item4 {
  0% {
    transform: translateY(-35px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes item6 {
  0% {
    transform: translatex(550px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
} */

/* ************  FIN anim__navBar */

</style>