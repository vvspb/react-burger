import { TIngredients } from "./types";

export const funcSumOrderAndIngerdientsOrder = (orderIngredients: string[], ingredients: TIngredients[]) => {
    let sumOrder = 0;
    const ingredientsOrder = [];
    for (let i = 0; i < orderIngredients?.length; i++) {
      for (let y = 0; y < ingredients?.length; y++) {
        if (orderIngredients[i] === ingredients[y]._id) {
          sumOrder = sumOrder + ingredients[y].price;
          ingredientsOrder.push({
            image: ingredients[y].image,
            name: ingredients[y].name,
            price: ingredients[y].price,
            type: ingredients[y].type,
            _id: ingredients[y]._id
          })
        }
      }
    }
    return { sumOrder, ingredientsOrder }
  }