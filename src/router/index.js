import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, VueRouter} from "vue-router";

//  import login from "../components/Login.vue";
  //  const login = require("../components/Login .vue")
// import accueil from "@/views/Accueil.vue";
// import profil from "@/views/Profil.vue";
import store from "../store/index"


const routes = [
  {
    name: "bernadette",
    path: "/bernadette",
    meta:{
      title:"Marta Renyer Bernadette"
    },
    component: () => import("../views/Bernadette.vue"),
  },
  {
    name: "bio",
    path: "/bio",
    meta:{
      title:"Marta Renyer Biografia"
    },
    component: () => import("../views/bio.vue"),
  },
  {
    name: "kakos",
    path: "/kakos",
    meta:{
      title:"Marta Renyer Las Kakofonikas"
    },
    component: () => import("../views/kakos.vue"),
  },
  {
    name: "emperdonadas",
    path: "/emperdonadas",
    meta:{
      title:"Marta Renyer Las emperdonadas"
    },
    component: () => import("../views/emperdonadas.vue"),
  },

  {
    name: "login",
    path: "/login",
    component: () => import("../views/login.vue"),
  },
  {
      name: "NewPass",
      path: "/newpass",
      component: () => import("../components/ResetPassW.vue"),    
  },
  {
    name: "portada",
    path: "/creation",
    meta:{
      title:"Marta Renyer Home",

      metaTags: [
        {
          name: 'description',
          content: 'the best spectacle'
        },
        {
          property: 'og:description',
          content: 'the best spectacle'
        }
      ],
    },
    component: () => import("../views/portada.vue"),
    
  },
  
  {
    name: "pageAdmin",
    path: "/ad1920384756ytrdehdk",
    meta:{
      requireAuth:true,
    },
    component: () => import("@/views/AdminPage.vue"),
  },
  {
    name: "espectacles",
    path: "/espectacles",
    
    component: () => import("@/views/espectacles.vue"),
  },
  {
    name: "calendar",
    path: "/cal",
    meta:{
      title:"Marta Renyer Calendar",
      
    },
    component: () => import("../views/calendari.vue"),
  },
  {
    name: "contact",
    path: "/contact",
    meta:{
      title:"Marta Renyer Calendar",
      
    },
    component: () => import("../views/contact.vue"),
  },
  {
    name: "blog",
    path: "/blog",
    meta:{
      title:"Marta Renyer Blog",
    
      
    },
    component: () => import("../views/blog.vue"),
    // children: [
    //   { path: '', 
    //   component: () => import("../components/blog_post.vue"),
    //   meta:{
    //     requireAuth:true,
    //   },
    // },
    // ]
  },
  {
    name: "elvira",
    path: "/elvira",
    component: () => import("../views/elvira.vue"),
  },
  {
    name: "creation",
    path: "/",
    component: () => import("../views/creation.vue"),
  },
  {
    name: "forgotPassword",
    path: "/9876545678hgh87yhju87",
    component: () => import("../components/EnterEmail.vue"),
  },
  

];



const router = createRouter({
  //  history: createWebHistory(),
    history: createWebHashHistory(),
  routes,
});


router.beforeEach((to,from,next)=>{
  // console.log("TO",to);
  // console.log("FROM",from);
  if(to.matched.some((record)=> record.meta.requireAuth)){
    if(store.state.auth){
      next();
    } else{
      console.log("NO AUTH");
      // next({name:"login"});
      next();
    }
  
  } else{
    next();
  }
  document.title = to.meta?.title ?? 'Marta Renyer';
  document.metaTags = to.meta?.metaTags ?? 'default value'
 
});

export default router;
