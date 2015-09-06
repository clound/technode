/**
 * Created by lenovo on 15-9-6.
 */
angular.module('technode').config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true)
    $routeProvider.when('/',{
        templateUrl:'/pages/room.html',
        controller:'RoomCtrl'
    }).when('login',{
        templateUrl:'/pages/login.html',
        controller:'LoginCtrl'
    }).otherwise({
        redirecTo:'/login'
    })
})