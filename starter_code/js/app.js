//app.js
var app = angular.module("myApp", ['ngRoute']);
    app.controller('BradyController', BradyController);

//Our database simulation that holds our Brady obects
var bradyDatabase = [
  {name: "Mike Brady", img:"img/mike.jpeg"},
  {name: "Carol Brady", img:"img/carol.jpeg"}
];

function BradyController(){
  var self = this;
  self.bradyBunch = bradyDatabase
}
