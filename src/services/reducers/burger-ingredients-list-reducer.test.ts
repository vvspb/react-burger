import { ingredientsReducer } from './burger-ingredients-list-reducer';
import * as types from '../actions-types/burger-ingredients-list-action-type';

describe('ingredientsReducer', () => {
    it('should return the initial state', () => {
        expect(ingredientsReducer(undefined, {} as any)).toEqual({
            ingredients: [],
            isLoading: false,
            hasError: false,
        })
    })

    it('should handle GET_INGREDIENTS', () => {

        expect(ingredientsReducer({
            ingredients: [],
            isLoading: false,
            hasError: false,
        },
            {
                type: types.GET_INGREDIENTS
            }
        )).toEqual({
            ingredients: [],
            isLoading: true,
            hasError: false,
        })
    })

    it('should handle GET_INGREDIENTS_SUCCESS', () => {


        expect(ingredientsReducer({
            ingredients: [],
            isLoading: false,
            hasError: false,
        },
            {
                type: types.GET_INGREDIENTS_SUCCESS,
                payload: [{
                    _id: 'test',
                    name: 'test',
                    type: 'test',
                    proteins: 0,
                    fat: 0,
                    carbohydrates: 0,
                    calories: 0,
                    price: 0,
                    image: 'test',
                    image_mobile: 'test',
                    image_large: 'test',
                    __v: 0,
                }]
            }
        )).toEqual({
            ingredients: [{
                _id: 'test',
                name: 'test',
                type: 'test',
                proteins: 0,
                fat: 0,
                carbohydrates: 0,
                calories: 0,
                price: 0,
                image: 'test',
                image_mobile: 'test',
                image_large: 'test',
                __v: 0,
            }],
            isLoading: false,
            hasError: false,
        })
    })

    it('should handle GET_INGREDIENTS_FAILURE', () => {

        expect(ingredientsReducer({
            ingredients: [],
            isLoading: false,
            hasError: false,
        },
            {
                type: types.GET_INGREDIENTS_FAILURE
            }
        )).toEqual({
            ingredients: [],
            isLoading: false,
            hasError: true,
        })
    })
})
