class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :title

      t.timestamps
    end
  end
end
