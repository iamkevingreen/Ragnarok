Words = new Mongo.Collection('words');

Meteor.methods({
  words: function() {
    console.log('paych');
    // return Words.find({}, {sort: {rand:-1}});
    var array = Words.find().fetch();
    var randomIndex = Math.floor( Math.random() * array.length );
    var element = array[randomIndex];
    console.log(element);
    return element;
    // setInterval(function(){return element;}, 3000);
    console.log(element);
  }
});
