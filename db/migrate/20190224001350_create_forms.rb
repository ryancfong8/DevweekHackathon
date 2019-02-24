class CreateForms < ActiveRecord::Migration[5.1]
  def change
    create_table :forms do |t|
      t.references :trip, index: true
      t.references :user, index: true
      t.string :form
      t.boolean :signed
      t.timestamps
    end
  end
end
