Template.singlePost.onCreated(function () {
  var postId = FlowRouter.getParam('postId');
  this.subscribe('singlePost', postId);
});

Template.singlePost.helpers({
  getPost: function () {
    return Posts.findOne();
  }
});
