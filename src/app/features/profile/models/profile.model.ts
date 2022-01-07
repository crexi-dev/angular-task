import { UserProfile } from '../interfaces';

export class UserProfileModel implements UserProfile {

    cellNumber: string;
    city: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    picture: string;
    state: string;

    constructor (data: any) {

      this.cellNumber = data.cell;
      this.city = data.location.city;
      this.dateOfBirth = new Date(data.dob.date).toLocaleDateString();
      this.email = data.email;
      this.firstName = data.name.first;
      this.lastName = data.name.last;
      this.phoneNumber = data.phone;
      this.picture = data.picture.medium;
      this.state = data.location.state;

  }

}
