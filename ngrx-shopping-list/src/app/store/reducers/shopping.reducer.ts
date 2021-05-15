import { createReducer, on } from '@ngrx/store';
import { errorOccurred } from '../actions/error.actions';
import {
  addItemAction,
  addItemSuccessAction,
  deleteItemAction,
  deleteItemSuccessAction,
  loadShoppingAction,
  loadShoppingSuccessAction,
} from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

export interface ShoppingState {
  list: ShoppingItem[];
  loading: boolean;
  error: Error;
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined,
};

export const ShoppingReducer = createReducer<ShoppingState>(
  initialState,
  on(errorOccurred, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  })),
  on(loadShoppingAction, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(loadShoppingSuccessAction, (state, action) => ({
    ...state,
    list: action.shoppingList,
    loading: false,
  })),
  on(addItemAction, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(addItemSuccessAction, (state, action) => ({
    ...state,
    list: [...state.list, action.shoppingItem],
    loading: false,
  })),
  on(deleteItemAction, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(deleteItemSuccessAction, (state, action) => ({
    ...state,
    list: state.list.filter((item) => item.id !== action.itemId),
    loading: false,
  }))
);
