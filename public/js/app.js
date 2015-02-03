var app = angular.module("todo", []);

app.controller('todoController', ['$http', '$scope', '$element', function($http, $scope, $element) {
  $http.get('/todos')
  .success(function(data){
    $scope.todos = data;
    for (var i=$scope.todos.length - 1; i>=0; i--) {
      $scope.todos[i].editing = false;
    }
    console.log(data)
  }).error(function() {
    alert("shit's weak")
  });
  $scope.addTodo = function() {
    console.log('added todo');
    $http.post('./todos', {todo: {title: $scope.formText}})
    .success(function(data){
      data.editing = false;
      $scope.todos.push(data)
      $scope.formText = ""
    })
    .error(function() {
      alert("you're wrong!")
    });
  };
  $scope.removeTodo = function(todo) {
    $scope.todo = todo;
      // console.log(todo.id)
      $http.delete('./todos/'+todo.id)
      .success(function(data){
        var index = $scope.todos.indexOf(todo)
        $scope.todos.splice(index, 1)
      })
      .error(function(data) {
        alert("shit's weak")
      });
    }
    $scope.editTodo = function(todo) {
      $scope.editText = todo.title;
      todo.editing = true;
    }
    $scope.submitEdit = function(todo){
      console.log('added todo');
      var index = $scope.todos.indexOf(todo);
      $http.put('./todos/' + todo.id, {todo: {title: $scope.editText}})
      .success(function(data){
        data.editing = false;
        $scope.todos[index] = data;
        $scope.formText = "";
      })
      .error(function(){
        alert('shits broke again')
      })
    }
  }]);
