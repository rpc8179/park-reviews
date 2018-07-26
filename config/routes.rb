Rails.application.routes.draw do
  root 'parks#index'
  devise_for :users

  # get "/parks/new", to: 'parks#index'
  resources :parks, only: [:index, :show, :new, :create]

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show, :new, :create]
    end
  end
end
