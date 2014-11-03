// Controller for Blog Posts

Template.wordsList.helpers({
  words: function() {
    // return Words.find({}, {sort: {rand:-1}});
    var array = Words.find().fetch();
    var randomIndex = Math.floor( Math.random() * array.length );
    var element = array[randomIndex];
    return element;
    // setInterval(function(){return element;}, 3000);
    console.log(element);
  }
});
