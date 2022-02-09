import {FetchedUser, UserResult} from "../models/FetchedUser.model";
import {User} from '../models/User.model';

export class ConverterUtil {
    static convertFetchedUserToUser(fetchedUser: FetchedUser): User[] {
        const userResult = fetchedUser?.results;
        if (userResult) {
            return userResult.map((userResult: UserResult) => {
                return {
                    firstName: userResult?.name.first,
                    lastName: userResult?.name.last,
                    picture: userResult?.picture.medium,
                    phoneNumber: userResult?.phone,
                    cellNumber: userResult?.cell,
                    city: userResult?.location?.city,
                    state: userResult?.location?.state,
                    email: userResult?.email,
                    dateOfBirth: userResult?.dob.date,
                    id: userResult?.id?.value
                }
            });
        } else {
            return [];
        }
    }
}
