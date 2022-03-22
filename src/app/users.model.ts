export interface Users {
  name: string;
  username: string;
  email: string;
  id: number;
}

export interface fullUsers {
  website: string;
  username: string;
  phone: string;
  name: string;
  id: number;
  email: string;
  company: company;
  address: adress;
}

export interface company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface adress {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: geo;
}

export interface geo {
  lat: string;
  lng: string;
}
