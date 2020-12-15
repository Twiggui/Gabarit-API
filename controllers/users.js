const User = require('../models/users');

module.exports.handlePost = async (req, res) => {
  const user = await User.createUserInDatabase(req.body);
  return res.status(201).send(user);
};
