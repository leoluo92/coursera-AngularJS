(function(){
'use strict';

angular.module('LunchCheck', [])

// .controller.$inject=
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController( $scope ){
  $scope.msgPlaceHolder="list comma separated dishes you usually have for lunch";
  $scope.lunchMenu="";
  $scope.name="leoluo";
};


})();
