require 'twilio-ruby'

class SmsMessagesController < ApplicationController

    # POST /api/sms_messages  api/sms_messages#create
    def create
        # Twilio API
        client = Twilio::REST::Client.new(ACCOUNT_SID, AUTH_TOKEN)

        client.messages.create(
            from: TWILIO_NUMBER,
            to: sms_message_params['mobile_number'],
            body: sms_message_params['message']
        )

        render json: client
    end

    private

    def sms_message_params
        params.require(:sms_message).permit(:mobile_number, :message)
    end

end
