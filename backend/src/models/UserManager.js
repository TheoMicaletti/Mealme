const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "users";

  findByUserPassword(username, password) {
    return this.connection.query(
      `SELECT id, username FROM ${UserManager.table} WHERE username = ? AND password = ?`,
      [username, password]
    );
  }

  async insert(username, password) {
    const [result] = await this.connection.query(
      `insert into ${UserManager.table} (username, password) values (?, ?)`,
      [username, password]
    );

    return { id: result.insertId, username };
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set username = ? where id = ?`,
      [user.username, user.id]
    );
  }
}

module.exports = UserManager;
