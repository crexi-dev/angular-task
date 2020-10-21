import { createAction } from '@ngrx/store';

const initProfile = createAction('[Profile] Init');

export const profileActions = { initProfile };


// export function search(form, limit = 100, searchFrom = 200) {
//   let gender = '';
//   if (form.gender !== 'any') gender = `&gender=${form.gender}`;

//   const currentYear = new Date().getFullYear();
//   const yearMin = currentYear - form.ageMin;
//   const yearMax = currentYear - form.ageMax;

//   return dispatch => axios({
//     method: 'GET',
//     url: `https://randomuser.me/api/?nat=US&results=${searchFrom}${gender}`,
//   })
//     .then((response) => {
//       const filtered = response.data.results
// 	//   console.log(filtered)

	  
// 	.filter(el => {
// 		const dob = +el.dob.date.slice(0, 4);
// 		return dob >= yearMax && dob <= yearMin;
// 	})
// 	.slice(0, limit);

// 		dispatch({
// 			type: 'SEARCH_LIST_FILL',
// 			payload: filtered,
// 		});
//     });
// }

