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
} from '../actions/shopping.actions';

@Injectable()
export class ShoppingEffects {
  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}

  loadShopping$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoadShoppingAction),
      mergeMap(() =>
        this.shoppingService.getShoppingItem().pipe(
          map((data) => LoadShoppingSuccessAction({ shoppingList: data })),
          catchError((error) => of(LoadShoppingFailureAction({ error })))
        )
      )
    );
  });

  addShoppingItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddItemAction),
      mergeMap((data) =>
        this.shoppingService.addShoppingItem(data.shoppingItem).pipe(
          map(() => AddItemSuccessAction({ shoppingItem: data.shoppingItem })),
          catchError((error) => of(AddItemFailureAction({ error })))
        )
      )
    );
  });

  deleteShoppingItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeleteItemAction),
      mergeMap((data) =>
        this.shoppingService.deleteShoppingItem(data.itemId).pipe(
          map(() => DeleteItemSuccessAction({ itemId: data.itemId })),
          catchError((error) => of(DeleteItemFailureAction({ error })))
        )
      )
    );
  });
}
