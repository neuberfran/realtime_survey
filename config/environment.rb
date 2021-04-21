require File.expand_path('../application', __FILE__)

# Initialize the rails application
RealtimeSurvey::Application.initialize!

require 'pusher'

Pusher.app_id = '158892'
Pusher.key = '3277c48ffd35616fee78'
Pusher.secret = 'af028a9f25039763818c'
Pusher.cluster = 'mt11'
