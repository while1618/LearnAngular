import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShoppingService } from 'src/app/shopping.service';
import { errorOccurred } from '../actions/error.actions';
import {
  addItemAction,
  addItemSuccessAction,
  deleteItemAction,
  deleteItemSuccessAction,
  loadShoppingAction,
  loadShoppingSuccessAction,
} from '../actions/shopping.actions';

@Injectable()
export class ShoppingEffects {
  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}

  loadShopping$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadShoppingAction),
      mergeMap(() =>
        this.shoppingService.getShoppingItem().pipe(
          map((data) => loadShoppingSuccessAction({ shoppingList: data })),
          catchError((error) => of(errorOccurred({ error })))
        )
      )
    );
  });

  addShoppingItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addItemAction),
      mergeMap((data) =>
        this.shoppingService.addShoppingItem(data.shoppingItem).pipe(
          map(() => addItemSuccessAction({ shoppingItem: data.shoppingItem })),
          catchError((error) => of(errorOccurred({ error })))
        )
      )
    );
  });

  deleteShoppingItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteItemAction),
      mergeMap((data) =>
        this.shoppingService.deleteShoppingItem(data.itemId).pipe(
          map(() => deleteItemSuccessAction({ itemId: data.itemId })),
          catchError((error) => of(errorOccurred({ error })))
        )
      )
    );
  });
}
