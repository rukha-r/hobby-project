<template>
<div class="projects">
   <div class="wrapper">
     <div class="projects-box">
     <MusicApp class="com1"/>
     <TodoApp  class="com2"/>
     <Encoder class="com3"/>
     <Decoder class="com4"/>
     <Quize class="com5"/>
     <Calculator class="com6"/>
     <LoginApp class="com7"/>
     <WeatherApp class="com8"/>
     <Twooter class="com9"/>
     </div>
   </div>



  </div>
</template>


<script>
//importing componenets
import MusicApp from '../components/MusicApp';
import WeatherApp from '../components/WeatherApp';
import Twooter from '../components/Twooter';
import Quize from '../components/Quize';
import Calculator from '../components/Calculator';
import LoginApp from '../components/LoginApp';
import Encoder from '../components/Encoder';
import TodoApp from '../components/TodoApp';
import Decoder from '../components/Decoder';

export default {
  name: 'Projects',
  components: {
    MusicApp,WeatherApp,Twooter,Quize,Calculator,LoginApp,Encoder,TodoApp,Decoder
  }

}
</script>

<style lang="scss" scoped>
//importing all external files
@import '@/assets/style/Mixins.scss';
@import '@/assets/style/Animations.scss';
@import '@/assets/style/Projects-colors.scss';


.projects {
   animation: slowFadeIn 1s ease-in-out;
   perspective: 1000px;
   padding-top: 130px;
   .wrapper{
     background-color: $projects-wrapper-color;
     box-shadow: 0 0 25px black;
     border-radius: 5px;
     min-width: 500px;
     margin: 30px;
     padding: 20px;
     .projects-box {
       display: grid;
       justify-content: center;
       align-items: center;
       grid-template-columns: repeat(auto-fill,250px);
       grid-auto-rows: 320px;
       .com1 {
         animation: zoomIn .4s;
         @include hover
       }
       .com2 {
         animation: zoomIn .6s;
         @include hover
       }
       .com3 {
         animation: zoomIn .8s;
         @include hover
       }
       .com4 {
         animation :zoomIn 1s;
         @include hover
       }
       .com5 {
         animation: zoomIn 1.2s;
         @include hover
       }
       .com6 {
         animation: zoomIn 1.4s;
         @include hover
       }
       .com7 {
         animation: zoomIn 1.6s;
         @include hover
       }
       .com8 {
         animation: zoomIn 1.6s;
         @include hover
       }
       .com9 {
         animation: zoomIn 1.8s;
         @include hover
       }

     }
   }
 }
</style>
