const express = require("express");
const {
  ajouteUtilisateur,
  getUtilisateurs,
  updateUtilisateur,
  deletUtilisateur,
} = require("../Controllers/Utilisateur");
const router = express.Router();
router.route("/utilisateurs").post(ajouteUtilisateur);
router.route("/utilisateurs").get(getUtilisateurs);
router.route("/utilisateurs/:id").put(updateUtilisateur);
/*router.route("/utilisateurs/:id").get(getUtilisateur);*/
router.route("/utilisateurs/:id").delete(deletUtilisateur);
module.exports = router;
