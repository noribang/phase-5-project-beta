require 'twilio-ruby'

class Api::SmsMessagesController < ApplicationController

    # GET /api/sms_messages
    def index 
        # birds = Bird.all
        # render json: birds
        # All instances
        sms = SmsMessage.all
        render json: sms
    end

    # GET /api/sms_messages/:id
    def show
        # bird = find_bird
        # render json: bird
    # rescue ActiveRecord::RecordNotFound    
    #     render_not_found_response

        sms = find_sms
        render json: sms
    end

    # POST /api/sms_messages  api/sms_messages#create
    def create
        ## Strong params used
        sms = SmsMessage.create(sms_message_params)
        
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
    end

end
