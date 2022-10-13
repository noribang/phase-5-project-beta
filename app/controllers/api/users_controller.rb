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
        ## @current_user use with sessions cookie
        # render json: @current_user

        user = User.find(params[:id])
        render json: user
    end

    private 

    def user_params
        # has_secure_password has instance methods :password and :password_confirmation 
        params.permit(:username, :password, :password_confirmation)
    end
end
