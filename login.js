function loginvm()
{
	var login=this;
	this.username=ko.obbservable();
	this.password=ko.observable();
	this.message=ko.observable();
	
	this.canlogin=ko.computed(function()
	{
		return !isEmpty(this.username()) && !isEmpty(this.password());
	});
	
	this.login=function()
	{
		/*$.post("http://transport-pcmagas.rhcloud.com/index.php/user/login",{username:login.username(),password:login.password()})
		.done(function(data)
		{
			preprocess(data,function(the_data)
			{
				console.log("ok");
			},
			function(err)
			{
				console.log('err');
			});
		})
		.always(function(data)
		{
			
		});*/
	};
};

$(document).ready(function()
{
	var vm=new loginvm();
});
