define(['backbone','models/slide'],function(Backbone,SlideModel){
	var Slides = Backbone.Collection.extend({
		model: SlideModel,

		initialize: function(){
			console.log('Collection');
		}

	});

	return Slides;
});