/**
 * Created by Shivam Mathur on 17-02-2016.
 */
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/main',
            controller: 'main'
        })
        .when('/invite', {
            templateUrl: '/invite',
            controller: 'invite'
        })
        .when('/comingSoon', {
            templateUrl: '/comingSoon',
            controller: 'comingSoon'
        })
        .when('/contact', {
            templateUrl: '/contact',
            controller: 'contact'
        })
        .when('/register', {
            templateUrl: '/register',
            controller: 'register'
        })
        .when('/paper/general', {
            templateUrl: '/paperGeneral',
            controller: 'paperGeneral'
        })
        .when('/paper/abstracts', {
            templateUrl: '/paperAbstracts',
            controller: 'paperAbstracts'
        })
        .when('/paper/full', {
            templateUrl: '/paperFull',
            controller: 'paperFull'
        })
        .when('/committees', {
            templateUrl: '/committees',
            controller: 'committees'
        })
        .otherwise({
            redirectTo: '/'
        });
});
