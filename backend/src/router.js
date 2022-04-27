const express = require("express");

const { IngredientController } = require("./controllers");

const router = express.Router();

router.get("/ingredients", IngredientController.browse);
router.get("/ingredients/:id", IngredientController.read);
router.put("/ingredients/:id", IngredientController.edit);
router.post("/ingredients", IngredientController.add);
router.delete("/ingredients/:id", IngredientController.delete);

module.exports = router;
