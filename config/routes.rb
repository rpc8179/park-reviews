Rails.application.routes.draw do
  root 'parks#index'
  devise_for :users

  resources :parks do
    resources :reviews, except: [:edit]
  end
  resources :reviews

  namespace :api do
    namespace :v1 do
      resources :parks, except: [:destroy] do
        resources :reviews, except: [:destroy]
      end
      resources :reviews
    end
  end


end
