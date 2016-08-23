import Ember from 'ember';

export default Ember.Route.extend ({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=f77cc8251e804a90b14da232308c88fd&zip=' + params.zip;
   return Ember.$.getJSON(url);
  }
});
