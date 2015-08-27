//app.js
var app = angular.module("myApp", ['ngRoute']);
    app.controller('BradyController', BradyController);

//Our database simulation that holds our Brady obects
var bradyDatabase = [
  {name: "Mike Brady", img:"img/mike.jpeg"},
  {name: "Carol Brady", img:"img/carol.jpeg"}
];

//inject window
BradyController.$inject = ['$window'];

function BradyController($window){
  var self = this;
  self.bradyBunch = bradyDatabase;
  self.newBrady = {name: "", img: "img/"};

  self.addBrady = function (){
    console.log(self.newBrady);
    bradyDatabase.push(self.newBrady)
    $window.location.href = '/#/'
  };//End addBrady
}//End BradyController
