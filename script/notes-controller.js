var app = angular.module('app', ['angular-loading-bar', 'ngAnimate']);

app.controller('notesCtrl', function ($scope, $http) {

    $scope.notes = null;
    $http.get('data/data.json')
        .success(function (data, status, error, config) {
            $scope.notes = data;
        })
        //TODO: Handle error
        //.error(function (data, status, error, config) {
        //    //
        //});

});


app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}]);