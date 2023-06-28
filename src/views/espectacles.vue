<template>
  <div class="container  text-center">

      <div class="row txt-espectacle text bgTitleClT">
        <h2 class="titles">ESPECTACLES</h2>
      </div>
      <div class="row  col-12 bloc_img_especatcle" id="spectacle" v-motion-slide-visible-once-bottom>

        <div class="espectacle-bloc col-12 col-md-6 col-lg-4 col-xl-3" v-for="(i, index) in imgData" :key="i._id">



          <div class="bloc-img-spect col-12 col-md-6" v-motion-slide-visible-once-bottom>
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
    ...mapMutations(["loading"])
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
  }

  
</style>