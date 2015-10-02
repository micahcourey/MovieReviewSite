movieSite.factory('MoviesFactory', function MoviesFactory() {
  var factory = {};
  factory.topics = [
    {
      title: "Don't ever see Garden State",
      body: "blah blah blah", 
    }
  ];

  factory.addTopic = function() {
    factory.topics.push({ title: factory.topicTitle, body: factory.topicBody });
    factory.topicTitle = null;
    factory.topicBody = null;
  };
  return factory;
});
