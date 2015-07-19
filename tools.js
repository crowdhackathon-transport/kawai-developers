var preprocess=function(data,ok,err)
{
	var the_data=data.data;
	var err=data.message;
	if(data.status=="ok")
	{
		if(typeof ok == 'function') ok(the_data);
	}
	else
	{
		if(typeof err == 'function') ok(err);		
	}
};

var isEmpty=function(obj) 
{

	if (typeof obj == 'undefined' || obj === null || obj === '') return true;
	if (typeof obj == 'number' && isNaN(obj)) return true;
	if (obj instanceof Date && isNaN(Number(obj))) return true;
	return false;
};