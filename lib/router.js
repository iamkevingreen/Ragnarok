Router.configure({
 layoutTemplate: 'layout',
 loadingTemplate: 'loading',
 notFoundTemplate: 'notFound',
 waitOn: function() { return Meteor.subscribe('posts'); }
});
Router.route('/', {name: 'postsList'});
Router.route('/p/:_id', {
  name: 'postPage',
  data: function() {
    return Posts.findOne(this.params._id);
  }
})


// Router.onBeforeAction(function() { Errors.clearSeen(); });
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
