var App = Ember.Application.create();

// Router
// 1. make resource route for tables
App.Router.map(function(){
	this.resource('tables', function(){
    this.resource('table', {path: ':table_id'});
  }); // '/#/tables'
});

// In Ember, the Router is responsible for getting data from
// the model
// 2. make router object that loads data
App.TablesRoute = Ember.Route.extend({
  model: function(){
    return App.Table.find();
  }
});

// ember generates this code for us
// App.TableRoute = Ember.Route.extend({
//   model: function(params){
//     return App.Table.find(params.table_id);
//   }
// });

// Controllers
// 4. define tables controller and specify it will manage
//    a list of objects
App.TablesController = Ember.ArrayController.extend();
App.TableController  = Ember.ObjectController.extend();

// Models
// 3. define model and load data from it
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

// 5. (in index.html) create template with special tags
//    to render the data