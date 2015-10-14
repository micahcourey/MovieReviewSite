movieSite.factory('MoviesFactory', function MoviesFactory() {
  var factory = {};
  factory.reviews = [
    {
      title: "The Walk is absorbing and Magical.",
      body: "As a huge fan of Robert Zemeckis (Back to the Future, Forrest Gump, Cast Away) it would be an understatement to say that I was anticipated this movie. Although I thoroughly enjoyed the documentary about the same topic, Man on Wire, I was interested in how the story would play out as a feature film.",
      id: 1
    },
    {
      title: "Freeheld: One Story of Many",
      body: " A touching story based on the struggles of two people in love … that description fits, but leaves out the crucial details that make the saga of Laurel and Stacie so poignant and important. Laurel Hester was an Ocean County, New Jersey police officer who, like most non-heterosexual people of the era, went to extremes to conceal that part of her life for fear of personal and professional reprisals.",
      id: 2
    },
    {
      title: "Shanghai is beautiful and superbly acted",
      body: "The cinematography is excellent and successfully recreates the feel of 40's Shanghai, along with the a secretive atmosphere that enhances the film noir mood. The story moves at a good pace where there isn't a scene too many and you have to keep your mind working to uncover the mysteries Paul Soames is trying to solve.",
      id: 3
    },
    {
      title: "Partisan: Scary Utopia, brilliant acting",
      body: "A sequestered commune is the setting for Ariel Kleiman's disturbing story about 11-year-old Alexander (Jeremy Chabriel), whose father, Gregori (Vincent Cassell) teaches him a life to be divorced from mainstream life, except when Alexander efficiently murders for money. The joy of the communers juxtaposed with their terrible assignments points up the film's allegorical comment on the danger of isolationism.",
      id: 4
    },
    {
      title: "The Martian is a solid space fiction!",
      body: "Based on the book by Andy Weir, The Martian had a great story to deal with; A man stuck up in Mars, his fight for survival and the efforts by the humans to bring him home. Just look at the basic plot, this thing has something out of the world. But the plot is so unique that, this thing can easily formulate a boring tale; this is where The Martian makes a difference.",
      id: 5
    },
  ];

  factory.addReview = function() {
    factory.reviews.push({ title: factory.reviewTitle, body: factory.reviewBody, id: factory.reviews.length + 1 });
    factory.reviewTitle = null;
    factory.reviewBody = null;
  };
  return factory;
});
