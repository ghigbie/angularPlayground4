/*global angular */

(function(){
    var MinMaxCtrl = function($scope, $http){
        $scope.formModel = {};
        $scope.submitting = false;
        
        $scope.onSubmit = function(){
            $scope.submitting = true;
            console.log(`Hey, I'm submitted!!!`);
            console.log($scope.formModel);
            $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
                .success(function(data){
                    $scope.submitting = false;
                    console.log(": )"); 
                }).error(function(data){
                    $scope.submitting = false;
                    console.log(": (");
                });
        };
    };
    
    MinMaxCtrl.$inject = ['$scope'];
    
    angular.module('minmax')
        .controller('MinMaxCtrl', MinMaxCtrl);

}());