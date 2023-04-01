class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :semester, :score1, :score2, :score3, :score4, :course_id
end
