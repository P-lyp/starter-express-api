// FIREBASE

const express = require("express");
const app = express();
const firebase = require("firebase");
const cors = require("cors");
//instalar dependencia cors

app.use(express.json());
app.use(cors());

const firebaseConfig = {
    apiKey: "AIzaSyBbHMX-6cW5lWUpdL8bEn3nkndgIam_chw",
    authDomain: "bd-cervejaria.firebaseapp.com",
    projectId: "bd-cervejaria",
    storageBucket: "bd-cervejaria.appspot.com",
    messagingSenderId: "893426681360",
    appId: "1:893426681360:web:81132b0e042e9bc55a2c95",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const usuarios = db.collection("usuarios");

const storedData = [];

app.get("/", (req, res) => {
    console.log("Requisição GET concluída!");
    res.send("API funcionando! - Firebase");
});

app.put("/users", async (req, res) => {
    const newData = req.body;
    await usuarios.add(newData);

    res.send("Dado armazenado com sucesso!");
});

// app.post("/clima", (req, res) => {
//     const data = req.body;
//     storedData.push(data);
//     res.send(newData);
// });

app.get("/users", async (req, res) => {
    const snapshot = await usuarios.get();
    listaUsuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(listaUsuarios);
});

app.listen(process.env.PORT || 3000);
