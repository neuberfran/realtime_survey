require File.expand_path('../application', __FILE__)

# Initialize the rails application
RealtimeSurvey::Application.initialize!

require 'pusher'

Pusher.app_id = '9999999'
Pusher.key = '999999999616fee78'
Pusher.secret = 'aaaaaaaaaaaaaaaaa818c'
Pusher.cluster = 'mt11'
