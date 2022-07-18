import { DatePipe, daySuffix, formatDate } from './date.pipe';

describe('CrxDatePipe', () => {

    describe('daySuffix', () => {

        it('should add st suffix', () => {

            expect(daySuffix(1)).toBe('st');

        });

        it('should add nd suffix', () => {

            expect(daySuffix(2)).toBe('nd');

        });

        it('should add rd suffix', () => {

            expect(daySuffix(3)).toBe('rd');

        });

        it('should add th suffix', () => {

            expect(daySuffix(4)).toBe('th');

        });

    });

    describe('formatDate', () => {

        it('should add st suffix', () => {

            expect(formatDate(new Date('1982-08-11T05:19:56.913Z'))).toBe('Aug 11th, 1982');

        });

    });

    describe('pipe', () => {

        it('should transform date', () => {

            const pipe = new DatePipe();
            expect(pipe.transform('1955-02-28T10:00:04.795Z')).toEqual('Feb 28th, 1955');

        });

    });

});
