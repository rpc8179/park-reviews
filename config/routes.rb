Rails.application.routes.draw do
  root 'parks#index'
  devise_for :users
  resources :parks, only: [:index, :show]
end
