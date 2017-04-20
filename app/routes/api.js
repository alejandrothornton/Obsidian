//ROUTES FOR API

//initializing variables
var Character = require('../models/character');
var Attribute = require('../models/attribute');

//Route subfiles (if applicable)
var charRoutes = require('./charRoutes');
var attrRoutes = require('./attribRoutes');

//ROUTES
module.exports = function(app, express) {

  var apiRouter = express.Router();

  apiRouter.use(function(req, res, next) {
    console.log('Someone came to our app!');
    next();
  });

  //TEST ROUTE
  apiRouter.get('/', function(req, res) {
    res.json({ message: 'Very stronk.'});
  });

  //CHARACTER ROUTING
  apiRouter.route('/characters')

    //Creating a new character
    .post(charRoutes.create)

    //Loading the characters to populate the home screen
    .get(charRoutes.list);

  apiRouter.route('/characters/:char_id')

		//get the character with that id
		.get(charRoutes.retrieve)

		//update the character with this id
		.put(charRoutes.modify)

		//delete the character with this id
		.delete(charRoutes.expunge);

  //ATTRIBUTE ROUTING
  apiRouter.route('/attributes')

    .post(attrRoutes.create)

    .get(attrRoutes.list);

  apiRouter.route('/attributes/:attr_id')

    .get(attrRoutes.retrieve)

    .put(attrRoutes.modify)

    .delete(attrRoutes.expunge);

  apiRouter.route('/attributes/list/:type')

    .get(attrRoutes.listByType);

  return apiRouter;
};
