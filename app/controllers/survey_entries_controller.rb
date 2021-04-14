class SurveyEntriesController < ApplicationController
  def index
    @survey_entries = SurveyEntry.get_results
  end

  def create
    SurveyEntry.create(:choice => params[:choice])
    Pusher['neuberfran'].trigger('data-changed', SurveyEntry.get_results.to_json)
    
    redirect_to '/'
  end
end
