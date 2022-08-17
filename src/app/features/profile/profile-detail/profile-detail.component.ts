import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as profileActions from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit, OnDestroy {

    user$ = this.store.select(getUserProfile);

    private subscriptions = new Subscription();

    constructor (private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {}

    ngOnInit () {

        this.watchForRouteChanged();

    }

    ngOnDestroy (): void {

        this.subscriptions.unsubscribe();

    }

    onBackButtonClick (event: any) {

        if (event) {

            event.stopPropagation();
            event.preventDefault();

        }

        this.router.navigate(['/profiles']);

    }
    
    private watchForRouteChanged () {
      
        const sub = this.route.data
        .pipe(withLatestFrom(this.route.params, this.route.queryParams))
        .subscribe(([, queryParams]) => {
                
            if (!isNaN(queryParams.id)) {
        
                // Since there is no endpoint to request profile by using its ID,
                // trying to find it in a list of one in store
                this.store.dispatch(profileActions.findById({ id: queryParams.id }));
    
            } else {
        
                // No ID was provided, get random profile
                this.store.dispatch(profileActions.fetch({ user: null }));
    
            }
        
        });

        this.subscriptions.add(sub);

    }

}
