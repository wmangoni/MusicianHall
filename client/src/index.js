Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})