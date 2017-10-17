var app=new Vue({

el:'#app',
data:{
  title:"",
  last_id:3,
  todos: []
},

created:function(){
  var local_todos=localStorage.getItem("todos");
  this.todos=local_todos===null ? [] : JSON.parse(local_todos);
  var local_id=localStorage.getItem("last_id");
  this.last_id=local_id===null?0:parseInt(local_id);

},

  // todos:[
  //   {
  //     id:1,
  //     title:"HTML",
  //     done:false
  //   },
  //   {
  //     id:2,
  //     title:"CSS",
  //     done:false
  //   },
  //   {
  //     id:3,
  //     title:"JS",
  //     done:true
  //   },
  //   {
  //     id:4,
  //     title:"MARKDOWN",
  //     done:true
  //   }
  // ]

methods:{
  toggleTodo:function(todo){
    //todo.done=!todo.done;
    this.todos=this.todos.map(function(obj){
    if(todo.id === obj.id){
      obj.done= !obj.done;
    }

      return obj;
    });
    this.updateStorage();
  },
addTodo:function(){
    this.last_id++;
    this.todos.push({
    id:this.last_id,
    title:this.title,
    done:false
    });
    this.title="";
    this.updateStorage();

  },

removeTodo:function(todo){
  this.todos=this.todos.filter(function(obj){
return obj.id !=todo.id;
});

this.updateStorage();
},
clearDone:function(){
  this.todos=this.todos.filter(function(obj){
return !obj.done;

});
this.updateStorage();

},

updateStorage:function(){
localStorage.setItem("todos",JSON.stringify(this.todos));
localStorage.setItem("last_id",this.last_id);

},

}
});
