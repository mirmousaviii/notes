var app = angular.module('app', ['angular-loading-bar', 'angular-scroll-animate']);

app.controller('notesCtrl', function ($scope, $http) {

    $scope.notes = null;
    $scope.tags = null;
    $http.get('data/data.json')
        .success(function (data, status, error, config) {
            $scope.notes = data;

            var tags = [];
            angular.forEach(data, function(note){
                angular.forEach(note.tags, function(tag) {
                    if (tags.indexOf(tag) == -1) {
                        tags.push(tag);
                    }
                });
            });
            $scope.tags = tags;


        })
        //TODO: Handle error
        //.error(function (data, status, error, config) {
        //    //
        //});


    $scope.animateNoteIn = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated fadeIn');
    };

    $scope.animateNoteOut = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated fadeIn');
    };

});


app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}]);






