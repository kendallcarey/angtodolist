var app = angular.module("todo", []);

app.controller('todoController', ['$http', '$scope', function($http, $scope) {
  $http.get('/todos')
  .success(function(data){
    $scope.todos = data;
    console.log(data)
  }).error(function() {
    alert("shit's weak")
  });
  $scope.addTodo = function() {
    console.log('added todo');
    $http.post('./todos', {todo: {title: $scope.formText}})
    .success(function(data){
      $scope.todos.push(data)
      $scope.formText = ""
    })
    .error(function() {
      alert("you're wrong!")
    });
  };
    // $scope.deleteTodo = function(todo) {
    // $scope.todo = todo;
    // $http.delete('./todos/'+todo.id)
    // .success(function(todo){
    //   $scope.todos.delete(todo.id)
    // })
  }
}]);