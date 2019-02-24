class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :forms
  has_many :user_trips
  has_many :trips, through: :user_trips
  has_many :hosted_trips, class_name: :Trip, foreign_key: 'host_id'
end
