import { burgerConstructorReducer } from './burger-constructor-reducer';
import * as types from '../actions-types/burger-constructor-action-type';

const ingredients = [{
    __id: 'test5623.2763553',
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
},
{
    __id: 'test8623.2763553',
    _id: 'test',
    name: 'test',
    type: 'main',
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

const initialState = {
    choiceIngredients: [],
    choiceBun: null,
}

describe('burger-constructor-reducer', () => {
    it('should return the initial state', () => {
        expect(burgerConstructorReducer(undefined, {} as any)).toEqual(initialState)
    })

    it('should handle ADD_INGREDIENT_CONSTRUCTOR and return choiceBun is not null', () => {
        let copyChoiceBun = ingredients.find(item => item.type === 'bun');

        expect(burgerConstructorReducer(initialState,
            {
                type: types.ADD_INGREDIENT_CONSTRUCTOR,
                payload: {
                    id: 'test',
                    ingredients: ingredients
                }
            }
        )).toEqual(
            {
                choiceIngredients: ingredients.filter(item => item.type !== 'bun'),
                choiceBun: copyChoiceBun
            }
        )
    })

    it('should handle ADD_INGREDIENT_CONSTRUCTOR and return choiceBun is null', () => {
        let copyChoiceBun = null
        expect(burgerConstructorReducer(initialState,
            {
                type: types.ADD_INGREDIENT_CONSTRUCTOR,
                payload: {
                    id: 'test',
                    ingredients: ingredients.filter(item => item.type !== 'bun')
                }
            }
        )).toEqual(
            {
                choiceIngredients: ingredients.filter(item => item.type !== 'bun'),
                choiceBun: copyChoiceBun
            }
        )
    })

    it('should handle DELETE_INGREDIENT_CONSTRUCTOR', () => {
        expect(burgerConstructorReducer({
            ...initialState,
            choiceIngredients: ingredients.filter(item => item.type !== 'bun')
        },
            {
                type: types.DELETE_INGREDIENT_CONSTRUCTOR,
                payload: {
                    itemId: 'test5623.2763553'
                }
            }
        )).toEqual(
            {
                ...initialState,
                choiceIngredients: ingredients.filter(item => item.__id !== 'test5623.2763553')
            }
        )
    })

    it('should handle  DELETE_ALL_INGREDIENTS_CONSTRUCTOR', () => {
        expect(burgerConstructorReducer({
            choiceBun: ingredients.find(item => item.type === 'bun')!,
            choiceIngredients: ingredients.filter(item => item.type !== 'bun')
        },
            {
                type: types.DELETE_ALL_INGREDIENTS_CONSTRUCTOR
            }
        )).toEqual(
            {
                ...initialState
            }
        )
    })

    it('should handle  SORT_INGRIDIENTS_CONSTRUCTOR', () => {
        expect(burgerConstructorReducer({
            ...initialState,
            choiceIngredients: ingredients
        },
            {
                type: types.SORT_INGRIDIENTS_CONSTRUCTOR,
                payload: {
                    dragIndex: 0,
                    hoverIndex: 1
                }
            }
        )).toEqual(
            {
                ...initialState,
                choiceIngredients: [{
                    __id: 'test8623.2763553',
                    _id: 'test',
                    name: 'test',
                    type: 'main',
                    proteins: 0,
                    fat: 0,
                    carbohydrates: 0,
                    calories: 0,
                    price: 0,
                    image: 'test',
                    image_mobile: 'test',
                    image_large: 'test',
                    __v: 0,
                }, {
                    __id: 'test5623.2763553',
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
                }]
            }
        )
    })

})
