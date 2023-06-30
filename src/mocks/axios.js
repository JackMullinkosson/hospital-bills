import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { regions, users } from './data';

const mock = new MockAdapter(axios, { delayResponse: 500 });

mock.onGet('/api/getPrice').reply(config => {
  const { city, service } = config.params;
  const region = regions.find(region => region.name === city);
  if (region) {
    const foundService = region.services.find(s => s.name === service);
    if (foundService) {
      return [200, { price: foundService.price }];
    } else {
      return [404, { error: 'Service not found' }];
    }
  } else {
    return [404, { error: 'City not found' }];
  }
});

mock.onGet('/api/getUser').reply(config => {
    const { id } = config.params;
    const user = users.find(user => user.id === id);
    if (user) {
      const { name, region } = user;
      return [200, { name, region }];
    } else {
      return [404, { error: 'User not found' }];
    }
  });

export default mock;
