class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.boolean :user_id
      t.boolean :car_id
      t.string :body

      t.timestamps
    end
  end
end
