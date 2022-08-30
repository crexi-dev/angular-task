
import { UserProfile } from './user-profile';

export class ProfileState  {
    currentUser?: UserProfile;
    users:UserProfile[] = []
    currentUserId:number= null
}
