export class Company {
  id: string;
  name: string;
  city: string;
  address: {
    lat: number,
    lng: number,
  };
  picture: string;
}
