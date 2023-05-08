class Course < ApplicationRecord
    has_many :reviews

    before_create :slugify
    def slugify
        self.slug = name.parameterize
    end

    def avg_score
        return 0 unless reviews.count.positive?
      
        # Calculate the sum of all non-null scores
        sum = [:score1, :score2, :score3, :score4].inject(0) do |sum, score|
          sum + (reviews.average(score) || 0)
        end
      
        # Calculate the average score
        average_score = sum / 4.0
      
        # Round the average score to 2 decimal places
        average_score.round(1)
      end
      
      
end
