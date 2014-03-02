var MainRouter = Backbone.Router.extend({


	routes: {
		"about"       : "aboutPage",
		"about/:name" : "aboutPage",
		"about/:Summer" : "aboutPage"
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

		if (Summer) {
			console.log('Heres a page about', Summer)
		} else {
			console.log('BOOM! Youre at the Generic About Page (bitches)!')
		}
	}

});