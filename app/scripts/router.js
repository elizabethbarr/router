var MainRouter = Backbone.Router.extend({


	routes: {
		"about"       : "aboutPage",
		"about/:name" : "aboutPage"
	},

	initialize: function(){
		console.log('Hey guys, a router is born!');
	},

	aboutPage: function(name){
		if (name) {
			console.log('Heres a page about', name)
		} else {
			console.log('BOOM! Youre at the Generic About Page (bitches)!')
		}
	}

});