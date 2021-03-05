const mongoose=require('mongoose');
const ContactSchema= new mongoose .Schema({

    nom:{
        type:String,
        required:true
    },
    numero:{
        type:Number,
        required:true

    },

},{timestamps:true}) // timestamp:true send in the collection created at and updates at 
//exporter le scheama ( contact ) la definition de contact est pris de schema contactschema  
module.exports = mongoose.model('contacts',ContactSchema);