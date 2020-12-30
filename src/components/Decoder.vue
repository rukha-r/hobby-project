<template>
<div class="decoder-wrapper">

 <div class="text">
     <div class='flash1'></div> <div class='flash2'></div>  <p>{{appName}}</p>  
            
 <input @keydown.enter="decodeIt" type="text" placeholder="Your message here..." v-model="text">
 </div>
 <br>
 <div class="solved">
 <p id="solved"></p>
 </div>
 

</div>
</template>

<script>
export default {
    name: 'Decoder',
    data(){
        return {
            text:'',
            appName: 'Decoder'
        }
    },
    methods: {
        decodeIt(){    
            let decoded = String(this.text).replace(/\W+/g, ',').split(',').map(x => parseInt(x,2)).map(x => String.fromCharCode(x)).join('');
            let display = document.getElementById('solved');
            this.text = '';
            display.innerText = '';
            return display.innerText = decoded;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/Mixins.scss';
@import '@/assets/style/Animations.scss';
@import '@/assets/style/Decoder.scss';


.decoder-wrapper {
    @include project-card;
    background-color: $decoder-background-color;
    .text{
        text-align:center;
        margin-top:15px;
        p {
            transform:translate(55px);    
            color: $decoder-text-color;
            margin-top: 5px;
            padding: 5px;
            width: 110px;
            border-radius: 10px 10px 0 0;
            background-color: $decoder-input-back-color;
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
            background-color: $decoder-input-back-color;
            color: $decoder-input-text-color;
            letter-spacing: 3px;
        }
    }
    .solved {
        background-color: $decoder-solved-background-color;
        color: $decoder-solved-color;
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