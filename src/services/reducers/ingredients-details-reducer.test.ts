import { ingredientsDetailsReducer } from './ingredients-details-reducer';
import { INGREDIENT_CURRENT } from '../actions-types/ingredients-details-action-type';

const currentIngredient = {
    _id: '',
    name: '',
    type: '',
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: '',
    image_mobile: '',
    image_large: '',
    __v: 0,
}

const ingredient = {
    _id: 'test',
    name: 'test',
    type: 'bun',
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: 'test',
    image_mobile: 'test',
    image_large: 'test',
    __v: 0,
}

describe('ingredients-details-reducer', () => {
    it('should return the initial state', () => {
        expect(ingredientsDetailsReducer(undefined, {} as any)).toEqual({
            ingredientCurrent: currentIngredient
        })
    })

    it('should handle INGREDIENT_CURRENT', () => {
        expect(ingredientsDetailsReducer({ingredientCurrent: currentIngredient}, {
            type: INGREDIENT_CURRENT,
            payload: {
                ingredient
            }
        })).toEqual({
            ingredientCurrent: ingredient
        })
    })
})