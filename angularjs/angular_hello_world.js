var Person = function(firstName, lastName) {
  var person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.fullName = function() {
    return person.firstName + " " + person.lastName;
  };
  return person;
};

var app = angular.module('myApp', []);
app.controller('myController', function($scope, $http) {
  //var person = new Person("Arslan", "Qadri");
  //$scope.person = person;

  $scope.personsList = [new Person("Swathi", "Garimidi"), new Person("Arslan", "Qadri"), new Person("Gopi", "Lelsani")];
  $http.get("http://www.w3schools.com/angular/customers.php").success(function(response) {
    $scope.usersList = response.records;
  });
  $scope.toggle = function() {
    $scope.displaySwitch = !$scope.displaySwitch;
  };
  $scope.buttonSwitch = true;
});
