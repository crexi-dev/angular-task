import { getSelectedUser, getUsers, getLoading, getError } from './profile.selectors';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserProfile } from '@interfaces';
import { profileActions } from '@store/actions';

@Injectable({
    providedIn: 'root'
})
export class ProfileFacade {
    constructor (private store: Store<{}>) {}

    // Actions
    public loadUsers(): void {
        this.store.dispatch(profileActions.loadUsers());
    }
    public viewUserProfile(selectedUser: UserProfile): void {
        this.store.dispatch(profileActions.selectUserProfile({ selectedUser }));
    }

    // Selectors
    public selectError$(): Observable<any> {
        return this.store.select(getError);
    }
    public selectLoading$(): Observable<boolean> {
        return this.store.select(getLoading);
    }
    public selectUser$(): Observable<UserProfile> {
        return this.store.select(getSelectedUser);
    }
    public selectUsers$(): Observable<UserProfile[]> {
        return this.store.select(getUsers);
    }
}
