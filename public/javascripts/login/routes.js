app.config(function ($routeProvider) {
    $routeProvider
        .when('/input', {
            templateUrl: '/input',
            controller: 'input'
        }).otherwise({
            redirectTo: '/input'
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