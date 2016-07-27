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
            templateUrl: '/reg',
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
        .when('/sciPrograms', {
            templateUrl: '/sciProg',
            controller: 'sciProg'
        })
        .when('/posters', {
            templateUrl: '/posters',
            controller: 'posters'
        })
        .when('/awards', {
            templateUrl: '/awards',
            controller: 'awards'
        })
        .when('/exhibition', {
            templateUrl: '/exhibition',
            controller: 'exhibition'
        })
        .when('/socialprograms', {
            templateUrl: '/socialPrograms',
            controller: 'socialPrograms'
        })
        .when('/venue', {
            templateUrl: '/venue',
            controller: 'venue'
        })
        .when('/accommodation', {
            templateUrl: '/accomodation',
            controller: 'accommodation'
        })
        .when('/ads', {
            templateUrl: '/ads',
            controller: 'ads'
        })
        .when('/sponsors', {
            templateUrl: '/sponsors',
            controller: 'sponsors'
        })
        .when('/speakers', {
            templateUrl: '/speakers',
            controller: 'speakers'
        })
        .otherwise({
            redirectTo: '/'
        });
});
