require.config({
	shim:{
		"backbone":{
			deps:["underscore","jquery"],
			exports: "Backbone"
		}
	},
	paths:{
		jquery : "../bower_components/jquery/jquery.min",
		underscore:"../bower_components/underscore/underscore",
		backbone:"../bower_components/backbone/backbone"
	}
});


require(['views/app'], function(AppView){
	window.App = {
		Vent: _.extend({}, Backbone.Events)
	};
	
	new AppView();
	console.log('Hello there!');
}); 