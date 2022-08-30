// angular
import { Injectable } from "@angular/core";

// ngrx store
import { ProfileActions } from "./index";
import { ProfileService } from "../services/profile.service";

// misc
import { UtilService } from "@core/utils/utility.service";

@Injectable()
export class ProfileEffects {

  constructor(
    private utilService:UtilService,
    private profileService: ProfileService
  ) { }


  getRandomUser$ = this.utilService.generateEntityEffect(
    ProfileActions.loadingGetRandomProfile,
    "profileDetail.initialLoading",
    "profileDetail.errorLoading",
    this.profileService.getUser,
    ProfileActions.getRandomProfileSuccess,
    ProfileActions.getRandomProfileFail
  )

  listRandomUsers$ = this.utilService.generateEntityEffect(
    ProfileActions.loadingListRandomProfile,
    "profileList.initialLoading",
    "profileList.errorLoading",
    this.profileService.listUsers,
    ProfileActions.listRandomProfileSuccess,
    ProfileActions.listRandomProfileFail
  )
}