

function getTime() {
    var d = new Date();
    var h = d.getHours();
    var ampm = (h > 11) ? "PM" : "AM";
    h = ((h - 1) % 12) + 1;
    h = ('0' + h).slice(-2);
    var m = ('0' + d.getMinutes()).slice(-2);
    var s = ('0' + d.getSeconds()).slice(-2);
    var lud = h + ":" + m + ":" + s + " " + ampm;
    return lud;
}

function refresh() {
    if ( Browser.Version() > 900) {
        $.getJSON('http://media.teamnowhammies.com/auction2.php',
            function(data) {
            
                var html =  data.html;
                
                html = html + "<br/>Updated " + getTime();
                $("#leaderboard").html(html);	
        } );
    } else {
        var abc = $.ajax({
            type: "GET",
            url: "http://media.teamnowhammies.com/auction3.php?callback=?",
            dataType: "jsonp",
            jsonp: false,
            cache: false
        });
        
        var error = false;
    
        abc.error(function (data, xhr, dat1) {
            error = true;
        });
    
        abc.complete(function (xhr, status) {
            if (!error){
                var data = xhr.responseText;
                var html =  data.html;
                
                html = html + "<br/>Updated " + getTime();
                $("#leaderboard").html(html);    
            }
            
        });
    
        abc.done(function(data){
           //alert(data.people[0].nameFirst); ?????  
           //alert("done");
        });     
    }
}

function refreshSH() {
    //'http://theycallmecarl.com/nwd2/shallowhill.php'
    $.getJSON('http://theycallmecarl.com/nwd2/shallowhill.php',
        function(data) {
        
            var html =  data.html;
            
            $("#shslots").html(html);	
        });
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
                  if (Browser.Version() > 900) {
                    window.history.pushState('object', 'New Title', url);
                  }
                 
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




