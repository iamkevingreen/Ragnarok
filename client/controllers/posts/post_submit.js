Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val()
    };

    Meteor.call('postInsert', post, function(error, result) {

      // abort and display error
      if (error)
        return alert(error.reason);

      // please choose a unique page slug to prevent duplication
      if (result.postExists)
        alert('This link has already beeen posted');


      Router.go('postPage', {_id: result._id});
    })
  }
});

// Template.postSubmit.rendered = function() {
//   $('#content').summernote();
// };
