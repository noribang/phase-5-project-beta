class CreateUserSmsMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :user_sms_messages do |t|
      t.references :sms_message, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
