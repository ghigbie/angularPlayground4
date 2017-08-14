/*global angular*/

(function(){
    var minmax = angular.module('minmax', [
        'jcs-autoValidate',
        'angular-ladda',
        'ngRoute']);
        
    minmax.run(function(defaultErrorMessageResolver){
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages){
            errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
            errorMessages['toOld'] = 'You must be max {0} years old to use this site';
            errorMessages['badUsername'] = 'The username can only contain numbers and letters and _';
        });
    });
    
}());    