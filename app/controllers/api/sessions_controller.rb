class Api::SessionsController < ApplicationController

    # post "/login", to:"sessions#create"
    # Store user.id in session
    skip_before_action :authorize

    def create
        ## Before password protection
        # user = User.find_by(username: params[:username])
        # session[:user_id] = user.id
        # render json: user

        ## Password protection.
        # &. is "safe navigation operator"
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password"}, status: :unauthorized
        end
    end

    # delete "/logout", to: "sessions#destroy"
    # Logout
    def destroy
        session.delete :user_id
        head :no_content
    end

end
