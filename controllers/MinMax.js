/*global angular */

(function(){
    var MinMax = function($scope){
        $scope.formModel = {};
    };
    
    MinMax.$inject = ['$scope'];
    
    angular.module('minmax')
        .controller('MinMax', MinMax);
}());