class UserSmsMessage < ApplicationRecord
  belongs_to :sms_message
  belongs_to :user
end
