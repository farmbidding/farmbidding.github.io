
function refresh() {
    
    $.getJSON('http://theycallmecarl.com/nwd2/auction2.php&callback=?',
        function(data) {
        
            var html =  data.html;
            
            var d = new Date();
            var h = d.getHours();
            var ampm = (h > 11) ? "PM" : "AM";
            h = ((h - 1) % 12) + 1;
            h = ('0' + h).slice(-2);
            var m = ('0' + d.getMinutes()).slice(-2);
            var s = ('0' + d.getSeconds()).slice(-2);
            var lud = h + ":" + m + ":" + s + " " + ampm;
            html = html + "<br/>Updated " + lud;
            $("#leaderboard").html(html);	
    } );                
}

function refreshSH() {
    //'http://theycallmecarl.com/nwd2/shallowhill.php'
    $.getJSON('http://theycallmecarl.com/nwd2/shallowhill.php',
        function(data) {
        
            var html =  data.html;
            
            $("#shslots").html(html);	
        });
}

function refreshBoth() {
    refresh();
    refreshSH();
}

function LoadContent(url) {
    var tgt = $("#content");
    if (tgt) {

      tgt.load(url);

      return true;
    }
    
    return false;

}

function getURLParameter(name,str) {
	//console.log(location.search);
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(str)||[,null])[1]
    );
}

function nav(url) {
              
    var param = getURLParameter("id",url);
           
    var tgt = "main.html";
    //console.log(param);
    switch (param) {
        case "horses":
          tgt = "horses.html";
          break;
        case "verb":
          tgt = "verbance.html";
          break;
        case "paint":
          tgt = "paintball.html";
          break;
        default:
          tgt = "main.html";
          break;
    }
              
    //console.log(url);
    var out = $("#content");
    if (out) {
      out.load(tgt);
      
    }
    
    loaded = true;

}

var loaded = false;

var Browser = {
  Version: function() {
    var version = 999; // we assume a sane browser
    if (navigator.appVersion.indexOf("MSIE") != -1)
      // bah, IE again, lets downgrade version number
      version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    return version;
  }
}

$(document).ready(
    function() {        
        $('#refresh').click(refreshBoth);
        
        //nav( $(this).attr("href") );
        var currUrl = $(this).attr("href");
        if (currUrl == null) {
        	currUrl = location.search;
        }
        if (!loaded) nav(currUrl);
        
        $('#nav a').click(function(e) {
        	
        	var url = $(this).attr("href");
        	//console.log($(this).attr("href"));
            nav(url);
                  //This is where we update the address bar with the 'url' parameter
                  //if (!$.browser.msie) {
                  //  window.history.pushState('object', 'New Title', url);
                  //}
                    alert(Browser.Version());
                  //This stops the browser from actually following the link
                  e.preventDefault();
              
              }
              
         
            
        );
        
        window.onpopstate = function(event) {
            var currUrl = $(this).attr("href");
            if (currUrl === null) {
            	currUrl = location.search;
            }
            console.log(currUrl);
            nav(currUrl);
        }
    

});




