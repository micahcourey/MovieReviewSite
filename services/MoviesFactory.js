movieSite.factory('MoviesFactory', function MoviesFactory() {
  var factory = {};
  factory.topics = [];

  factory.addTopic = function() {
    factory.topics.push({ title: factory.topicTitle, id: factory.topics.length + 1, discussions: [] });
    factory.topicTitle = null;
  };
  return factory;
});
