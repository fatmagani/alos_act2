const express = require('express')
const app = express()
const programmes_alimentaires = require('./programme_alimentaire.json')
const programmes_entrainements = require('./programme_entrainement.json')

// Middleware
app.use(express.json())

app.get('/programmes_alimentaires', (req,res) => {
   return res.status(200).json(programmes_alimentaires)
  
})

app.get('/programmes_alimentaires/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const programme_alimentaire = programmes_alimentaires.find(programme_alimentaire => programme_alimentaire.id === id)
    return res.status(200).json(programme_alimentaire)
    
})


app.put('/programmes_alimentaires/:id', (req,res) => {
 
  const id = parseInt(req.params.id)
  let programme_alimentaire = programmes_alimentaires.find(programme_alimentaire => programme_alimentaire.id === id)
  if(programmes_alimentaires.find(programme_alimentaire => programme_alimentaire.id === id)){
  programme_alimentaire.type_régime=req.body.type_régime,
  programme_alimentaire.période=req.body.période,
  programme_alimentaire.menu1=req.body.menu1,
  programme_alimentaire.menu2=req.body.menu2,
  programme_alimentaire.menu3=req.body.menu3,
  programme_alimentaire.menu3=req.body.menu3}
 return res.status(200).json(programme_alimentaire)
})


app.delete('/programmes_alimentaires/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let programme_alimentaire = programmes_alimentaires.find(programme_alimentaire => programme_alimentaire.id === id)
    programmes_alimentaires.splice(programmes_alimentaires.indexOf(programme_alimentaire),1)
   return res.status(200).json(programmes_alimentaires)
})
const { check, validationResult } = require('express-validator');
app.post('/programmes_alimentaires', [
  check('type_régime').isIn(['abdos', 'acide base', 'anti-cellulite', 'antoine', 'atkins', 'belle plante', 'circadien', 'citron', 'CSIRO', 'jeûne', 'dissocié', 'dukan', 'fibres', 'forking', 'groupe sanguin', 'hollywood', 'hormonal', 'hyperprotéine', 'hypocalorique', 'index glycémique', 'jacques fricker', 'jacques fricker', 'karl lagerfeld', 'kousmine', 'macrobiotique', 'mayo', 'mc keith', 'méditerranéen', 'miami', 'multicolore', 'okinawa', 'paléolithique', 'paul-loup sulitzer', 'pommes de terre', 'portfolio', 'pritikin', 'protidique', 'sans sel', 'savoir maigrir', 'scarsdale', 'seignalet', 'shapiro', 'shelton', 'sonia Dubois', 'soupe', 'starter', 'the Zone', 'végétarien', 'véronique Genest']),
  check('menu1').isLength({ min: 50 }),
  check('menu2').isLength({ min: 50 }),
  check('menu3').isLength({ min: 50 }),
  check('menu4').isLength({ min: 50 }),
  check('période').isIn(['15 jours','1 mois','2 mois','3 mois']),
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
   
  }

  else {
    programmes_alimentaires.push(req.body)
    return res.status(200).json(programmes_alimentaires)
    
  }

  
 
})


  












app.get('/programmes_entrainements', (req,res) => {
    res.status(200).json(programmes_entrainements)
})

app.get('/programmes_entrainements/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const programme_entrainement = programmes_entrainements.find(programme_entrainement => programme_entrainement.id === id)
    return res.status(200).json(programme_entrainement)
})






app.post('/programmes_entrainements', [
    check('type_entrainement').isIn(['cardio', 'circuit', 'par intervalles', 'crossfit', 'fonctionnel', 'relaxation']),
    check('exercices_populaires').isLength({ min: 50 }),

  ], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
  
    else {
        programmes_entrainements.push(req.body)
        return res.status(200).json(programmes_entrainements)
     
    }

    
   
  })
 

app.put('/programmes_entrainements/:id', (req,res) => {
  
    const id = parseInt(req.params.id)
    let programme_entrainement = programmes_entrainements.find(programme_entrainement => programme_entrainement.id === id)
     
    if(programmes_entrainements.find(programme_entrainement => programme_entrainement.id === id))
    {
    programme_entrainement.type_entrainement=req.body.type_entrainement,

    programme_entrainement.exercices_populaires=req.body.exercices_populaires
    }
   
   return res.status(200).json(programmes_entrainements)
})
app.delete('/programmes_entrainements/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let programme_entrainement = programmes_entrainements.find(programme_entrainement => programme_entrainement.id === id)
   
    programmes_entrainements.splice(programmes_entrainements.indexOf(programme_entrainement),1)
    return res.status(200).json(programmes_entrainements)
   
})

app.use((req, res, next)=> {
  var error = new Error('Not Found');
  error.status = 404;
  next(error);
});


app.use(function(error, req, res, next) {
  res.status(error.status || 500);
  res.json({error:{
    message:error.message
  }
})
});






const PORT = process.env.PORT || 8080;


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));


module.exports = app;