import {
  ShoppingAction,
  ShoppingActionTypes,
} from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

const initialState: Array<ShoppingItem> = [
  {
    id: '123',
    name: 'Beer',
  },
];

export function ShoppingReducer(
  state: Array<ShoppingItem> = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingActionTypes.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
