import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('estimates', function() {
    this.route('estimate', { path: '/:estimate_id' });
  });
});

export default Router;
