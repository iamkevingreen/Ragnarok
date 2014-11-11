Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    var currentPostId = this._id;
    var postProperties = {
      title: $(e.target).find('[name=title]').val(),
      publishedAt: $(e.target).find('[name=publishedAt]').val(),
      content: $(e.target).find('[name=content]').val()
    }
    Posts.update(currentPostId, {
      $set: postProperties
    }, function(error) {
      if (error) { // display the error to the user
        alert(error.reason);
      } else {
        Router.go('postPage', {
          _id: currentPostId
        });
      }
    });
  },
  'click .delete': function(e) {
    e.preventDefault();
    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});


Template.postEdit.rendered = function() {
  // $('.datepicker').pickadate({
  //   format: 'yyyy-mm-dd',
  // });
  inject_old_content();


  $('#editControls a').click(function(e) {
    switch($(this).data('role')) {
      case 'h1':
      case 'h2':
      case 'p':
        document.execCommand('formatBlock', false, $(this).data('role'));
        break;
      default:
        document.execCommand($(this).data('role'), false, null);
        break;
      }
    update_output();
  })

  $('#editor').bind('blur keyup paste copy cut mouseup', function(e) {
    update_output();
  })

  function update_output() {
    $('#output').val($('#editor').html());
  }

  function inject_old_content() {
     $('#editor').html($('#output').val());
  }

};
