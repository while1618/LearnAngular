import { createAction, props } from '@ngrx/store';

const ERROR = '[ERROR] Error Occurred';

export const errorOccurred = createAction(ERROR, props<{ error: Error }>());
