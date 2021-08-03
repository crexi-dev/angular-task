import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';

import { profileActions } from '@store/actions';
import { ProfileService } from '../profile.service';
import { UserProfile, ProfileState } from '@interfaces';
import { Store } from '@ngrx/store';
import { selectUserList } from '@store/selectors';

@Injectable()
export class ProfileEffects {

    public loadProfileList$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(profileActions.loadProfileList),
            mergeMap(() => {

                return this.profileService.getProfileList()
                .pipe(
                    map((userList) => {

                        return profileActions.loadProfileListSuccess({ userList });

                    }),
                    catchError(() => {

                        return EMPTY;

                    })
                );

            }

        ));

    });

    public loadProfileWithId$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(profileActions.loadProfileWithId),
            withLatestFrom((action) => {

                const selectedProfileState = {
                    selectedUserId: action.selectedUserId,
                    userList: this.store.select(selectUserList)
                };
                return selectedProfileState;

            }),
            mergeMap((action) => {

                return action.userList.pipe(
                    map((userList) => {

                        const user = userList.find((user: UserProfile) => {

                            return user.id === action.selectedUserId;

                        });

                        return profileActions.loadProfileSuccess({ user });

                    })
                );

            }

        ));

    });

    public loadRandomProfile$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(profileActions.loadRandomProfile),
            mergeMap(() => {

                return this.profileService.getProfile().pipe(
                    map((user) => {

                        return profileActions.loadProfileSuccess({ user });

                    }),
                    catchError(() => {

                        return EMPTY;

                    })
                );

            }

        ));

    });

    constructor (
        private actions$: Actions,
        private profileService: ProfileService,
        private store: Store<ProfileState>
    ) { }

}
