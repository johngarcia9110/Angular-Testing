angular
    .module('ngCribs', ['ui.bootstrap'])
    .controller('cribsController', function($scope) {
        $scope.cribs = [
            {
            "type": "Condo",
            "price": 220000,
            "description": "Excellent place, really nice view!"
            },
            {
            "type": "House",
            "price": 410500,
            "description": "Beautiful home with lots of space for a large family."                
            },
            {
            "type": "Duplex",
            "price": 395000,
            "description": "Great neighbourhood and lot's of nice green space."
            }
        ];
});