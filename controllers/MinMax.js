/*global angular */

(function(){
    var MinMaxCtrl = function($scope){
        $scope.formModel = {};
        
        $scope.onSubmit = function(){
            console.log(`Hey, I'm submitted!!!`);
            console.log($scope.formModel);
        };
    };
    
    MinMaxCtrl.$inject = ['$scope'];
    
    angular.module('minmax')
        .controller('MinMaxCtrl', MinMaxCtrl);

}());