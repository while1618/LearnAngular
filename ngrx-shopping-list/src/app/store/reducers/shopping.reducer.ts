import { createReducer, on } from '@ngrx/store';
import {
  AddItemAction,
  AddItemFailureAction,
  AddItemSuccessAction,
  DeleteItemAction,
  DeleteItemFailureAction,
  DeleteItemSuccessAction,
  LoadShoppingAction,
  LoadShoppingFailureAction,
  LoadShoppingSuccessAction,
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
  on(LoadShoppingAction, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(LoadShoppingSuccessAction, (state, action) => ({
    ...state,
    list: action.shoppingList,
    loading: false,
  })),
  on(LoadShoppingFailureAction, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  })),
  on(AddItemAction, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(AddItemSuccessAction, (state, action) => ({
    ...state,
    list: [...state.list, action.shoppingItem],
    loading: false,
  })),
  on(AddItemFailureAction, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  })),
  on(DeleteItemAction, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(DeleteItemSuccessAction, (state, action) => ({
    ...state,
    list: state.list.filter((item) => item.id !== action.itemId),
    loading: false,
  })),
  on(DeleteItemFailureAction, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  }))
);
