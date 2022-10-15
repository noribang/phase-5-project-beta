class SmsMessage < ApplicationRecord

    has_many :user_sms_messages
    has_many :users, through: :user_sms_messages

end
