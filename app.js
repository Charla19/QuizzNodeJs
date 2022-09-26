let express = require('express');
let bodyparser = require('body-parser');
var compteur1 = 1;
var compteur2 = 1;
var compteur3 = 1;
var compteur4 = 1;
var compteur5 = 1;

let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/publics', express.static("./publics"));
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get('/',(req, res) => {
    res.render('index', {test : 'Authentification', text: ""})
});


// app.post('/',(req, res) => {
//     let table = [req.body.password1, req.body.password2];
//     if(req.body.nom ==='' || req.body.password1 === '' || req.body.password2 === ''){
//         res.render('index', {test : 'Authentification', text: "veuillez entrer vos identifiants"})
//     }
//     if (table[0] !== table[1]) {
//         res.render('index', {test : 'Authentification', text: "Mot de passe incorrecte", })
//     } 
//     if (table[0] === table[1]){
//         res.render('index', {test : 'Authentification', text: "Mot de passe correcte", })
//     }
// });

app.get('/question1', (req, res) => {
    return res.render('question1', {});
});

app.get('/question2', (req, res) => {
    return res.render('question2', {});
});

// ==================== ++++++++++++ =====================
app.post('/verif_1', (req, res) => {
    if(compteur1 > 1) return res.redirect('question2');
    const reponse = req.body.choix;
    if(reponse === "danseuse") res.redirect('question2');
    else {
        compteur1++;
        res.redirect('question1')
    }
});

app.post('/verif_2', (req, res) => {
    if(compteur2 > 1) return res.redirect('question3');
    const reponse = req.body.choix;
    if(reponse === "mpitabataba") res.redirect('question3');
    else {
        compteur2++;
        res.redirect('question2');
    }
});

app.post('/verif_3', (req, res) => {
    if(compteur3 > 1) return res.redirect('question4');
    const reponse = req.body.choix;
    if(reponse === "mpitabataba") res.redirect('question4');
    else {
        compteur3++;
        res.redirect('question3');
    }
});

app.post('/verif_4', (req, res) => {
    if(compteur4 > 1) return res.redirect('question5');
    const reponse = req.body.choix;
    if(reponse === "mpitabataba") res.redirect('question5');
    else {
        compteur4++;
        res.redirect('question4');
    }
});

app.post('/verif_5', (req, res) => {
    if(compteur5 > 1) return res.redirect('question1');
    const reponse = req.body.choix;
    if(reponse === "mpitabataba") res.redirect('question1');
    else {
        compteur5++;
        res.redirect('question5');
    }
});

module.exports = app;