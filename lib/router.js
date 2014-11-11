Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('posts');
  }
});

Router.map(function() {
    this.route('methodExample', {
        path: '/api/call',
        where: 'server',
        action: function() {
            // GET, POST, PUT, DELETE
            var requestMethod = this.request.method;
            // Data from a POST request
            var requestData = this.request.body;
            // Could be, e.g. application/xml, etc.
            this.response.writeHead(200, {'Content-Type': 'text/html'});
            this.response.end('<html><body>Your request was a ' + requestMethod + '</body></html>');
        }
    });
});

Router.route('/', {
  name: 'postsList'
});
Router.route('/p/:_id', {
  name: 'postPage',
  data: function() {
    return Posts.findOne(this.params._id);
  }
});
Router.route('/p/:_id/edit', {
  name: 'postEdit',
  data: function() {
    return Posts.findOne(this.params._id);
  }
});

Router.route('/products', { where: 'server'})
  .get(function() {

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
