class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug, :avg_score

  has_many :reviews
end
