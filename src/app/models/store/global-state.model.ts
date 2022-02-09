import { User } from "../User.model";

export interface IGlobalState {
    global: {
    ApiData: ApiState;
    }
}

export interface ApiState {
    Users: User[],
    UserProfile: User
}
