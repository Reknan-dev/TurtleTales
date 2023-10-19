const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Registrazione
registerUser = async (req, res) => {
  console.log("Register endpoint hit");
  const { username, password, email } = req.body;

  const existingUser = await User.findOne({ email });
  const existingUserByUsername = await User.findOne({ username });

  const errors = {};
  if (existingUser) {
    errors.email = "Email già registrata.";
  }
  if (existingUserByUsername) {
    errors.username = "Username già registrato.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(409).send(errors);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({
      username,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      email,
    });
    await user.save();
    res.status(201).send({ message: "Utente registrato con successo!" });
  } catch (error) {
    res.status(500).send({ error: "Errore durante la registrazione." });
  }
};

// Login

loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  // Se l'utente esiste e la password corrisponde
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET
    );

    res.send({ message: "Login successfully!", token });
  } else {
    res.status(401).send({ error: "Invalid username or password." });
  }
};

getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("username");
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.send(user);
  } catch (error) {
    res
      .status(500)
      .send({
        error: "Error retrieving user information",
      });
  }
};

homePage = (req, res) => {
  res.send();
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
  homePage,
};
