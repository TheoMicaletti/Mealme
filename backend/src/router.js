const express = require("express");

const { IngredientController, UserController } = require("./controllers");

const router = express.Router();

router.get("/ingredients", IngredientController.browse);
router.get("/ingredients/:id", IngredientController.read);
router.put("/ingredients/:id", IngredientController.edit);
router.post("/ingredients", IngredientController.add);
router.delete("/ingredients/:id", IngredientController.delete);

router.get("/users", UserController.browse);
router.post("/login", UserController.login);
router.post("/signin", UserController.sign);

module.exports = router;
