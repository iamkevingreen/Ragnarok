// Controller for Blog Posts

Template.postsList.helpers({
 posts: function() {
 return Posts.find();
 }
});
