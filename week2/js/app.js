function hello() {
	alert("HAHAHAHHA! I got it!!!");
}


function browser() {
	txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
	txt+= "<p>Browser Name: " + navigator.appName + "</p>";
	txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";
	txt+= "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
	txt+= "<p>Platform: " + navigator.platform + "</p>";
	txt+= "<p>User-agent header: " + navigator.userAgent + "</p>";
	
	alert(txt);
}
