//TODO: Divider config loader to global

var request = new XMLHttpRequest();
request.open('GET', 'config/config.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var config = JSON.parse(request.responseText);
    var googleAnalytics = config[0]['googleAnalytics'];
    
    if(typeof googleAnalytics != 'undefined' || googleAnalytics != 'XX-XXXXXXXX-X') {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', googleAnalytics, 'auto');
		ga('send', 'pageview');	
	}


  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
