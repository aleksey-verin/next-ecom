import { calcTotalPizzaPrice } from './calc-total-pizza-price';
import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSize, PizzaType, mapPizzaType } from '../constants/pizza';

/**
 * Calculate pizza details (price and text description)
 *
 * @param type - type of pizza
 * @param size - size of pizza
 * @param items - list of product items
 * @param ingredients - list of ingredients
 * @param selectedIngredients - set of selected ingredients
 * @returns {totalPrice: number, textDetails: string}
 */
export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

  return { totalPrice, textDetails };
};
