






























// import fetch from "node-fetch";
// const fetch = require('node-fetch')

// const btn = document.getElementById('resultatR')

// btn.onclick = () => {

// const contenuNew  = document.createElement('contenu_result')
// const contenuNode = document.createTextNode('new info')
// const field =  document.getElementById('champ')
// const element = document.getElementById('.tab')
// element.appendChild(contenuNew)

//     contenuNew.appendChild(contenuNode)

//     // fetch("https://www.google.com/"+field.nodeValue)
//     // .then(response => response.text())
//     // .then(response => {
//     //     contenuNew.appendChild(contenuNode)
//     // })
// }




// const output = document.getElementById("output")
// const btn_search = document.getElementById("resultat")
// const text_field = document.getElementById("field")

// btn_search.onclick = () => {
//      fetch("http://google.com" + text_field.ariaValueText)
//     .then(response => response.json())
//     .then(data => {
//         output.textContent = ""
//         output.textContent = 'R de $(data)'
//         output.append(data)
        
//     })
    
// }



// const { response } = require("express")

// const result = document.getElementById('resultatR')
// const champ = document.getElementById('champ')
// const output = document.getElementById('contenu_result')

// result.onclick = () =>{
//     fetch("https://www.google.com" + champ.value)
//     .then(response => response.json())
//     .then(data => {
//         output.textContent = "";
//         output.textContent = 'Resultat de $(data)';
//         result = data.url;
//         output.append(data)
        
//     })
// }

// const https = require('https')
// //Tentative de requete en ligne
// const OPTIONS = { hostname: 'encrypted.google.com',
//         port: 443,
//         path: '/',
//         method: 'GET', }
//         const req = https.request(options, (res) => {
//             console.log('statusCode:', res.statusCode);
//             console.log('headers:', res.headers);
          
//             res.on('data', (d) => {
//               process.stdout.write(d);
//             });
//           });
          
//           req.on('error', (e) => {
//             console.error(e);
//           });
//           req.end();
        


// app.get('/', async (req, res) => {
//     let content = fs.readFileSync(filePath, 'utf8');
//     let parsed = JSON.parse(content);
//     let display = '';
//     for (let i = 0; i < parsed.length; i++) {
//         display = display + '<td>'+ '<a href="'+ parsed[i].url +'">' + parsed[i].url + '</a>' + '</td>';
//     }
//     res.render('resultat.html', {
//         pageIndex: display,
//         message: 'Indexation'
//     })  

// })

// app.post('/', async (req, res) => {
//     let content = fs.readFileSync(filePath, 'utf8');
//     let parsed = JSON.parse(content);
//     let stocks = [];
//     let html;
//     try {
//         html = await fetch(req.body.url)
//     }catch (err) {
//         res.redirect('/')
//         return;
//     }
//     const boddy = await html.text();
//     const $ = Cheerio.load(boddy)
//     const text = $('body').text();

//     let jsonTab = {
//         url: req.body.url,
//         data: []
//     }

//     for (let i = 0; i < parsed.length; i++) {
//         stocks.push(parsed[i].url);
//     }

//     if (!stocks.includes(req.body.url)) {
//         let tab = Helper.indexwords(text);
//         for(let i = 0; i < tab.length; i++) {
//             let word = tab[i]
//             let counter= Helper.countWord(word, tab);
//             let obj={
//                 mot: word,
//                 compte:counter
//             }
//             jsonTab.data.push(obj);
//             Helper.removeoccurences(tab, word);
//         }
//         parsed.push(jsonTab);      
//         fs.writeFileSync(filePath, JSON.stringify(parsed,null, 4));
//     }   
    
//     res.redirect('http://google.com')

// })

// app.get('/search', (req, res) => {
    

//     res.render('http://google.com', {
//         message: "Recherche"    
//     });
// })

// app.post('/search', (req, res) => {
//     let content = fs.readFileSync(filePath, 'utf8');
//     let parsed = JSON.parse(content);

//     let tab =[];    

//     for(let i = 0; i < parsed.length; i++){
//         for(let j = 0; j < parsed[i].data.length; j++){
//             if (parsed[i].data[j].mot === req.body.url){
//                 let searchRes = {
//                     url: parsed[i].url,
//                     mot: parsed[i].data[j].mot,
//                     compte: parsed[i].data[j].compte
//                 }
//                 tab.push(searchRes);
//             }
//         }
//     }

//     tab.sort(function(a, b){
//         return b.compte - a.compte;
//     });

    

//     let display = '';
//     for (let i = 0; i < tab.length; i++) {
//         display = display + '<p>' +  "Le mot " + tab[i].mot + ' apparait ' + tab[i].compte + ' fois dans le site '+ '<a href="'+tab[i].url+'">' + tab[i].url + '</a>' + '</p>';
//     }


//     if(tab.length == 0) {
//         display = display + '<p>' + 'Le mot ' + req.body.url+ " n'apparait pas dans notre base de donnees" + '</p>'
//     }



//     res.render('http://google.com', {
//         pageIndex: display,
//         message: "Recherche",
//     })
// })


// var myHeaders = new Headers();
// myHeaders.append("X-API-KEY", "d2df19a769e9efca8f6a8e2a0c85fb13e11eccbf");
// myHeaders.append("Content-Type", "application/json");


// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://google.serper.dev/search", requestOptions)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log('error', error));



//  var express = require("express"),
// axios = require("axios");


// app.set("port", 3000);

// app.get("/", function(req, res) {
//   console.log("Requested ");
//   axiosTest().then(data => {
//     console.log(data);
//   });
// });

// function axiosTest() {
//   return axios
//     .get("http://dummy.restapiexample.com/api/v1/employees")
//     .then(response => {
//       return response.data;
//     });
// }
