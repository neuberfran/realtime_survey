require "test_helper"

class SurveyEntriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get survey_entries_index_url
    assert_response :success
  end

  test "should get create" do
    get survey_entries_create_url
    assert_response :success
  end
end
