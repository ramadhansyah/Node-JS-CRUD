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
	var data = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    console.log(data);
    res.render('page/beranda',{data:data});
});
app.use('*',(req,res)=>{
	res.render('page/note_found');
});
server.listen(port,  ()=> {
  console.log('Server listening at port %d', port);
});