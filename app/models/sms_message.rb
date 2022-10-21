class SmsMessage < ApplicationRecord

    has_many :user_sms_messages, dependent: :destroy
    has_many :users, through: :user_sms_messages, dependent: :destroy

    # Validation
    validates :mobile_number, length: { is: 11 }
    validates :message, length: { maximum: 100 }

end
