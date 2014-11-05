Meteor.publish('posts', function() {
 return Posts.find();
});

Meteor.publish("directory", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});
