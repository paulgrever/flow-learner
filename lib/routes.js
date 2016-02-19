FlowRouter.route('/', {
  action: function (params, queryParams) {
    console.log('we at least made it');
    BlazeLayout.render('layout', { top: 'header', main: 'postsList' });
  },
  name: 'home'
});

FlowRouter.route('/blog/:postId', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { top: 'header', main: 'singlePost' });
  },
  name: 'blog'
});
