class TodosController < ApplicationController
  def index
    todos = Todo.all
    render json: todos
  end

  def create
    todo = Todo.create(todo_params)
    render json: todo
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
  end

  def todo_params
    params.require(:todo).permit(:title)
  end
end