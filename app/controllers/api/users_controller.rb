class Api::UsersController < ApplicationController
    ###############################################################
    # Error handling and filters moved to Application_controller. #
    # All controllers will inherit from Application_controller.   #
    ###############################################################
    # Authorize filter runs before any controller methods.
    # before_action :authorize
    # Authorize filter runs before any controller methods,
    # except, create method.    
    # skip_before_action :authorize, only: :create

    # GET /api/users
    def index
        # Return all user instances
        user = User.all
        render json: user
    end

    # Bundle install gem 'bcrypt'
    # has_secure_password in User model
    def create
        # user = User.create!(user_params)
        # render json: user, status: :created

        ## Password protection.
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
        end
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

    def destroy
        # Find the user by id from route params
        # If found destroy user object from db
        # Render response
        session[:user_id] = nil
        @user = User.find(params[:id])
        @user.destroy
        head :no_content

    end

    private 

    def user_params
        # has_secure_password has instance methods :password and :password_confirmation 
        params.permit(:username, :password, :password_confirmation)
    end

    def authorize
      return render json: { error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
