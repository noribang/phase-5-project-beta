require 'twilio-ruby'

class Api::SmsMessagesController < ApplicationController

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

end
