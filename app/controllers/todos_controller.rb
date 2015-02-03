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
    Todo.find(params[:id]).destroy
  end

  def update
    todo = Todo.find_by_id(params[:id])
    todo.update_attributes(todo_params)
  end

  def todo_params
    params.require(:todo).permit(:title)
  end
end