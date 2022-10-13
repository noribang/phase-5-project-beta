Rails.application.routes.draw do
  namespace :api do
    # POST /api/sms_messages  api/sms_messages#create
    resources :sms_messages, only: [:index, :show, :create, :update, :destroy]
    # resources :users

    # Read all users.
    get "/users", to: "users#index"
    # Create user.
    post "/signup", to: "users#create"
    # # Read single user.
    # get "/users/:id", to: "users#show"

    ## Sessions login
    post "/login", to:"sessions#create"
    ## Sessions stay logged in. 
    # Route to retrieve user's data from db using sessions hash.
    get "/me", to: "users#show"


    # resources :recipes, only: [:index, :create]
    # post "/signup", to: "users#create"
    # get "/me", to: "users#show"
    # post "/login", to: "sessions#create"
    # delete "/logout", to: "sessions#destroy"
  end
  # all other routes will be load our React application
  # this route definition matches:
  # - *path: all paths not matched by one of the routes defined above
  # - constraints:
  #   - !req.xhr?: it's not a XHR (fetch) request
  #   - req.format.html?: it's a request for a HTML document
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
