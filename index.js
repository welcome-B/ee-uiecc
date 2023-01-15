
//Importation du paquet express 
const { response } = require('express')
const express = require('express')
//const fetch = require('node-fetch')
//const { default: fetch } = require('node-fetch')
//Création de l'application express
const app = express()
const PORT = 6400 //443



app.use(express.json())
// app.use(express.urlencoded())

//Importer la page d'accueil
const genererPageAccueil = require('./pages/index.get.js')

app.get('/', async(req, res) => {
    const indexHtml = await genererPageAccueil()
    res.send(indexHtml)
})


app.get('/resultat', (req, res) => {
    res.sendFile(__dirname + '/public/resultat.html')

    // const btn_search = document.getElementById('resultat')
    // btn_search.addEventListener('click', (e) => {
    //     location:'index.html'
    // } )
})

//Retourner les styles
app.use('/asset', express.static('D:/ngaï/Semestre 6/Technologie et programmation web/moteur_de_recherche/asset/'))
app.use('/images', express.static('D:/ngaï/Semestre 6/Technologie et programmation web/moteur_de_recherche/images/'))









// async function afficherResultat(){
//     let result = await fetch("https://google.serper.dev/search")
//     let data = await result.json()
//     //document.querySelector('.tab')
// }


app.listen(PORT, () => {
    console.log('Serveur demaré: http://localhost:$(PORT)')
})

// app.listen(app.get("port"), () =>
//   console.info("Application listening on port " + app.get("port"))
// );