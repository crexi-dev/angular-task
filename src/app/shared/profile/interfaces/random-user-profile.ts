
export interface RandomUserProfile {
  gender: string;
  name: RandomUserName;
  location: RandomUserLocation;
  email: string;
  login: RandomUserLogin;
  dob: RandomUserDOB;
  registered: RandomUserRegistered;
  phone: string;
  cell: string;
  id: RandomUserID;
  picture: RandomUserPicture;
  nat: string;
}

export interface RandomUserName {
  title: string;
  first: string;
  last: string;
}

export interface RandomUserName {
  title: string;
  first: string;
  last: string;
}

export interface RandomUserLocation {
  street: RandomUserStreet;
  city: string;
  state: string;
  postcode: string;
  coordinates: RandomUserCoordinates;
  timezone: RandomUserTimezone;
}

export interface RandomUserStreet {
  number: Number;
  name: string;
}

export interface RandomUserCoordinates {
  latitude: string;
  longitude: string;
}

export interface RandomUserTimezone {
  offset: string;
  description: string;
}

export interface RandomUserLogin {
  uuid: string
  username: string,
  password: string,
  salt: string,
  md5: string,
  sha1: string,
  sha256: string
}

export interface RandomUserDOB {
  date: string;
  age: Number;
}

export interface RandomUserRegistered {
  date: string;
  age: Number;
}

export interface RandomUserID {
  name: string;
  value: string;
}

export interface RandomUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}