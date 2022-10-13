class User < ApplicationRecord
    # Bundle install gem 'bcrypt'
    has_secure_password

end
