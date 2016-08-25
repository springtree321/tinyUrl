var app = angular.module('tinyurlApp');

app.controller("homeController", ["$scope", "$http", "$location", function($scope, $http, $location) {
    $scope.submit = function() {
        $scope.longUrl;
        $http.post("/api/v1/urls", {
            longUrl: $scope.longUrl
        })
            .success(function(data) {
                $location.path("/urls/" + data.shortUrl);
            });
    }
}]);