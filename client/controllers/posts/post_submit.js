Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val()
    };
    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});

Template.postSubmit.rendered = function() {
  $('#content').summernote({
     toolbar: [
    //[groupname, [button list]]

    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']],
    ['insert', ['picture', 'link', 'video']]
  ]
  });
};
