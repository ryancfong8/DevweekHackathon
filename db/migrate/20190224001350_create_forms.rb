class CreateForms < ActiveRecord::Migration[5.1]
  def change
    create_table :forms do |t|
      t.integer :trip_id
      t.integer :user_id
      t.string :form
      t.boolean :signed
      t.timestamps
    end
  end
end
