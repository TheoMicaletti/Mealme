const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "users";

  findByUserPassword(username, password) {
    return this.connection.query(
      `SELECT * FROM ${UserManager.table} WHERE username = ? AND password = ?`,
      [username, password]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (username, password) values (?, ?)`,
      [user.username, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set username = ? where id = ?`,
      [user.username, user.id]
    );
  }
}

module.exports = UserManager;
