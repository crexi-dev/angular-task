import { UserProfile } from "@interfaces";
import { APIUser } from "@interfaces";



export const APIUserToUserProfile = (userAPIResponse: APIUser): UserProfile => {
  const {cell, location, dob, email, phone, name, picture} = userAPIResponse
  return {
    email,
    cellNumber: cell,
    city: location.city,
    state: location.state,
    dateOfBirth: dob.date,
    phoneNumber: phone,
    firstName: name.first,
    lastName: name.last,
    picture: picture.large,
  }
}