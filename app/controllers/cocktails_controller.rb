class CocktailsController < ApplicationController
  def index
    @cocktails = Cocktail.all
  end

  def show
    @cocktail = Cocktail.find(params[:id])
  end

  def new
    @cocktail = Cocktail.new
  end

  def create
    @cocktail = Cocktail.create(set_ingredients)
    raise
  end

  private

  def set_ingredients
    params.require(:cocktail).permit(:name)
  end
end
