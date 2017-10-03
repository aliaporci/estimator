import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  isLoading: true,

  actions: {
    toggleLoading() {
      this.toggleProperty('isLoading');
    }
  }
});
