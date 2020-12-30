<template>
<div class="app">
    <div class="screen">
    <h5>{{ current.artist }} - {{ current.title }}</h5>
    </div>
    <div class="controll-buttons">
      <button class="prev" @click="prev()"><img :src="controls.prev"></button>
      <button class="play" @click="play()" v-if="!playing"><img :src="controls.play"></button>
      <button class="pause" @click="pause()" v-else><img :src="controls.pause"></button>
      <button class="next" @click="next()"><img :src="controls.next"></button>
    </div>
    <div class="list-of-songs">
        <ul>
            <li v-for="song in songs" :key="song" @click="play(song)">{{ song.artist }} - {{ song.title }}</li>
        </ul>
    </div>


</div>    
</template>

<script>
export default {
    name: 'MusicApp',
    data(){
        return {
            current: {},
            index: 0,
            playing: false,
            controls: {
                play: require('@/assets/icons/play.png'),
                pause: require('@/assets/icons/pause.png'),
                next: require('@/assets/icons/next.png'),
                prev: require('@/assets/icons/prev.png')
            },
            songs: [
                {
                    artist: 'Dusty Springfild',
                    title: 'Spooky',
                    src: require('@/assets/songs/Dusty Springfield  Spooky.mp3')
                    
                },
                {
                    artist: 'Trevor Daniel',
                    title: 'Falling',
                    src: require('@/assets/songs/Trevor Daniel - Falling (Official Music Video).mp3')
                    
                },
                {
                    artist: 'G-Eazy',
                    title: 'For The Night',
                    src: require('@/assets/songs/G-Eazy - No Limit REMIX ft. A$AP Rocky, Cardi B, French Montana, Juicy J, Belly.mp3')
                    
                },
                {
                    artist: 'Horizon',
                    title: 'Take Me To Church',
                    src: require('@/assets/songs/Hozier - Take Me To Church (Official Video).mp3')
                }
            ],
            musicPlayer: new Audio()
        }
    },
    created(){
        this.current = this.songs[this.index];
        this.musicPlayer.src = this.current.src;
        
    },
    methods: {
        play(song){
            if(typeof song != 'undefined'){
                this.current = song;
                this.musicPlayer.src = this.current.src;
            }
            this.playing = true;
            this.musicPlayer.play();   
        },
        pause(){
            this.playing = false;
            this.musicPlayer.pause();
        },
        next(){
            this.index >= this.songs.length -1 ? this.index = 0 : this.index++;
            this.current = this.songs[this.index];
            this.musicPlayer.src = this.current.src;
            this.play();
            
        },
        prev(){
            this.index <= 0 ? this.index = this.songs.length : this.index--;
            this.current = this.songs[this.index];
            this.musicPlayer.src = this.current.src;
            this.play();
        
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/MusicApp.scss';
@import '@/assets/style/Animations.scss';
@import '@/assets/style/Mixins.scss';

    .app {
        @include project-card;
        text-align: center;
        background-color: $music-app-background;
        .screen {
            background-color: $screen-color;
            padding: 15px;
            margin: 0 5px 0 5px;
            border-radius: 3px 3px 15px 15px;
            h5 {
                color: $songs-color;
                font-family: sans-serif;
            }
        }
        .controll-buttons {
            padding: 10px 0 0 0;
            button {
                margin: 3px;
                background-color: inherit;
                border:none;
            }
            img {
                width:35px;
                border: none;
            }
            
            
        }
        .list-of-songs {
            text-align: left;
            font-size: 13px;
            padding: 10px;
            margin: 5px 5px 0 5px;
            height: 176px;
            border-radius: 15px 15px 4px 4px;
            background-color: $screen-color;
            overflow: scroll;
            ul {
                li{
                    list-style-type: none;
                    color: $songs-color;
                    padding: 10px 0 0 25px;
                    cursor: pointer;
                    &:hover {
                        color: $songs-hover-color;
                    }
                }
            }
        }       
    }


</style>