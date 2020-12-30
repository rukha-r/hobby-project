<template>
  <div class="about">


    <div class="about-me">
     <div class="inner-card">
      <img :src="author_image" alt="_authors picture">
      <p>Hello guys.My name is <span class="name">{{ name }}</span> and I am self-thought front-end developer.Here you can read about me and check and rate my work.There is some of my in <router-link :title="projectsTitle" to="/Projects"> projects </router-link> page !</p>
      <p> I strated coding back to 2019 and found it very interesting.I sterted lerning <a :href="html.url" :title="html.title" target="_blank">{{html.name}}</a>.After getting confortable with it, I was strogling learning <a :href="css.url" :title="css.title" target="_blank">{{css.name}}</a>.It was so hard and I was almost destroying my laptop,coz I was so upset that I couldnt keep up.Well it happend until I strted learning <a :href="js.url" :title="js.name" target="_blank">{{js.name}}</a>so things got harder.But I didn't quite and today I am <a :href="vue.url" :title="vue.name" target="_blank">{{vue.name}}</a> developer...</p>
    </div>
    </div>



  </div>
</template>


<script>
export default {
  name: 'About',
  data(){
    return {
      name: 'Rukha',
      author_image: require('../assets/images/main.png'),
      projectsTitle: 'Click to go to projects file and check my projects and rate my work if you like it!',
      html: {
          name: 'HTML',
          title: 'Hyper Text Markup Language',
          url: 'https://www.html.org'
        },
        css: {
          name: 'CSS',
          title: 'Cascading Style Sheets',
          url: 'www.css.org'
        },
        js: {
          name: 'JavaScript',
          url: 'www.javascript.org'
        },
        vue: {
          name: 'Vue Js',
          url: 'www.vuejs.org'
        }

    }
  }
}
</script>


<style lang="scss" scoped>
//importing external files
@import '@/assets/style/Mixins.scss';
@import '@/assets/style/Animations.scss';
@import '@/assets/style/About-colors.scss';

.about {
  animation: zoomIn .4s ease-in-out;
  padding-top: 150px;
  text-align: center;
  .about-me {
    display: flex;
    justify-content: center;
    align-items: center;
    .inner-card {
    margin: 20px;
    width: 600px;
    border-radius: 5px;
    box-shadow: 0 0 40px #000000;
    background-color: $about-me;
    color: $paragraph-color;
    padding: 30px;
    img {
      width: 130px;
      height: 100px;
      border-radius: 50%;
    }
    .name {
      color: $name-color;
    }
    a {
      text-decoration: none;
      color: orange;
      cursor: pointer;

    }
  }
 }
}

</style>
