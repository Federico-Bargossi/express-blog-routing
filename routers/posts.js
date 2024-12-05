const express = require("express");
const router = express.Router();
const posts = require("../data");

//index 
router.get('/', (req, res) => {
    const data = {
        posts: posts,
        totale: posts.length,
    }
    res.json(data);
})

//show
router.get("/:id", (req, res) => {
    const bachecaId = req.params.id;
    res.send("Qui prelevo i dettagli di un singolo post " + bachecaId);
})

//create - operazione che crea un nuovo elemento nei dati
router.post("/", (req, res) => {
    res.send("Qui aggiungo il nuovo post ai miei dati");
})

//update - aggiornare i dati di un post
router.put("/:id", (req, res) => {
    const bachecaId = req.params.id;
    res.json("Qui aggiorno tutti i dati di un post con id " + bachecaId);
})

router.patch("/:id", (req, res) => {
    const bachecaId = req.params.id;
    res.json("Qui aggiorno alcuni dati di un post con id " + bachecaId);
})

router.delete("/:id", (req, res) => {
    const bachecaId = req.params.id;
    res.json("qui cancello la pizza con id " + bachecaId);
})

module.exports = router;