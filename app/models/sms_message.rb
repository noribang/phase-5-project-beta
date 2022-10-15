class SmsMessage < ApplicationRecord

    has_many :user_sms_messages, dependent: :destroy
    has_many :users, through: :user_sms_messages, dependent: :destroy

end
