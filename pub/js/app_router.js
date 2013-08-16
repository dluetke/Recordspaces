/**
 * Definition of Backbone application router
 */

var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home"  // call function 'home'
    },

    initialize: function () {
        this.headerView = new HeaderView();		// creates new 'header' view
        console.log("App-Router init");
        $('.header').html(this.headerView.el);	// 
    },

    home: function (id) {
        if (!this.homeView) {
            this.homeView = new HomeView();
        }

        $('#content').html(this.homeView.el);
        this.headerView.selectMenuItem('home-menu');
    }  
});

utils.loadTemplate(['HomeView', 'HeaderView','AboutView' ], function() {
    console.log("Loading templates");
	app = new AppRouter();
    Backbone.history.start();
});