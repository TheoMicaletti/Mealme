const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  static table = "favorites";

  findByUser(userId) {
    return this.connection.query(
      `SELECT name FROM ${FavoriteManager.table} WHERE id = ?`,
      [userId]
    );
  }

  insert(favorite) {
    return this.connection.query(
      `insert into ${FavoriteManager.table} (id, name) values (?, ?)`,
      [favorite.id, favorite.name]
    );
  }

  update(favorite) {
    return this.connection.query(
      `update ${FavoriteManager.table} set name = ? where id = ?`,
      [favorite.name, favorite.id]
    );
  }
}

module.exports = FavoriteManager;
