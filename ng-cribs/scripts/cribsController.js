angular
    .module('ngCribs', ['ui.bootstrap'])
    .controller('cribsController', function($scope, cribsFactory) {
        $scope.cribs = cribsFactory.getCribs();
});