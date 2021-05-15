import { createAction, props } from '@ngrx/store';

export const errorOccurred = createAction(
  '[ERROR] Error Occurred',
  props<{ error: Error }>()
);
