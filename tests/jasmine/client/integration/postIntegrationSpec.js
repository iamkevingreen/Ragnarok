"use strict";
describe("Post", function () {
    it("should be created by admins", function (done) {
        // login to system and wait for callback
        Meteor.loginWithPassword("admin@site.com", "admin3210", function(err) {
            // check if we have correctly logged in the system
            expect(err).toBeUndefined();

            // create a new post
            var post = new Post();

            // save the tutorial and use callback function to check for existence
            var id = post.save(function(error, result) {
                expect(error).toBeUndefined();

                // delete created post
                Posts.remove(id);

                Meteor.logout(function() {
                    done();
                })
            });
        });
    });
});
