class User < ApplicationRecord
    # Bundle install gem 'bcrypt' in order to 
    # use macro has_secure_password
    has_secure_password

end
