class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :car_id
      t.string :body
      t.string :username

      t.timestamps
    end
  end
end
