Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('posts');
  }
});


Router.route('/', {
  name: 'postsList'
});
Router.route('/p/:_id', {
  name: 'postPage',
  data: function() {
    return Posts.findOne(this.params._id);
  }
})

var requireLogin = function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

// Admin Routes
Router.route('/secret/', {
  name: 'dashboard'
});
Router.route('/secret/submit', {
  name: 'postSubmit'
});


// Router.onBeforeAction(function() { Errors.clearSeen(); });
Router.onBeforeAction('dataNotFound', {
  only: 'postPage'
});

// require access
Router.onBeforeAction(requireLogin, {
  only: 'postSubmit'
});
Router.onBeforeAction(requireLogin, {
  only: 'dashboard'
});
