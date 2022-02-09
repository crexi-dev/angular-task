
export interface IGlobalState {
    global: {
    ApiData: ApiState;
    }
}

export interface ApiState {
    Users: User[],
    UserProfile: User
}
