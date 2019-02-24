class Trip < ApplicationRecord
  belongs_to :host, class_name: :User, foreign_key: 'user_id'
end
