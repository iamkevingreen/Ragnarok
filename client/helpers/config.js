Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

var requireLogin = function() {
  if (!Meteor.user()) {
    return false;
  } else {
    return true;
  }
}
