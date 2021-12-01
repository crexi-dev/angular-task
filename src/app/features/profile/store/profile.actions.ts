import { HttpErrorResponse } from "@angular/common/http";
import { UserProfile } from "@interfaces";
import { createAction, props } from "@ngrx/store";

const initProfiles = createAction(
    "[Profile] Init",
    props<{ numberOfResults: number }>()
);

const initProfilesSuccess = createAction(
    "[Profile] Init Success",
    props<{ profiles: UserProfile[] }>()
);

const initProfilesFailure = createAction(
    "[Profile] Init Failure",
    props<{ error: HttpErrorResponse }>()
);

const selectProfile = createAction(
    "[Profile] Select",
    props<{ index: number }>()
);

export const profileActions = {
    initProfiles,
    initProfilesSuccess,
    initProfilesFailure,
    selectProfile
};