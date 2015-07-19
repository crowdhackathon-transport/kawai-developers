function loginvm()
{
	var login=this;
	login.username=ko.observable();
	login.password=ko.observable();
	login.message=ko.observable();
	
	login.canlogin=ko.computed(function()
	{
		return !isEmpty(login.username()) && !isEmpty(login.password());
	});
	
	login.login_=function()
	{
		$.post("http://transport-pcmagas.rhcloud.com/index.php/user/login",{username:login.username(),password:login.password()})
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
			
		});
	};
};

$(document).ready(function()
{
	var vm=new loginvm();
	ko.applyBindings(vm);
});
