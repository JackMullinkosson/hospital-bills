import { regions, users } from '../mocks/data';

export const getUser = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(user => user.id === parseInt(id));
      const { name, region } = user;
      resolve({name, region});
    }, 500);
  });
};


export const getPrices = async (region, services) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const prices = []
      const foundRegion = regions.find(r => r.name === region)
      console.log('found', foundRegion)
      services.forEach((service) => {
        let foundService = foundRegion.services.find(s => s.name === service);
        prices.push(foundService.price)
      })
      
      resolve(prices);
    }, 500);
  });
};


