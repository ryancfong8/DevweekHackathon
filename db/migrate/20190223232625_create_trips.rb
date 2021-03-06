class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :name
      t.date :start_date
      t.datetime :start_time
      t.date :end_date
      t.datetime :end_time
      t.string :itinerary
      t.string :transportation
      t.float :drop_off_location_long
      t.float :drop_off_location_lat
      t.float :pick_up_location_long
      t.float :pick_up_location_lat
      t.references :host, index: true, foreign_key: { to_table: :users }, null: false
      t.timestamps
    end
  end
end
