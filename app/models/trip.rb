class Trip < ApplicationRecord
  belongs_to :host, class_name: :User, foreign_key: 'host_id'
  has_many :locations
  has_many :forms
  has_many :user_trips
  has_many :members, through: :user_trips, source: :user
end
