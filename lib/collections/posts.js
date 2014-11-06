Posts = new Mongo.Collection('posts');

var Schemas = {};

Schemas.Post = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  publishedAt: {
    type: Date,
    label: "Date you want to publish story",
    optional: true
  },
  content: {
    type: String,
    label: "Post content",
    autoform: {
      type: "textarea"
    }
  }
});

Posts.attachSchema(Schemas.Post);

Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);


    // var postWithSameLink = Posts.findOne({ title: postAttributes.title});
    // if (postWithSameLink) {
    //   return {
    //     postExists: true,
    //     _id: postWithSameLink._id
    //   }
    // }

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.name,
      published: new Date(),
      submitted: new Date()
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
})


Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if the user is signed in
    return !! userId;
  }
})
