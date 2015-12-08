var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
  $scope.fName = '';
  $scope.lName = '';
  $scope.pass = '';
  $scope.rPass = '';
  $scope.personsList = [
    {id:1, firstName:'Hege',  lastName:"Pege" },
    {id:2, firstName:'Kim',   lastName:"Pim" },
    {id:3, firstName:'Sal',   lastName:"Smith" },
    {id:4, firstName:'Jack',  lastName:"Jones" },
    {id:5, firstName:'John',  lastName:"Doe" },
    {id:6, firstName:'Peter', lastName:"Pan" }
  ];
  $scope.edit = false;
  $scope.error = false;
  $scope.incomplete = false;
  $scope.editUser = function(id) {
    if (id == 'new') {
      $scope.edit = false;
      $scope.incomplete = true;
      $scope.fName = '';
      $scope.lName = '';
      $scope.pass = '';
      $scope.rPass = '';
    } else {
      $scope.edit = true;
      $scope.fName = $scope.personsList[id - 1].firstName;
      $scope.lName = $scope.personsList[id - 1].lastName;
      $scope.pass = '';
      $scope.rPass = '';
    }
  };

  $scope.saveUser = function() {
    if ($scope.edit == true) {
      $scope.fName = '';
      $scope.lName = '';
      $scope.pass = '';
      $scope.rPass = '';
      $scope.edit = false;
      $scope.incomplete = true;
    } else {
      var firstName = $scope.fName;
      var lastName = $scope.lName;
      var id = $scope.personsList.length + 1;
      $scope.personsList.push({'id':id, 'firstName':firstName, 'lastName':lastName });
      $scope.fName = '';
      $scope.lName = '';
      $scope.pass = '';
      $scope.rPass = '';
      $scope.incomplete = true;
    }
  };

  $scope.$watch('fName', function() {
    $scope.test();
  });
  $scope.$watch('lName', function() {
    $scope.test();
  });
  $scope.$watch('pass', function() {
    $scope.test();
  });
  $scope.$watch('rPass', function() {
    $scope.test();
  });

  $scope.test = function() {
    if ($scope.pass !== $scope.rPass) {
      $scope.error = true;
    } else {
      $scope.error = false;
    }
    $scope.incomplete = false;
    if ((!$scope.fName.length || !$scope.lName.length || !$scope.pass.length || !$scope.rPass.length)) {
      $scope.incomplete = true;
    }
  };
});
