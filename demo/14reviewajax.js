function ajax(url,type,param,dataType,callback){
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	if(type == 'get'){
		url +='?'+param;
	}
	xhr.open(type,url,true);
	var dat = null;
	if(type == 'post'){
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		dat = param;
	}
	xhr.send(dat);
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status==200) {
			var data = xhr.responseText;
			if(dataType=='json'){
				data = JSON.parse(data);
			}
			callback(data);
		};
	}
}