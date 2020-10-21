import { createAction } from '@ngrx/store';

const initProfile = createAction('[Profile] Init');

export const profileActions = { initProfile };

// export function search(form, limit = 100, searchFrom = 200) {
//   let _url:string="https://randomuser.me/api/"
//   let gender = '';
//   if (form.gender !== 'any') gender = `&gender=${form.gender}`;

//   const currentYear = new Date().getFullYear();
//   const yearMin = currentYear - form.ageMin;
//   const yearMax = currentYear - form.ageMax;

//   return this.http.get<any>(this._url);

//   dispatch({
// 	type: 'SEARCH_LIST_FILL',
// 	payload: filtered,
//   });

//   });
// }

