app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/login',
            controller: 'login'
        })
        .when('/register',{
            templateUrl: '/regLogin',
            controller: 'register'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
/*
app.run( function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if ( $rootScope. == null ) {
            // no logged user, we should be going to #login
            if ( next.templateUrl == "partials/login.html" ) {
                // already going to #login, no redirect needed
            } else {
                // not going to #login, we should redirect now
                $location.path( "/login" );
            }
        }
    });
})*/