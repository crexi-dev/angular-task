import { EntityState } from '@ngrx/entity';
import { UserProfile } from './user-profile';

export interface ProfileState extends EntityState<UserProfile> { 
    user?: UserProfile;
    isLoading?: boolean;
    error?: string;
    currentPage?: number;
    pageSize?: number;
}
