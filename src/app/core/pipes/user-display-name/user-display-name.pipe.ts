import { Pipe, PipeTransform } from '@angular/core';
import { UserProfile } from '@interfaces';

@Pipe({ name: 'crxUserDisplayName' })
export class UserDisplayNamePipe implements PipeTransform {

    transform (user: UserProfile) {

        if (!user) {

            return '';

        }

        if (user.firstName && user.lastName) {

            return `${user.lastName}, ${user.firstName}`;

        } else if (user.firstName && !user.lastName) {

            return user.firstName;

        } else if (!user.firstName && user.lastName) {

            return user.lastName;

        }

        return '';

    }

}
