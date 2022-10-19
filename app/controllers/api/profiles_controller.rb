class Api::ProfilesController < ApplicationController
    ###############################################################
    # Error handling and filters moved to Application_controller. #
    # All controllers will inherit from Application_controller.   #
    ###############################################################

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
        # profile = @current_user.profile.all
        profile = @current_user.profiles.all
        # profile = @current_user.includes(:profiles).all
        # render json: profile
        render json: profile, include: :user
    end

    # POST   /api/profiles
    def create
        ## Strong params used
        ## render response
        profile = @current_user.profiles.create(profile_params)
        # profile = @current_user.create_profile(profile_params)
        # profile = Profile.create(profile_params)
        render json: profile, status: :created
    end

    # # GET  /api/profiles_one/
    # def show_one
    #     # Return sms message instance by params[:id]
    #     # sms = find_sms
    #     # render json: sms

    #     profile = @current_user.profile.find(2)
    #     render json: profile
    #     # rescue ActiveRecord::RecordNotFound    
    #     #     render_not_found_response
    # end

    # PATCH  /api/profiles/:id(.:format)     api/profiles#update
    def update
        # Find the profile by id from route params
        # Update profile using strong params from body of request
        # Render response
        profile = find_profile    
        profile.update(profile_params)
        render json: profile
        # # rescue ActiveRecord::RecordNotFound    
        # #     render_not_found_response   


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
        # profile = Profile.find(params[:id])
        profile = @current_user.profiles.find(params[:id])
    end


end
