class Api::UsersController < ApplicationController

    # GET /api/users
    def index
        # Return all user instances
        user = User.all
        render json: user
    end

    # Bundle install gem 'bcrypt'
    # has_secure_password in User model
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show 
        # # Read single user.
        # user = User.find(params[:id])
        # render json: user
        
        # get "/me", to: "users#show"
        # Find using sessions hash.
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized."}, status: :unauthorized
        end
        
        ## @current_user use with sessions cookie
        # render json: @current_user
    end

    private 

    def user_params
        # has_secure_password has instance methods :password and :password_confirmation 
        params.permit(:username, :password, :password_confirmation)
    end
end
