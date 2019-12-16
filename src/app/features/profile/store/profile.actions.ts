import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

export const initProfile = createAction(
	'[Profile] - Init'
);

export const successProfile = createAction(
	'[User] - Get User',
	props<{ payload: UserProfile }>()
);

export const errorProfile = createAction(
	'[Profile] - Error',
	props<Error>()
);

