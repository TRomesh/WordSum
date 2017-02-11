angular.module('WsApp', [])
    .controller('WsCtrl',function($scope) {
      $scope.NameValue=0;
      $scope.entername='';

      $scope.NametoChar=function (name) {
        let val=0;
        if(undefined==name){$scope.clear(); return 0;}
        else {
          for (var i = 0; i < name.length; i++) {
            val=val+parseInt(ChartoNumb(name.charAt(i)));
          }
        }
        setTimeout(function () {
           $scope.$apply(function () {
               $scope.NameValue = val;
           });
        },10);
      };

      $scope.clear = function (){
        $scope.NameValue=0;
        $scope.entername='';
      };

      $scope.hello = function (){
         console.log('hello');
      };

      function ChartoNumb(char){
         switch (char.toUpperCase()) {
           case 'A':
              return 1;
           case 'B':
              return 2;
           case 'C':
              return 2;
           case 'D':
              return 4;
           case 'E':
              return 5;
           case 'F':
              return 8;
           case 'G':
              return 3;
           case 'H':
              return 8;
           case 'I':
              return 1;
           case 'J':
              return 1;
           case 'K':
              return 2;
           case 'L':
              return 3;
           case 'M':
              return 4;
           case 'N':
              return 5;
           case 'O':
              return 7;
           case 'P':
              return 8;
           case 'Q':
              return 1;
           case 'R':
              return 2;
           case 'S':
              return 3;
           case 'T':
              return 4;
           case 'U':
              return 6;
           case 'V':
              return 6;
           case 'W':
              return 6;
           case 'X':
              return 6;
           case 'Y':
              return 1;
           case 'Z':
              return 7;
           default:
              return 0;
         }
      }
});
