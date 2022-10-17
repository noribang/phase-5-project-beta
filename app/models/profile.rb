class Profile < ApplicationRecord
  belongs_to :user

  # Validation
  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :email, uniqueness: true
  
end
