/*
 * GET home page.
 */

// hier backbone hinzuf�gen

exports.index = function(req, res){
  res.render('index', { title: 'Recordspace.com - your record store!' });
};
