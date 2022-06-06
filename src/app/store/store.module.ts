import { NgModule } from '@angular/core';
import { RoutingEffects } from '@core/routing/store';
import { ProfileEffects } from '@features/profile/store/profile.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { APP_REDUCER_TOKEN, metaReducers } from './reducers';

@NgModule({
    imports: [
        EffectsModule.forRoot([RoutingEffects,ProfileEffects]),
        StoreModule.forRoot(APP_REDUCER_TOKEN, { metaReducers }),
        StoreDevtoolsModule.instrument({ maxAge: 25 })
    ]
})
export class AppStoreModule {}
