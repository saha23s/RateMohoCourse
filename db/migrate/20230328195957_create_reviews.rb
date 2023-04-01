class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :description
      t.string :semester
      t.integer :score1
      t.integer :score2
      t.integer :score3
      t.integer :score4
      t.belongs_to :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
