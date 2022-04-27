const AbstractManager = require("./AbstractManager");

class IngredientManager extends AbstractManager {
  static table = "ingredients";

  insert(ingredients) {
    return this.connection.query(
      `insert into ${IngredientManager.table} (title) values (?)`,
      [ingredients.title]
    );
  }

  update(ingredients) {
    return this.connection.query(
      `update ${IngredientManager.table} set title = ? where id = ?`,
      [ingredients.title, ingredients.id]
    );
  }
}

module.exports = IngredientManager;
