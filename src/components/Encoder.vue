<template>
<div class="encoder-wrapper">

 <div class="text">
     <div class='flash1'></div> <div class='flash2'></div>  <p>Text Encrypter</p>  
            
 <input @keydown.enter="encodeIt" type="text" placeholder="Your message here..." v-model="text">
 </div>
 <br>
 <div class="result">
 <p id="result"></p>
 </div>
 

</div>
</template>

<script>
export default {
    name: 'Encoder',
    data(){
        return {
            text:''
        }
    },
    methods: {
        encodeIt(){    
            let safeData = this.text.split('').map(x => String(x).charCodeAt(0)).map(x => +x.toString(2)).join(' ');
            let display = document.getElementById('result');
            this.text = '';
            display.innerText = '';
            return display.innerText = safeData;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/Mixins.scss';
@import '@/assets/style/Animations.scss';
@import '@/assets/style/Encoder-app.scss';


.encoder-wrapper {
    @include project-card;
    background-color: $encoder-background-color;
    .text{
        text-align:center;
        margin-top:15px;
        p {
            transform:translate(55px);    
            color: $encoder-text-color;
            margin-top: 5px;
            padding: 5px;
            width: 110px;
            border-radius: 10px 10px 0 0;
            background-color: $encoder-input-back-color;
            border: none;
        }
        .flash1 {
            @include flash;
            animation: blinkFlash 0.2s infinite;
            float: left;
            transform: translate(25px,10px);
            background-color: red;
        }
        .flash2 {
            @include flash;
            animation: blinkFlash 0.2s infinite reverse;
            float: right;
            transform: translate(-25px,10px);
            background-color: #24eb24;
        }
        input {
            width:200px;
            height: 25px;
            padding: 7px;
            font-size: 12px;
            border: none;
            border-radius: 10px;
            background-color: $encoder-input-back-color;
            color: $encoder-input-text-color;
            letter-spacing: 3px;
        }
    }
    .result {
        background-color: $encoder-result-background-color;
        color: $encoder-result-color;
        padding: 10px;
        margin: -10px 10px -10px 10px;
        height:175px;
        overflow: scroll;
        word-spacing: 5px;
        word-break: break-all;
        border-radius: 10px;

    }
}

</style>