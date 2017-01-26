
app.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'views/template/template.html'
            })

            .state('app.home', {
                url: '/home',
                views: {
                    'pageContent': {
                        templateUrl: 'views/modules/main/main.html',
                        controller: 'MainCtrl'
                    }
                }

            });
    $urlRouterProvider.otherwise('app/home');
});