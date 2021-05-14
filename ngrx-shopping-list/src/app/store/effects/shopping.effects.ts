import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShoppingService } from 'src/app/shopping.service';
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
  ShoppingActionTypes,
} from '../actions/shopping.actions';

@Injectable()
export class ShoppingEffects {
  loadShopping$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
      mergeMap(() =>
        this.shoppingService.getShoppingItem().pipe(
          map((data) => new LoadShoppingSuccessAction(data)),
          catchError((error) => of(new LoadShoppingFailureAction(error)))
        )
      )
    );
  });

  addShoppingItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
      mergeMap((data) =>
        this.shoppingService.addShoppingItem(data.payload).pipe(
          map(() => new AddItemSuccessAction(data.payload)),
          catchError((error) => of(new AddItemFailureAction(error)))
        )
      )
    );
  });

  deleteShoppingItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
      mergeMap((data) =>
        this.shoppingService.deleteShoppingItem(data.payload).pipe(
          map(() => new DeleteItemSuccessAction(data.payload)),
          catchError((error) => of(new DeleteItemFailureAction(error)))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
