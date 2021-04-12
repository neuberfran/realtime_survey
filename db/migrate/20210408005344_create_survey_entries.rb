class CreateSurveyEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :survey_entries do |t|
      t.string :choice

      t.timestamps
    end
  end
end
