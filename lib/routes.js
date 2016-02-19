FlowRouter.route('/', {
  name: 'home',
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {top: 'header', main: 'postList'});
  }
});

FlowRouter.rout('/blog/:postId', {
  name: 'blog',
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {top: 'header', main: 'singlePost'});
  }
})
