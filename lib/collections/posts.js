Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if the user is signed in
    return !! userId;
  }
})

// A Tutorial class that takes a document in its constructor
Post = function (id, title, content, owner) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._owner = owner;
};

Post.prototype = {
    get id() {
        // readonly
        return this._id;
    },
    get owner() {
        // readonly
        return this._owner;
    },
    get title() {
        return this._title;
    },
    set title(value) {
        this._title = value;
    },
    get content() {
        return this._content;
    },
    set content(value) {
        this._content = value;
    },
    save: function() {
        // remember the context since in callback it is changed
        var that = this;
        var doc = {title: this.title, content: this.content};

        Posts.insert(doc, function(error, result) {
            that._id = result;
        });
    }
};
