class User < ApplicationRecord
    # Bundle install gem 'bcrypt' in order to 
    # use macro has_secure_password
    has_secure_password

    has_many :user_sms_messages, dependent: :destroy
    has_many :sms_messages, through: :user_sms_messages, dependent: :destroy

end
