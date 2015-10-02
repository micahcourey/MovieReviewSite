movieSite.factory('MoviesFactory', function MoviesFactory() {
  var factory = {};
  factory.topics = [];

  factory.addTopic = function() {
    factory.topics.push({ title: factory.topicTitle, body: factory.topicBody });
    factory.topicTitle = null;
  };
  return factory;
});
