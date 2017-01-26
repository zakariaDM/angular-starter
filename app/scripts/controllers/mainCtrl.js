'use strict';

/**
 * @ngdoc function
 * @name angularPApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPApp
 */
app.controller('MainCtrl', function ($scope, $http, $q, NovwayService) {

    $scope.ws = {};
    var ws = $scope.ws;

    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    var promise_ws = NovwayService.ws();
    promise_ws.then(function (category_data) {
        console.log(category_data);
        ws.responsecount = category_data.length;
    }, function (reason) {
        console.log(reason);
    });
});
