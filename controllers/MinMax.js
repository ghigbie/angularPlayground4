/*global angular */

(function(){
    var MinMax = function(){
        var vm = this;
    };
    
    MinMax.$inject = ['$scope'];
    
    angular.module('minmax')
        .controller('MinMax', MinMax);
}());