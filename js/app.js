var App = Ember.Application.create();

// Router
App.Router.map(function(){
	this.resource('tables'); // '/#/tables'
});

// In Ember, the Router is responsible for getting data from
// the model
App.TablesRoute = Ember.Route.extend({
  model: function(){
    return App.Table.find();
  }
});

// Models
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Table = DS.Model.extend();

App.Table.FIXTURES = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6},
];