exports.isLoggedIn = (req, res, next) => {
  if (req.user) {
    return next();
  }
  return res.status(401).send("You must be logged in to access this resource");
};
