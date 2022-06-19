import { EntityState } from '@ngrx/entity';
import { UserProfile } from '@interfaces';

export interface ProfileState extends EntityState<UserProfile> { 
    user?: UserProfile;
    isLoading?: boolean;
    error?: string;
    currentPage?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: string;
}
