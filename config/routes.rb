Rails.application.routes.draw do
  root 'parks#index'
  devise_for :users


  resources :parks, only: [:index, :show, :new, :create] do
    resources :reviews, only: [:index, :new, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show, :new, :create] do
        resources :reviews, only: [:index,:show, :new, :create]
      end
      resources :reviews
    end
  end


end
