## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|
|mail_address|integer|null: false|
|password|integer|null: false|

### Association
- has_many :group, through: :groups_users
- has_many :messages
- has_many :groups_users


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|


### Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :groups_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
|image|integer|
|main|text|null: false|


### Association
- belongs_to :user
- belongs_to :group


