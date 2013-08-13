
/*
 * GET home page.
 */

exports.homeview = function(req, res){
  res.render('homeview', { title: 'Recordspace.com - your record store!' });
};
