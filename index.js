var express = require("express");
var app 	= express();
var router 	= express.Router();
var server  = require('http').createServer(app);
var port    = process.env.PORT || 304;

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/node_modules'));
/*set Template Egine */
app.set('view engine', 'ejs');


var mahasiswaRouter = require('./controllers/mahasiswa');
app.use('/mahasiswa',mahasiswaRouter);
app.get('/', (req, res)=> {
	
    
    res.render('page/beranda');
});
app.use('*',(req,res)=>{
	res.render('page/note_found');
});
server.listen(port,  ()=> {
  console.log('Server listening at port %d', port);
});
