const express = require("express");
const { connect } = require("./DB/connect");
const routerUtilisateurs = require("./Routers/utilisateur");
const app = express();
app.use(express.json());
app.use("/api/v1", routerUtilisateurs);
app.listen(3000, (res, req) => {
  console.log("reussit");
});
connect("mongodb://localhost:27017/", (err) => {
  if (err) {
    console.log("errur lors de la connection  la bass de  donne");
    process.exit(-1);
  } else {
    console.log("connection avec la base de danne etablie");
  }
});
