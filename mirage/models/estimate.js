import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  client: belongsTo('user'),
  estimator: belongsTo('user')
});
