Rails.application.routes.draw do
  namespace :api do

    resources :user_sms_messages

    # GET    /api/sms_messages(.:format)     api/sms_messages#index
    # POST   /api/sms_messages(.:format)     api/sms_messages#create
    # GET    /api/sms_messages/:id(.:format) api/sms_messages#show
    # PATCH  /api/sms_messages/:id(.:format) api/sms_messages#update
    # PUT    /api/sms_messages/:id(.:format) api/sms_messages#update
    # DELETE /api/sms_messages/:id(.:format) api/sms_messages#destroy

    # resources :sms_messages, only: [:index, :show, :create, :update, :destroy]
    resources :sms_messages
        
    # GET    /api/users(.:format)            api/users#index
    # POST   /api/signup(.:format)           api/users#create
    # DELETE /api/users/:id(.:format)        api/users#destroy
    # POST   /api/login(.:format)            api/sessions#create
    # DELETE /api/logout(.:format)           api/sessions#destroy
    # GET    /api/me(.:format)               api/users#show
    
    # resources :users

    # Read all users.
    get "/users", to: "users#index"
    # Create user. Signup user.
    post "/signup", to: "users#create"
    ## Read single user.
    # get "/users/:id", to: "users#show"
    ## Destroy single user
    delete "/users/:id", to: "users#destroy"

    ## Sessions login
    post "/login", to: "sessions#create"
    ## Sessions logout
    delete "/logout", to: "sessions#destroy" 

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
