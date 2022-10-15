class User < ApplicationRecord
    # Bundle install gem 'bcrypt' in order to 
    # use macro has_secure_password
    has_secure_password

    has_many :user_sms_messages
    has_many :sms_messages, through: :user_sms_messages

end
