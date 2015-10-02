movieSite.controller('TopicsCtrl', function TopicsCtrl($scope, MoviesFactory) {
  $scope.topics = MoviesFactory.topics;
  $scope.MoviesFactory = MoviesFactory;
});
