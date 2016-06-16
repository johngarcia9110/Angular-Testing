angular
    .module('ngCribs')
    .factory('cribsFactory', function(){
        
        var cribsData = [
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
    
        function getCribs() {
            return cribsData;
        }
        
        return {
            getCribs: getCribs
        }
});