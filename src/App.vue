<template>
  <div id="root">
  <div class="nav-holder">
   <img class="left-logo" :src="logo">
   <img class="mid-logo" :src="logo1">
   <img class="right-logo" :src="logo">

  <div id="nav">
    <router-link to="/">About</router-link>
    <span class="link-seperator"> | </span>
    <router-link to="/projects">Projects</router-link>
  </div>
  </div>

<router-view/>
 </div>
</template>
<script>
export default {
  name: "App",
  data(){
    return {
      logo: require('@/assets/logos/logo3.png'),
      logo1: require('@/assets/logos/logo2.png')
    }
  }
}
</script>


<style lang="scss">
//importing all external variable files
@import '@/assets/style/App-colors.scss';
@import '@/assets/style/Mixins.scss';
@import '@/assets/style/Animations.scss';


* {
  margin:0;
  padding:0;
}
body {
  background-color: $main-body-color;
  perspective: 1000px;
#app {
  .left-logo {
    @include left-logo;
    animation: logoLoop 2s infinite linear;
  }
  .right-logo {
    @include right-logo;
    animation: logoLoop 2s infinite linear;
  }
  font-family: Avenir, Helvetica, Arial;
  color: $paragraph-color;
  //text-align: center;
.nav-holder {
position:fixed;
width: 100%;
background-color: $main-body-color;
text-align: center;
z-index: 10;
#nav {
  .link-seperator {
    color: $link-color;
  }
}
  a {
    font-weight: bold;
    color: $link-color;
    text-decoration: none;
    animation: slowFadeIn 0.7s ease-in;
    &.router-link-exact-active {
      color: $active-link-color;
     }
    }
   }
  }
}
</style>
