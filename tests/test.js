'use strict'

var assert = require('assert');

suite('submitPosts', function() {
  test('server initialization', function(done, server) {
    server.eval(function() {
      var collection = Posts.find().fetch();
      emit('collection', collection);
    }).once('collection', function(collection) {
      assert.equal(collection.length, 0);
      done();
    });
  });
})
