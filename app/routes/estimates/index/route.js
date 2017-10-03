import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.store.findAll('estimate')
  },

  setupController(controller, model) {
    controller.set('data', { estimates: model })
  }
});
