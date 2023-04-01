class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug

  has_many :reviews
end
