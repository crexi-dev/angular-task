import { UserProfile } from './user-profile';
import { EntityState } from '@ngrx/entity';

export interface ProfileState extends EntityState<UserProfile> {}
