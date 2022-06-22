module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
try {
  if(!req.user || req.user.email !== 'admin')
  throw new Error('You are not important enough to view this page');

  next();
} catch (e) {
  e.status = 403;
  next(e);
}
};
