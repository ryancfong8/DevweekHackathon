class Form < ApplicationRecord
  belongs_to :user
  belongs_to :trip
end
