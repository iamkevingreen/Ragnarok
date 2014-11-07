Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      publishedAt: $(e.target).find('[name=publishedAt]').val(),
      content: $(e.target).find('[name=content]').val()
    };

    Meteor.call('postInsert', post, function(error, result) {

      // abort and display error
      if (error)
        return alert(error.reason);

      // please choose a unique page slug to prevent duplication
      // if (result.postExists)
      //   alert('This link has already beeen posted');


      Router.go('postPage', {_id: result._id});
    })
  }
});

Template.postSubmit.rendered = function() {
  $('.datepicker').pickadate({
    format: 'yyyy-mm-dd'
  });


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

};
