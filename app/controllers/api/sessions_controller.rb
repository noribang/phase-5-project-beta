class Api::SessionsController < ApplicationController

    # post "/login", to:"sessions#create"
    # Store user.id in session
    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end
end
