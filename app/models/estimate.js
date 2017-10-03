import Ember from 'ember';
import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

const { computed } = Ember;

export default Model.extend({
  materialTotal: attr('number'),
  laborTotal: attr('number'),

  client: belongsTo('user', { inverse: 'estimates' }),
  estimator: belongsTo('user', { inverse: 'estimates' }),

  estimateTotal: computed('materialTotal', 'laborTotal', function() {
    return this.get('materialTotal') + this.get('laborTotal');
  })
});
