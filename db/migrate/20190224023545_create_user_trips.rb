class CreateUserTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :user_trips do |t|
      t.references :user, index: true, foreign_key: true, null: false
      t.references :trip, index: true, foreign_key: true, null: false
      t.timestamps
    end
  end
end
