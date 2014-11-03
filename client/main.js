Meteor.subscribe('words');

Template.body.events({
  "click button": function() {
    Meteor.call("words");
    console.log('click');
  }
})
