/**
 * GET /
 * Homepage
 */

exports.homePage = async (req, res) => {
  const locals = {
    title: "NodeJS Notes",
    description: "Free NodeJS Notes for everyone!",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};
