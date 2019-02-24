class CreateForms < ActiveRecord::Migration[5.1]
  def change
    create_table :forms do |t|
      t.references :trip, index: true, foreign_key: true, null: false
      t.references :user, index: true, foreign_key: true, null: false
      t.string :form
      t.boolean :signed, null: false, default: false
      t.timestamps
    end
  end
end
