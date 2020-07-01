## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|mail_address|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|

### Association
- has_many :group
- has_many :tweet


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|tweet_id|integer|null: false, foreign_key: true|

### Association
- has_many :user


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- has_many :group
- has_many :tweet


## tweetsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|main|text|null: false|


### Association
- belongs_to :user


