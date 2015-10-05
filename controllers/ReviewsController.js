movieSite.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, MoviesFactory, UtilitiesFactory) {
  $scope.reviews = MoviesFactory.reviews;
  $scope.MoviesFactory = MoviesFactory;

  $scope.selectedReview = UtilitiesFactory.findById(MoviesFactory.reviews, $stateParams.id);
});
