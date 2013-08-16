
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Recordspace.com - your record store!' });
};
