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