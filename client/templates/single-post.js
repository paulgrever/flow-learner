Template.singlePost.onCreated(function () {
  let id = FlowRouter.getParam('postId');
  this.subscribe('singlePost', id);
});

Template.singlePost.helpers({
  getPost: function () {
    return Posts.findOne();
  }
});
