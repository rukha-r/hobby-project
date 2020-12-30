<template>
<div class="todo-wrapper">

<div class="input-holder">
    <h6>{{day}}</h6>
    <input type="text" placeholder="New item..." 
    v-model="newTodo" @keydown.enter="addToList">
    <button class="add-button" @click="addToList()"><img :src="buttons.add" alt="_add-button"></button>
    <button class="clean-button"  @click="clean()"><img :src="buttons.restart" alt="_restart-button"></button>
</div>
 

     <ul class="list-wrapper">
         <li class="todo-item" v-for="(todo,index) of todoList" :key="todo">{{index+1}}.{{ todo }} <button><img @click="removeItem(todo)" :src="buttons.remove" alt="_remove-button"></button> </li>
     </ul>




</div>
</template>

<script>
import { capitalize } from 'vue';
export default {
    name: 'TodoApp',
    data(){
        return {
            buttons: {
                add: require('@/assets/icons/add.png'),
                remove: require('@/assets/icons/remove.png'),
                restart: require('@/assets/icons/restart.png')
            },
            todoList: [],
            newTodo: ''
        }
    },
    methods: {
        addToList(){
            if(this.todoList.includes(this.newTodo.toLowerCase())){
                let res = confirm('You already have this item in your list.Would you like to add anyway?');
                res ? this.todoList.push(this.newTodo.toLowerCase()) : '';
            } else if(this.newTodo.length > 2) {
                this.todoList.push(this.newTodo.toLowerCase());
            } 
            else {
                alert('Please enter at least 3 characters...');
            }
            this.newTodo = "";
        },
        clean(){
            if(this.todoList.length == 0){
                alert('List is empty...');
            } else {
                let res = confirm('Are you sure you want to delete all your todo list?');
                res ? this.todoList = [] : '';
                this.newTodo = '';
            }
        },
        removeItem(item){
            let id = this.todoList.indexOf(item);
            this.todoList.splice(id,1);
        }
    },
    computed: {
        day(){
            let d = new Date();
            let day = d.getDay();
            return day == 1 ? 'Monday' : day == 2 ? 'Tuesday' : day == 3 ? 'Wednesday' : day == 4 ? 'Thursday' : day == 5 ? 'Friday' : day == 6 ? 'Sunday' : 'Saturday';
        },
    }
    
}
</script>


<style lang="scss" scoped>
@import '@/assets/style/Mixins.scss';
@import '@/assets/style/TodoApp-color.scss';



.todo-wrapper {
    @include project-card;
    background-color: $todo-background-color;
    color: $todo-day-background;
 .input-holder {   
     text-align: center;
     background-color: $todo-day-background;
     border-radius: 10px 10px 5px 5px;
     padding: 10px;
     margin: -1px;
     color: $todo-item-background-color;
     h6 {
         color: $todo-text-color;
         font-size: 16px;
         font-family: georgia;
     }
     input{
            border: none;
            padding: 3px;
            color: $todo-day-background;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 8px 0 8px 0;
            &:focus {
                border-radius: 0 8px 0 8px;
            }

        }
     
    button {
    background: none;
    border: none;
    transform: translate(10px,5px);
    padding: 2px;
    cursor: pointer;
        img {
        width: 20px;
        background: none;
      
      }
    }
}
    
    .list-wrapper {
        overflow: scroll;
        height:220px;
        margin-top: 10px;
        
        .todo-item {
            list-style-type: none;
            background-color: $todo-item-background-color;
            padding:6px;
            margin: 8px;
            border-radius: 7px;
            font-size: 12px;
            animation: drop .6s ease;
            button {
                background: none;
                border: none;
                float: right;
                transform: translate(0,2px);
                cursor: pointer;
                img {
                    width: 12px;
                } 
            }
        }
    }
}

</style>