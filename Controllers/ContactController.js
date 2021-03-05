// definition fonction ajouter contact 
//export pour que je peux travailler avec la fonction en dehors de controller*
const ContactModel = require('../Models/Contact');
exports.ajoutercontact = (req, res)=>{

    const contactObj={
       nom:req.body.nom,
       numero:req.body.numero
     }
     const contact=new ContactModel(contactObj);
     // insert data in database  : .save
     contact.save((error,createdcontact) => {
                     if(error){
                       return res.status(400).json({error});
                     }
                     else{
                       res.status(200).json({createdcontact});
                     }              
     })
   }
   
exports.midifiercontact = (req,res)=>{
    const param=req.params.id;
    const modifiedObj={
      nom:req.body.nom,
      numero:req.body.numero,
    }
    ContactModel.findByIdAndUpdate(param,modifiedObj).exec((error,modifiedcontact)=>{
      if(error){
        return res.status(400).json({error});
      }
      else{
        res.status(200).json({"message":"succes"});
      }        
    })
  }
  exports.supprimercontact = (req, res)=>{
    const param = req.params.id;
    ContactModel.findByIdAndDelete(param).exec((error,deletecontact) => {
      if(error){
        return res.status(400).json({error});
      }
      else{
        res.status(200).json({"message" : "Contact supprimé avec succé"});
      }              
    }) 
  }
  exports.listercontact =  (req, res) => {

    ContactModel.find({}).exec((error,affichercontact) => {
      if(error){
        return res.status(400).json({error});
      }
      else{
        res.status(200).json({affichercontact});
      }      
    })
  }