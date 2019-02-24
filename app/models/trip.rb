class Trip < ApplicationRecord
  belongs_to :host, class_name: :User, foreign_key: 'host_id'
  has_many :locations
  has_many :forms
end
