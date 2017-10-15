'use strict'
var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // pour toute les urls inconnus
    $urlRouterProvider.otherwise('/page1');

    $stateProvider
        .state('page1', {
            url: "/page1",
            templateUrl: "page1.html"
        })
        .state('page2', {
            url: "/page2",
            templateUrl: "page2.html"
        })
        .state('journal', {
            url: "/journal",
            templateUrl: "journal.html"
        })
        .state('journal.news', {
            url: "/news",
            templateUrl: "journal-news.html"
        })
        .state('reviews', {
            url: "/review",
            templateUrl: "reviews.html"
        })
        .state('exercice', {
            url: "/exercice",
            templateUrl: "exercice.html"
        })
        .state('realisation.web', {
            url: "/web",
            templateUrl: "realisation-web.html"
        })
        .state('realisation.graphique', {
            url: "/graphique",
            templateUrl: "realisation-graphique.html"
        })
        .state('formation', {
            url: "/formation",
            templateUrl: "formation.html"
        })
        .state('fast', {
            url: "/fast",
            templateUrl: "fast.html"
        })
        .state('form', {
            url: "/form",
            templateUrl: "form.html"
        })
        .state('team', {
            url: "/team",
            templateUrl: "team.html"
        })
        .state('team.brice', {
            url: "/brice",
            templateUrl: "team-brice.html"
        })
        .state('team.alexis', {
            url: "/alexis",
            templateUrl: "team-alexis.html"
        })
        .state('team.pauline', {
            url: "/pauline",
            templateUrl: "team-pauline.html"
        })
        .state('legales', {
            url: "/legales",
            templateUrl: "legales.html"
        })
        .state('market', {
            url: "/market",
            templateUrl: "market.html",
            controller: 'marketCtrl'
        })
}])

// app.controller('marketCtrl', ['$scope', '$http', '$state', '$location', function($scope, $http, $state, $location) {
//     $http.get('data.json'){
//       $scope.thisAlbum = $state.params.id;
//       $scope.albums = data;
//     };
// }]);
