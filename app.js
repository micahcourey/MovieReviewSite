var movieSite = angular.module('movieSite', ['ui.router']);

movieSite.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/home.html"
      }
    }
  });

  $stateProvider.state('reviews', {
    url: "/reviews",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/reviews.html",
        controller: "TopicsCtrl"
      }
    }
  });
});
