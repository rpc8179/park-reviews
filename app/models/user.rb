class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def admin?
   role === "admin"
  end

  has_many :reviews
  has_many :review_upvotes
  mount_uploader :profile_photo, ProfilePhotoUploader
end
