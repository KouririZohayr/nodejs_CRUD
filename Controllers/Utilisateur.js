const client = require("../DB/connect");
const { Utilisateur } = require("../Models/utilisateur");

const ajouteUtilisateur = async (req, res) => {
  try {
    let utilisateur = new Utilisateur(
      req.body.nom,
      req.body.prenom,
      req.body.adresse,
      req.body.telephones
    );
    let result = await client
      .db()
      .collection("utilisateurs")
      .insertOne(utilisateur);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};
const getUtilisateurs = async (req, res) => {
  try {
    let cursor = client.db().collection("utilisateurs").find();

    let result = await cursor.toArray();
    res.status(200).json(result);
  } catch (erreur) {
    console.log(error);
    res.status(501).json(error);
  }
};
const updateUtilisateur = async (req, res) => {
  try {
    let cursor = await client
      .db()
      .collection("utilisateurs")
      .updateOne({ nom: "zohair" }, { $set: { nom: "kouriri" } });
    res.status(200).json(cursor);
  } catch (erreur) {
    console.log(erreur);
    res.status(501).json(erreur);
  }
};

const deletUtilisateur = async (req, res) => {
  try {
    let cursor = await client
      .db()
      .collection("utilisateurs")
      .deleteOne({ nom: "mohammed" });
    res.status(200).json(cursor);
  } catch (erreur) {
    console.log(erreur);
    res.status(501).json(erreur);
  }
};

module.exports = {
  ajouteUtilisateur,
  getUtilisateurs,
  updateUtilisateur,
  deletUtilisateur,
};
