Rails.application.routes.draw do
  root 'parks#index'
  devise_for :users

  resources :parks, only: [:index, :show, :new, :create, :edit, :update, :destroy] do
    resources :reviews, only: [:index, :new, :create, :edit]
  end

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show, :new, :create, :update, :edit] do
        resources :reviews, only: [:index,:show, :new, :create]
      end
      resources :reviews
    end
  end


end
