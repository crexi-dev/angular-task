import { createFeatureSelector } from '@ngrx/store';
import { ProfileStore } from '../interfaces';

export const getProfileState = createFeatureSelector<ProfileStore>('profile');
