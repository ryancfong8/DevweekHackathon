Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do  
    resources :trips
    resources :forms
  end
  root "static_pages#root"
  get "/en-us", to: 'static_pages#root'
  get "/en-us/*path", to: 'static_pages#root'
end
