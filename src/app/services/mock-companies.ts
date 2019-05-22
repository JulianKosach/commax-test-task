
import { Company } from './company';


const companies: Company[] = [];
for (let i = 0; i < 100; i++) {
  companies.push({
    id: i + '',
    name: 'Company ' + i,
    city: 'London',
    address: {
      lat: 51.507222,
      lng: -0.1275,
    },
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorKgYDVP965AfsKx99CshH8CQ3VzkxQ5UbHtSsLW_zbIfz6kD',
  });
}
export const COMPANIES: Company[] = companies;
