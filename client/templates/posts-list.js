Template.postsList.onCreated(function () {
  this.subscribe('allPosts');
})

Template.postsList.helpers({
  getPosts: function () {
    return Posts.find({}, { sort: { createdAt: -1 }});
  }
});
