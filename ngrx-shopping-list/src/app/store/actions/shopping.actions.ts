import { createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

const LOAD_SHOPPING = '[SHOPPING] Load Shopping';
const LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success';
const ADD_ITEM = '[SHOPPING] Add Item';
const ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success';
const DELETE_ITEM = '[SHOPPING] Delete Item';
const DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success';

export const loadShoppingAction = createAction(LOAD_SHOPPING);

export const loadShoppingSuccessAction = createAction(
  LOAD_SHOPPING_SUCCESS,
  props<{ shoppingList: Array<ShoppingItem> }>()
);

export const addItemAction = createAction(
  ADD_ITEM,
  props<{ shoppingItem: ShoppingItem }>()
);

export const addItemSuccessAction = createAction(
  ADD_ITEM_SUCCESS,
  props<{ shoppingItem: ShoppingItem }>()
);

export const deleteItemAction = createAction(
  DELETE_ITEM,
  props<{ itemId: string }>()
);

export const deleteItemSuccessAction = createAction(
  DELETE_ITEM_SUCCESS,
  props<{ itemId: string }>()
);
