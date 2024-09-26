import { ProductItem } from '@prisma/client';
import { PizzaType, pizzaSizes } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';

/**
 * Returns a list of pizza sizes with availability for the given pizza type.
 * A pizza size is available if there exists a product item with the given type and size.
 * @param {PizzaType} type - Pizza type
 * @param {ProductItem[]} items - List of product items
 * @returns {Variant[]} List of available pizza sizes
 */
export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
};
