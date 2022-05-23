export interface APIUser {
  cell: string;
  location: {
    city: string;
    state: string;
  };
  dob: {
    date: string;
    age: number;
  };
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};
