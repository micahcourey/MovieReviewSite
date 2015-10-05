var movieSite = angular.module('movieSite', ['ui.router']);

movieSite.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'home': {
        templateUrl: "partials/home.html"
      }
    }
  });

  $stateProvider.state('reviews', {
    url: "/reviews/:id",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/reviews.html",
        controller: "ReviewsCtrl"
      },
      'body-right': {
        templateUrl: "partials/review-body.html",
        controller: "ReviewsCtrl"
      }
    }
  });
});
