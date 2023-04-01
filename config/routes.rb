Rails.application.routes.draw do
  root 'main#index'

  namespace :api do
    namespace :v1 do
      resources :courses, param: :slug
      resources :reviews, only: %i[create destroy]
    end
  end

  get '*path', to: 'main#index', via: :all
end

