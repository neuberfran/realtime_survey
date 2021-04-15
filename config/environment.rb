require File.expand_path('../application', __FILE__)

# Initialize the rails application
RealtimeSurvey::Application.initialize!

require 'pusher'

Pusher.app_id = '99999'
Pusher.key = '9999999999999999999999'
Pusher.secret = 'aaaccccddddeeeffffddd'
