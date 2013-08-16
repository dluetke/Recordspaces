/*
 * GET home page.
 */

// hier backbone hinzufügen

exports.index = function(req, res){
  res.render('index', { title: 'Recordspace.com - your record store!' });
};
