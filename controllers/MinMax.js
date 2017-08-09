/*global angular */

(function(){
    var MinMaxCtrl = function($scope){
        $scope.formModel = {};
    };
    
    MinMaxCtrl.$inject = ['$scope'];
    
    angular.module('minmax')
        .controller('MinMaxCtrl', MinMaxCtrl);

}());