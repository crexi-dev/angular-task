import { TestBed } from '@angular/core/testing';
import { ProfileService } from './profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ProfileService', () => {

    let service: ProfileService;
    let http: HttpClient;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.inject(ProfileService);
        http = TestBed.inject(HttpClient);

    });

    afterEach(() => {

        // restore the spy created with spyOn
        jest.restoreAllMocks();

    });

    it('should call user api', () => {

        jest.spyOn(http, 'get');

        service.getProfileList$();

        expect(http.get).toHaveBeenCalledWith('https://randomuser.me/api/?results=10');

    });

});
