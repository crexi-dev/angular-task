import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LayoutState } from "@interfaces";


export const getLayoutState = createFeatureSelector<LayoutState>('layout')
export const getOverlayLoadingIsPresent = createSelector(
  getLayoutState,
  (layout) =>layout.overlayLoadingIsPresent
)
export const getOverlayLoadingText = createSelector(
  getLayoutState,
  (layout) =>layout.overlayLoadingText
)

export const getSnackBarInfo = createSelector(
  getLayoutState,
  (layout) =>({isPresent:layout.snackBarIsPresent})
)

export const getSnackBarText = createSelector(
  getLayoutState,
  (layout) =>layout.snackBarText
)