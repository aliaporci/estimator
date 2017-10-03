import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('estimate', params.id);
  },

  setupController(controller, model) {
    controller.set('data', { estimate: model });
  }
});
