var Attribute = require('mongoose').model('Attribute');

exports.create = function(req, res) {

  var attr = new Attribute();
  attr.name = req.body.name;
  attr.type = req.body.type;
  attr.description = req.body.description;

  attr.save(function(err) {
    if (err) res.send(err);

    res.json({ message: 'Attribute created!'});
  });
};

exports.list = function(req, res) {
  Attribute.find(function(err, attrs) {
    if (err) res.send(err);

    //return the users
    res.json(attrs);
  });
};

// exports.listByType = function(req, res, $filter) {
//   Attribute.find(req.params.type, function(err, attrs) {
//     if(err) res.send(err);
//
//     attrs = $filter('filter')(attrs, {type: req.params.type}, true);
//     res.json(attrs);
//   });
// };

exports.retrieve = function(req, res) {
  Attribute.findById(req.params.attr_id, function(err, attr) {
    if(err) res.send(err);

    res.json(attr);
  });
};

exports.modify = function(req, res) {
  Attribute.findById(req.params.attr_id, function(err, attr) {
    if(err) res.send(err);

    if(req.body.name) attr.name = req.body.name;
    if(req.body.type) attr.type = req.body.type;
    if(req.body.description) attr.description = req.body.description;

    attr.save(function(err) {
      if(err) res.send(err);

      res.json({ message: 'Attribute updated!'});
    });
  });
};

exports.expunge = function(req, res) {
  Attribute.remove({
    _id: req.params.attr_id
  }, function(err, attr) {
    if(err) res.send(err);

    res.json({ message: 'Successfully deleted!'});
  });
};
