//app.js
var app = angular.module("myApp", ['ngRoute']);
    app.controller('BradyController', BradyController);

//Our database simulation that holds our Brady obects
var bradyDatabase = [
  {name: "Mike Brady", img:"img/mike.jpeg"},
  {name: "Carol Brady", img:"img/carol.jpeg"}
];

//inject window
BradyController.$inject = ['$window','$routeParams'];

function BradyController($window,$routeParams){
  var self = this;
  self.bradyBunch = bradyDatabase;
  self.newBrady = {name: "", img: "img/"};//info being passed from _new.html
  self.currentBrady = {};//info to be passed to _profile.html

  self.addBrady = function (){
    console.log(self.newBrady);
    bradyDatabase.push(self.newBrady);
    $window.location.href = '/#/';
  };//End addBrady

  self.bradyProfile = function() {
    console.log($routeParams);
    self.currentBrady = bradyDatabase[$routeParams.id];
    console.log(self.currentBrady);
  };//End bradyProfile
}//End BradyController
