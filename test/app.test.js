const app = require("../index");
const chai = require("chai");
var should=chai.should(); 
const chaiHttp = require("chai-http");
const { send } = require("express/lib/response");



const { expect } = chai;
chai.use(chaiHttp);
describe("GET /programmes_alimentaires", () => {
 it("it should get all programmes_alimentaires", done => {
  
chai
 .request(app)
.get("/programmes_alimentaires")
.end((err, res) => {
expect(res).to.have.status(200);

 done();
});
});});
describe("GET /programmes_entrainements", () => {
    it("it should get all programmes_entrainements", done => {
   chai
    .request(app)
   .get("/programmes_entrainements")
   .end((err, res) => {
   expect(res).to.have.status(200);
   
    done();
   });
   });});

describe("GET /programmes_alimentaires/:id", () => {
    it("it should get a programme_alimentaire with the given id", done => {
        const programme_alimentaireID=1
   chai
    .request(app)
   .get("/programmes_alimentaires/"+programme_alimentaireID)
   .end((err, res) => {
    res.body.should.have.property('id');
    res.body.should.have.property('type_régime');
    res.body.should.have.property('période');
    res.body.should.have.property('menu1');
    res.body.should.have.property('menu2');
    res.body.should.have.property('menu3');
    res.body.should.have.property('menu4');
    

   expect(res).to.have.status(200);
   
    done();
   });
   });


});

describe("GET /programmes_entrainements/:id", () => {
    it("it should get a programme_entrainement with the given id", done => {
        const programme_entrainementID=1
   chai
    .request(app)
   .get("/programmes_entrainements/"+programme_entrainementID)
   .end((err, res) => {
    res.body.should.have.property('id');
    res.body.should.have.property('type_entrainement');
    res.body.should.have.property('exercices_populaires');
   expect(res).to.have.status(200);
   
    done();
   });
   });


});

describe("POST /programmes_alimentaires", () => {
    it("it should post a new programme_alimentaire", done => {
        let programme_alimentaire={
            
            "type_régime": "hyperprotéine",
            "période": "15 jours",
            "menu1": "Petit_déjeuner: café, thé sans sucre, 1 yaourt au soja, 1/5 de baguette tradition,1 noix de beurre - Déjeuner: salade composée (huile dolive, huile de colza), 1 blanc de volaille grillé, haricots verts, 1 petit-suisse - Dîner: 1 dos de merlan, tomates, 1 portion de fromage de chèvre frais",
            "menu2": "Petit_déjeuner: café, thé non sucré, 1 fromage blanc au soja, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: 1 salade verte, 1 dos de cabillaud, 1 portion de quinoa, 1 petit-suisse - Dîner: 1 tranche de jambon, ratatouille, 1 Carré frais 0 %",
            "menu3": "Petit_déjeuner: café, thé non sucré, 1 fromage blanc, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: concombre, blanc de poulet, champignons, 1 yaourt - Dîner: 1 limande sole, lentilles, 1 yaourt nature",
            "menu4": "Petit_déjeuner:  thé ou café non sucré, 1 petit-suisse nature, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: radis, 1 noix de beurre, épinards, 1 yaourt au soja - Dîner: 1 steack de soja, 1 purée daubergines, 1 fromage blanc au soja"       
          }
   chai
    .request(app)
   .post("/programmes_alimentaires")
   .send(programme_alimentaire)
  
   .end((err, res) => {
  
                
                  expect(res).to.have.status(200);
    done();
   });
   });


});
describe("POST /programmes_alimentaires", () => {
    it("it should give an error of validation of post a new programme_alimentaire", done => {
        const programme_alimentaire={
            
            "type_régime": "hyperproRtéine",
            "période": "144 jours",
            "menu1": "",
            "menu2": "Petit_déjeuner: café, thé non sucré, 1 fromage blanc au soja, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: 1 salade verte, 1 dos de cabillaud, 1 portion de quinoa, 1 petit-suisse - Dîner: 1 tranche de jambon, ratatouille, 1 Carré frais 0 %",
            "menu3": "Petit_déjeuner: café, thé non sucré, 1 fromage blanc, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: concombre, blanc de poulet, champignons, 1 yaourt - Dîner: 1 limande sole, lentilles, 1 yaourt nature",
            "menu4": "Petit_déjeuner:  thé ou café non sucré, 1 petit-suisse nature, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: radis, 1 noix de beurre, épinards, 1 yaourt au soja - Dîner: 1 steack de soja, 1 purée daubergines, 1 fromage blanc au soja"       
          }
   chai
    .request(app)
   .post("/programmes_alimentaires")
   .send(programme_alimentaire)
  
   .end((err, res) => {
   expect(res).to.have.status(422);
   
    done();
   });
   });


});
describe("POST /programmes_entrainements", () => {
    it("it should post a new programme_entrainement", done => {
        const programme_entrainement= {
           
            "type_entrainement":"circuit",
            "exercices_populaires": "1 bascule sur une jambe ,2 sauts avec une corde à sauter, 3 squats et 4 pompes"
                    
          }
   chai
    .request(app)
   .post("/programmes_entrainements")
    .send(programme_entrainement)
   .end((err, res) => {
    
   expect(res).to.have.status(200);
   
    done();
   });
   });


});

describe("POST /programmes_entrainements", () => {
    it("it should give an error of validation of post a new programme_entrainement", done => {
        const programme_entrainement= {
           
            "type_entrainement":"cirrcuit",
            "exercices_populaires": ""
                    
          }
   chai
    .request(app)
   .post("/programmes_entrainements")
    .send(programme_entrainement)
   .end((err, res) => {
    
   expect(res).to.have.status(422);
   
    done();
   });
   });


});

describe("PUT /programmes_alimentaires/:id", () => {
    
    it("it should update a programme_alimentaire with the given id", done => {
        const programme_alimentaireID=1
        const programme_alimentaire={
            
            "type_régime": "hyperprotéine",
            "période": "15 jours",
            "menu1": "Petit_déjeuner: café, thé sans sucre, 1 yaourt au soja, 1/5 de baguette tradition,1 noix de beurre - Déjeuner: salade composée (huile dolive, huile de colza), 1 blanc de volaille grillé, haricots verts, 1 petit-suisse - Dîner: 1 dos de merlan, tomates, 1 portion de fromage de chèvre frais",
            "menu2": "Petit_déjeuner: café, thé non sucré, 1 fromage blanc au soja, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: 1 salade verte, 1 dos de cabillaud, 1 portion de quinoa, 1 petit-suisse - Dîner: 1 tranche de jambon, ratatouille, 1 Carré frais 0 %",
            "menu3": "Petit_déjeuner: café, thé non sucré, 1 fromage blanc, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: concombre, blanc de poulet, champignons, 1 yaourt - Dîner: 1 limande sole, lentilles, 1 yaourt nature",
            "menu4": "Petit_déjeuner:  thé ou café non sucré, 1 petit-suisse nature, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: radis, 1 noix de beurre, épinards, 1 yaourt au soja - Dîner: 1 steack de soja, 1 purée daubergines, 1 fromage blanc au soja"       
          }
   chai
    .request(app)
   .put("/programmes_alimentaires/"+programme_alimentaireID)
   .send({
            
    "type_régime": "hyperprotéine",
    "période": "1 mois",
    "menu1": "Petit_déjeuner: café, thé sans sucre, 1 yaourt au soja, 1/5 de baguette tradition,1 noix de beurre - Déjeuner: salade composée (huile dolive, huile de colza), 1 blanc de volaille grillé, haricots verts, 1 petit-suisse - Dîner: 1 dos de merlan, tomates, 1 portion de fromage de chèvre frais",
    "menu2": "Petit_déjeuner: café, thé non sucré, 1 fromage blanc au soja, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: 1 salade verte, 1 dos de cabillaud, 1 portion de quinoa, 1 petit-suisse - Dîner: 1 tranche de jambon, ratatouille, 1 Carré frais 0 %",
    "menu3": "Petit_déjeuner: café, thé non sucré, 1 fromage blanc, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: concombre, blanc de poulet, champignons, 1 yaourt - Dîner: 1 limande sole, lentilles, 1 yaourt nature",
    "menu4": "Petit_déjeuner:  thé ou café non sucré, 1 petit-suisse nature, 1/5 de baguette tradition, 1 noix de beurre - Déjeuner: radis, 1 noix de beurre, épinards, 1 yaourt au soja - Dîner: 1 steack de soja, 1 purée daubergines, 1 fromage blanc au soja"       
  })
   .end((err, res) => {
   expect(res).to.have.status(200);
   res.body.should.have.property('période').eql("1 mois");
    done();
   });
   });


});

describe("PUT /programmes_entrainements/:id", () => {
    
    it("it should update a programme_entrainement with the given id", done => {
        const programme_entrainementID=1
        const programme_entrainement= {
            
            "type_entrainement":"cardio",
            "exercices_populaires": "1 marcher et courir, 2 fentes, 3 sauter sur trampolineet 4 vélo et vélo d’appartement"
                      
          }
   chai
    .request(app)
   .put("/programmes_entrainements/"+programme_entrainementID)
   .send({
            
    "type_entrainement":"circuit",
    "exercices_populaires": "1 marcher et courir, 2 fentes, 3 sauter sur trampolineet 4 vélo et vélo d’appartement"
              
  })
   .end((err, res) => {
   expect(res).to.have.status(200);
   //res.body.should.have.property('type_entrainement').eql("crossfit");
 done();
   });
   });


});
describe("DELETE /programmes_alimentaires/:id", () => {
    it("it should delete a programme_alimentaire with the given id", done => {
        const programme_alimentaireID=1;
   chai
    .request(app)
   .delete("/programmes_alimentaires/"+programme_alimentaireID)
   .end((err, res) => {
   expect(res).to.have.status(200);
   //res.body.should.have.property('id').eql(1);
    done();
   });
   });


});
describe("DELETE /programmes_entrainements/:id", () => {
    it("it should delete a programme_entrainement with the given id", done => {
        const programme_entrainementID=1
   chai
    .request(app)
   .delete("/programmes_entrainements/"+programme_entrainementID)
   .end((err, res) => {
       
   expect(res).to.have.status(200);
  // res.body.should.have.property('id').eql(1);

   
    done();
   });
   });


});


