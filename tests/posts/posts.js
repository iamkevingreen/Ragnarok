'use strict'

var assert = require('assert');

suite('submitPosts', function() {

  // Ensure that the post collection exists
  test('server initialization', function(done, server) {
    server.eval(function() {
      var collection = Posts.find().fetch();
      emit('collection', collection);
    }).once('collection', function(collection) {
      assert.equal(collection.length, 0);
      done();
    });
  });

   // ensure that -
  // (1) we can add data to the collection
  // (2) after data is added, we can retrieve it
  test('server insert : OK', function(done, server, client) {
    server.eval(function() {
      Posts.insert({content: "wiyo!"  });
      var collection = Posts.find().fetch();
      emit('collection', collection);
    }).once('collection', function(collection) {
      assert.equal(collection.length, 1);
      done();
    });

    client.once('collection', function(collection) {
      assert.equal(Posts.find().fetch().length, 1);
      done();
    });
  });


})
