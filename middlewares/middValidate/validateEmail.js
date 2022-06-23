module.exports = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "O campo \"email\" é obrigatório" })
  }

  const regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: "O \"email\" deve ter o formato \"email@email.com\"" })
  }

  next();
};