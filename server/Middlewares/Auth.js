const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const tokenParts = authHeader.split(" ");
  let token;

  if (tokenParts.length === 2 && tokenParts[0] === "Bearer") {
    token = tokenParts[1];
  } else {
    return res.sendStatus(400);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("Error verify JWT:", err);
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

module.exports = auth;
