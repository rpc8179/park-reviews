Rails.application.routes.draw do
  root 'parks#index'
  devise_for :users

  resources :parks, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :parks
    end
  end
end
