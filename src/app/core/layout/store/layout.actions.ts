import { createAction, props } from "@ngrx/store";


// toggle overlayLoading
export const showOverlayLoading = createAction('[Layout] show overlay loading',  props<{text:string}>())
export const hideOverlayLoading = createAction('[Layout] hide overlay loading')


// toggle snackbar
export const showSnackBar = createAction('[Layout] show snackbar',  props<{text:string}>())
export const hideSnackBar = createAction('[Layout] hide snackbar')
