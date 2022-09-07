import { RandomUserApiUser } from '@core/models/random-user-api.model';

export const parseRandomUserApiUserToAppUser = (apiUser: RandomUserApiUser) => ({
    cellNumber: apiUser.cell,
    city: apiUser.location.city,
    dateOfBirth: apiUser.dob.date,
    email: apiUser.email,
    firstName: apiUser.name.first,
    lastName: apiUser.name.last,
    phoneNumber: apiUser.phone,
    picture: apiUser.picture.large,
    state: apiUser.location.state,
    uuid: apiUser.login.uuid
});
