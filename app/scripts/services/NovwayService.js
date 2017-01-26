app.factory('NovwayService', function ($http, global, $q) {

    var novwayService = {};

    novwayService.ws = function () {

        var def = $q.defer();
        var urlWS = global.base_url + global.env + global.ws_test;

        $http({
            method: 'GET',
            url: urlWS
        }).then(function (response) {
            def.resolve(response.data);
        }, function (reason) {
            def.reject("Failed to get data");
        });

        return def.promise;

    };

    return novwayService;
});


