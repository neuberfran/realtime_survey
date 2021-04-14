require File.expand_path('../application', __FILE__)

# Initialize the rails application
RealtimeSurvey::Application.initialize!

require 'pusher'

Pusher.app_id = '999999'
Pusher.key = '999999999999999999999'
Pusher.secret = '99999999999999999'
