require 'json'
require 'open-uri'

url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'

ingredients = JSON.parse(open(url).read)['drinks']

ingredients.each do |ingredient|
  Ingredient.create(name: ingredient["strIngredient1"])
end

ingredient = Ingredient.last
cocktail = Cocktail.create(name: "White Russian")
dose = Dose.new(description: "2cl")

dose.ingredient = ingredient
dose.cocktail = cocktail
dose.save
