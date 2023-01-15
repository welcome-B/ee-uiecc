
'use strict'

const { readFile } = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)

const https = require('https')

const READ_OPTIONS = { encoding: 'UTF-8' }
const INDEX_URL = 'D:/ngaï/Semestre 6/Technologie et programmation web/moteur_de_recherche/index.html'
// const RESULTAT_URL = 'D:/ngaï/Semestre 6/Technologie et programmation web/moteur_de_recherche/resultat.html'

module.exports = async() => {

    //Opération

    //Récupérer le contenu du fichier html index.html
    const contenu = await readFileAsync(INDEX_URL, READ_OPTIONS)
    // const contenu1 = await readFileAsync(RESULTAT_URL, READ_OPTIONS)

    //Retourner la page HTML 
    return contenu
    // return contenu1
}









// Requete et reponse sur internet
// https.createServer((req, res) => {
//     res.redirect('http://google.com')
//     response.end('')
// })
 

// app.get('/search', (req, res) => {
//     const client = net.connect(1120, 'localhost', err => {});
//     let term = req.query.query;
//     console.log(`Nuevo query | SEARCH | ${new Date()}`);
//     client.write(`GET::term::${term}`, err => {
//       client.end(() => {
//         const server = net.createServer(c => {
//           c.on('data', data => {
//             stream = data.toString('utf-8');
//             stream = stream.substring(1, stream.length - 1);
//             results = [];
//             stream = stream.split(',');
//             for (i in stream) {
//               if (stream[i] != '') {
//                 results.push(stream[i].trim());
//               }
//             }
  
//             server.close(() => {
//               res.json({
//                 results
//               });
//             });
//           });
//         });
//         server.listen(1121, () => {
//           console.log(`Nuevo response ${new Date()}`);
//         });
//       });
//     });
//   });
  
//   app.get('/results', (req, res) => {
//     const client = net.connect(1120, 'localhost', err => {});
//     let term = req.query.query;
//     console.log(`Nuevo query | RESULTS | ${new Date()}`);
//     client.write(`GET::results::${term}`, err => {
//       client.end(() => {
//         const server = net.createServer(c => {
//           c.on('data', data => {
//             stream = data.toString('utf-8');
//             console.log(stream);
//             results = [];
//             stream = stream.split('-#-#');
//             for (i in stream) {
//               if (stream[i] != '') {
//                 brokenStream = stream[i].split('\n');
//                 brokenStream = brokenStream.filter(function(item) {
//                   return item !== '';
//                 });
//                 result = {
//                   title: brokenStream[0],
//                   href: brokenStream[1],
//                   url: brokenStream[2],
//                   metaDescription: brokenStream[3],
//                   rank: brokenStream[4]
//                 };
//                 console.log(result);
//                 results.push(result);
//               }
//             }
  
//             server.close(() => {
//               res.json({
//                 results
//               });
//             });
//           });
//         });
//         server.listen(1121, () => {
//           console.log(`Nuevo response ${new Date()}`);
//         });
//       });
//     });
//   });
  
//   app.listen(PORT, () => console.log(`Tunel corriendo en puerto ${PORT}`));
