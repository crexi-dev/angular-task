import { Pipe, PipeTransform } from '@angular/core';

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nove', 'Dec'];

/**
 * https://stackoverflow.com/questions/15397372/javascript-new-date-ordinal-st-nd-rd-th
 * @param d
 */
export function daySuffix (d: number): string {

    if (d > 3 && d < 21) {

        return 'th';

    }

    switch (d % 10) {

        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';

    }

}

export function formatDate (d: Date): string {

    return `${month[d.getMonth()]} ${d.getDate()}${daySuffix(d.getDate())}, ${d.getFullYear()}`;

}

@Pipe({
    name: 'crxDate'
})
export class CrxDatePipe implements PipeTransform {

    transform (value: string | undefined | null): unknown {

        if (value === undefined || value === null) {

            return '';

        }

        return formatDate(new Date(value));

    }

}
