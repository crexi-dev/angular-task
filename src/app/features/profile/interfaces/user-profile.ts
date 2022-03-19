import { ApiResult } from "@interfaces";

export interface UserProfile {
	id: string;
	cellNumber: string;
	city: string;
	dateOfBirth: string;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	picture: string;
	state: string;
}

/**
 * Converts an `ApiResult` into a `UserProfile`
 * @param result 
 * @returns `UserProfile`
 */
export function apiResultToUserProfile(result: ApiResult): UserProfile {
	return {
		id: result.name.first + result.name.last,
		cellNumber: result.phone ,
		city: result.location.city ,
		dateOfBirth: result.dob.date ,
		email: result.email ,
		firstName: result.name.first ,
		lastName: result.name.last ,
		phoneNumber: result.phone ,
		picture: result.picture.medium ,
		state: result.location.state ,
	}
}