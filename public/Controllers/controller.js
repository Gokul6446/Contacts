var app=angular.module('Myapp',[]);
app.controller('AppCtrl',function($scope,$http)
{
console.log("Hello from Controller");
var refresh=function()
	{
	$http.get('/contactlist').success(function(response)
	{
	console.log("I got data which requested");
	$scope.contactlist=response;
	$scope.contact='';
});

};

refresh();
/*person1={
	name:'Gokul',
	email:'gokul446@gmail.com',
	number:'9976586446'
};
person2={
	name:'Sathish',
	email:'gokul446@gmail.com',
	number:'9865354886'
};
person3={
	name:'Ganesan',
	email:'gokul446@gmail.com',
	number:'944296527'
};

var contactlist=[person1,person2,person3];
$scope.Contactlist=contactlist;*/

$scope.addContact=function()
{
	console.log($scope.contact);
	$http.post('/contactlist',$scope.contact).success(function(response)
	{
		console.log(response);
		refresh();
	});

}

$scope.remove=function()
{
	console.log(id);
}
});