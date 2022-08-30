import { LayoutState } from "@interfaces";
import { Action, createReducer, on } from '@ngrx/store';
import { LayoutActions } from ".";


const initialState:LayoutState = new LayoutState()

const reducer = createReducer(
  initialState,
  on(LayoutActions.showOverlayLoading, (state,action) => ({ ...state, overlayLoadingIsPresent:true,overlayLoadingText:action.text })),
  on(LayoutActions.hideOverlayLoading, (state) => ({ ...state, overlayLoadingIsPresent:false })),
  on(LayoutActions.showSnackBar, (state,action) => ({ ...state, snackBarIsPresent:true,snackBarText:action.text })),
  on(LayoutActions.hideSnackBar, (state) => ({ ...state, snackBarIsPresent:false })),
);


export function getLayoutReducer (state: LayoutState | undefined, action: Action) {

  return reducer(state, action);

}