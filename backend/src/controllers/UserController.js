const models = require("../models");

class UserController {
  static browse = (req, res) => {
    models.users
      .findAllUsers()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = async (req, res) => {
    const { username, password } = req.body.user;

    const [result] = await models.users.findByUserPassword(username, password);

    if (result.length) {
      const user = result[0];

      // Ajout des recettes favorites au profil de l'utilisateur
      const [favorites] = await models.favorites.findByUser(user.id);
      user.favorites = favorites;
      res.send(user);
    } else {
      res.status(401).send("Bad credentials !");
    }
  };

  static sign = (req, res) => {
    const { username, password } = req.body.user;

    models.users
      .insert(username, password)
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserController;
