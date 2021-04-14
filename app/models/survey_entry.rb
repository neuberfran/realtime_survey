class SurveyEntry < ActiveRecord::Base
        FORM_OPTIONS = ['ruby', 'php', 'python', 'java', 'other']

        def self.get_results
                counts = SurveyEntry.group(:choice).count	
                FORM_OPTIONS.map do |o|
                  {
                        'title' => o,
                        'votes' => counts[o]||0
                  }
                end
        end

end
