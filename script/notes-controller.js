var app = angular.module('app', ['ngAnimate']);

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

