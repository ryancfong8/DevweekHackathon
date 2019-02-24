class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.references :trip, index: true, foreign_key: true, null:false
      t.float :long
      t.float :lat
      t.timestamps
    end
  end
end
