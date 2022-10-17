class User < ApplicationRecord
    # Bundle install gem 'bcrypt' in order to 
    # use macro has_secure_password
    has_secure_password

    has_many :user_sms_messages, dependent: :destroy
    has_many :sms_messages, through: :user_sms_messages, dependent: :destroy
    
    has_many :profiles, dependent: :destroy

    # Validation
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
end
