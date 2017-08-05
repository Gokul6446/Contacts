//Most Basic Dependencies
var express= require('express');

//create the app
var app = express();

var mongojs=require('mongojs');

// mongojs(connectionstring,[collection])
var db=mongojs('contactlist',['contactlist']); 

var bodyParser=require('body-parser');

/*app.get('/',function(req,res)
{
	res.send("Hello World from Server.js")
});*/

app.use(express.static(__dirname +"/public"));
app.use(bodyParser.json());
app.get('/contactlist',function(req,res)
{
	console.log("I receives a GET request")

/*person1={
	name:'Gokul',
	email:'gokul446@gmail.com',
	number:'9976586446'
};

person2={
	name:'Sathish',
	email:'sathishgan@gmail.com',
	number:'9865354886'
};

person3={
	name:'Ganesan',
	email:'gokul446@gmail.com',
	number:'9442965227'
};
var contactlist=[person1,person2,person3];
res.json(contactlist);*/

db.contactlist.find(function(err,docs)
{
console.log(docs);

res.json(docs);
});
});

app.post('/contactlist',function(req,res)
{
	console.log(req.body);
	db.contactlist.insert(req.body,function(err,doc)
	{
		res.json(doc);
	});
});
app.listen(3003);
console.log("server running at port ");
