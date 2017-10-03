import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  laborTotal() {
    return faker.finance.amount();
  },

  materialTotal() {
    return faker.finance.amount();
  },

  afterCreate(estimate, server) {
    let client = server.create('user');
    let estimator = server.create('user');

    estimate.update({
      client: client,
      estimator: estimator
    })
  }
});
