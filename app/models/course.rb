class Course < ApplicationRecord
    has_many :reviews

    before_create :slugify
    def slugify
        self.slug = name.parameterize
    end

    def avg_score
        # you have to take average of four different score, right now only going for one score
        reviews.average(:score1).round(2).to_f
    end
    
end
