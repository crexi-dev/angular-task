import { UserProfile } from './user-profile';
import { EntityState } from '@ngrx/entity';

export const profilesFeatureKey = 'profiles';

export interface ProfileStore extends EntityState<UserProfile> {
    // additional entities state properties
}
