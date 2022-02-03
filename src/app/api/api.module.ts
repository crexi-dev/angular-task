import { NgModule } from '@angular/core';
import { ProfileService } from "./profile.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        ProfileService
    ],
})
export class ApiModule { }
