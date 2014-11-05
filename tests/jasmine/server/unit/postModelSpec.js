"use strict";
describe("Post", function () {
    it("should be created with title and content", function () {
        spyOn(Post, "insert").and.callFake(function(doc, callback) {
            // simulate async return of id = "1";
            callback(null, "1");
        });

        var post = new Post(null, "Tutorial 1", "young buck");

        expect(post.title).toBe("Tutorial 1");
        expect(post.content).toBe("young buck");

        post.save();

        // id should be defined
        expect(post.id).toEqual("1");
        expect(Posts.insert).toHaveBeenCalledWith({title: "Tutorial 1", content: "young buck"}, jasmine.any(Function));
    });
});
