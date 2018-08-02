Rails.application.routes.draw do
  root 'parks#index'
  devise_for :users

  resources :parks, only: [:index, :show, :new, :create, :edit, :update, :destroy] do
    resources :reviews, only: [:index, :new, :show, :create, :destroy]
  end
  resources :reviews

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show, :new, :create, :update, :edit, :destroy] do
        resources :reviews, only: [:index, :show, :new, :create, :update, :edit, :destroy]
      end
      resources :reviews
    end
  end


end
