var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gene');

var daSchema = mongoose.Schema({
  name: {type:String}, 
  salary:{type:Number},
  phno:{type:Number},
  mail: {type:String}
});


var l= mongoose.model('l', daSchema,'details');

module.exports=l;

