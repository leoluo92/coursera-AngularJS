(function(){
'use strict';

angular.module('LunchCheck', [])

// .controller.$inject=
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController( $scope ){
  $scope.msgPlaceHolder="list comma separated dishes you usually have for lunch";
  $scope.lunchMenu="";
  $scope.finalresult="";

  $scope.checkIfTooMuch= function (){
    var num = $scope.lunchMenu.split(",").filter(function(el) {return el.trim().length != 0}).length;
    if ($scope.lunchMenu==""){
      $scope.finalresult= "Please enter data first";
    }
    else if(num>3){
      $scope.finalresult="Too much!";
    }
    else {
      $scope.finalresult="Enjoy!";
    }
  };

  $scope.finalresultStyle=function(){
    if ($scope.finalresult=="Please enter data first"){
      return {"color": "red"};
    }
    else return {"color":"green"};
  }

  $scope.lunchMenuStyle=function(){
    if ($scope.finalresult=="") return;
    if ($scope.finalresult=="Please enter data first"){
      return {"border-color": "red"};
    }
    else return {"border-color":"green"};
  }

};


})();
