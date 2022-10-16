class Api::ProfilesController < ApplicationController
    # GET    /api/profiles(.:format)         api/profiles#index
    # POST   /api/profiles(.:format)         api/profiles#create
    # GET    /api/profiles/:id(.:format)     api/profiles#show
    # PATCH  /api/profiles/:id(.:format)     api/profiles#update
    # PUT    /api/profiles/:id(.:format)     api/profiles#update
    # DELETE /api/profiles/:id(.:format)     api/profiles#destroy


    # GET /api/profiles
    def index 
        # Return all instances
        # profile = Profile.all
        profile = @current_user.profile.all
        render json: profile
        # render json: profile, include: :users
    end

    # POST   /api/profiles
    def create
        ## Strong params used
        ## render response
        profile = @current_user.profile.create(user_params)
        render json: profile, status: :created
    end

    # DELETE /api/profiles/:id
    def destroy
        # Find the profile by id from route params
        # If found destroy profile object from db
        # Render response        
        profile = find_profile
        profile.destroy
        head :no_content
        # # rescue ActiveRecord::RecordNotFound    
        # #     render_not_found_response
    end

    private

    def profile_params
        params.permit(:firstname, :lastname, :email, :bio)
    end

    # Whenever need to find single SmsMessage
    def find_profile
        # Returns nil if not found
        # profile = Profile.find_by(id: params[:id])
        # Return ActiveRecord exception
        profile = Profile.find(params[:id])
        # profile = @current_user.profile.find(params[:id])
    end


end
