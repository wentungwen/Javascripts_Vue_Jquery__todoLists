var app = new Vue({
  el: ".app",
  data: {
    title: "TODOLIST (with Vue & Bootstrap)",
    todos: [],
    newTodo: "",
    //頁籤預設值
    visibility: "all",
  },
  methods: {
    addTodo: function (todo) {
      //去除字串前後空值，若no value為true，返回
      let value = this.newTodo.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    clearTodo() {
      if (confirm("Are you sure to clear all?")) {
        this.todos = [];
      }
    },
    moveUp(index) {
      let btn = document.getElementsByClassName("btn");
      this.todos.splice(index - 1, 0, this.todos[index]);
      this.todos.splice(index + 1, 1);
      if (index == 0) {
      }
    },
    moveDown(index) {
      this.todos.splice(index + 1, 0, this.todos[index]);
      this.todos.splice(index - 1, 1);
    },
  },
  computed: {
    filteredTodos: function () {
      //all
      if (this.visibility == "all") {
        return this.todos;

        //active
      } else if (this.visibility == "active") {
        let newTodos = [];
        this.todos.forEach(function (item) {
          if (!item.done) {
            newTodos.push(item);
          }
        });
        return newTodos;
      } else if (this.visibility == "completed") {
        let newTodos = [];
        this.todos.forEach(function (item) {
          if (item.done) {
            newTodos.push(item);
          }
        });
        return newTodos;
      }
    },
  },
});
