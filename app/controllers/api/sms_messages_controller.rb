require 'twilio-ruby'

class Api::SmsMessagesController < ApplicationController

    # GET /api/sms_messages
    def index 
        # Return all instances
        # smss = SmsMessage.all
        smss = @current_user.sms_messages.all
        render json: smss, include: :users
    end

    # GET /api/sms_messages/:id
    def show
        # Return sms message instance by params[:id]
        sms = find_sms
        render json: sms
        # rescue ActiveRecord::RecordNotFound    
        #     render_not_found_response
    end

    # POST /api/sms_messages  api/sms_messages#create
    def create
        ## Strong params used
        # sms = SmsMessage.create(sms_message_params)
        # debugger;
        sms = @current_user.sms_messages.create(sms_message_params)
        
        ## Twilio API
        client = Twilio::REST::Client.new(ENV['ACCOUNT_SID'], ENV['AUTH_TOKEN'])

        client.messages.create(
            from: ENV['TWILIO_NUMBER'],
            to: sms_message_params['mobile_number'],
            body: sms_message_params['message']
        )

        ## render response
        # render json: client
        render json: sms, status: :created
    end

    # PATCH /api/sms_messages/:id
    # update any attribute
    def update
        # Find the sms message by id from route params
        # Update sms message using strong params from body of request
        # Render response
        sms = find_sms    
        sms.update(sms_message_params)
        render json: sms
        # # rescue ActiveRecord::RecordNotFound    
        # #     render_not_found_response   

    end

    # DELETE /api/sms_messages/:id
    def destroy    
        # Find the sms message by id from route params
        # If found destroy sms message object from db
        # Render response
        sms = find_sms
        sms.destroy
        head :no_content
        # # rescue ActiveRecord::RecordNotFound    
        # #     render_not_found_response
    end


    private

    def sms_message_params
        params.require(:sms_message).permit(:mobile_number, :message)
    end

    # Whenever need to find single SmsMessage
    def find_sms
        # Returns nil if not found
        # sms = SmsMessage.find_by(id: params[:id])
        # Return ActiveRecord exception
        sms = SmsMessage.find(params[:id])
        # sms = @current_user.sms_messages.find(params[:id])
    end

end
