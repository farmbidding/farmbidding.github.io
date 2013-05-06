//alert('derp');
function refresh() {
    //$('#leaderboard').fadeOut('slow').load('http://theycallmecarl.com/nwd2/auction.php').fadeIn("slow");
    
    $.getJSON('http://theycallmecarl.com/nwd2/auction2.php',
        function(data) {
        
            var html =  data.html;
            
            var d = new Date();
            var h = d.getHours();
            var m = d.getMinutes();
            var s = d.getSeconds();
            var lud = h + ":" + m + ":" + s
            html = html + "<br/> Last Update " + lud;
            $("#leaderboard").fadeOut(300).html('').hide();
            $("#leaderboard").html(html).fadeIn(300);
    } );                
}

function refreshSH() {
    //'http://theycallmecarl.com/nwd2/shallowhill.php'
    $.getJSON('http://theycallmecarl.com/nwd2/shallowhill.php',
        function(data) {
        
            var html =  data.html;
            
            $("#shslots").fadeOut(300).html('').hide();
            $("#shslots").html(html).fadeIn(300);
        });
}

function refreshBoth() {
    refresh();
    refreshSH();
}

$(document).ready(
    function() {
        refresh();
        refreshSH();
        setInterval(refresh,30000);
        
        $('#refresh').click(refreshBoth);
        
        $('#nav a').click(function(e) {
              var url = $(this).attr("href");
         
              //This function would get content from the server and insert it into the id="content" element
              // $.getJSON("content.php", {contentid : url},function (data) {
              //       $("#content").html(data);
              // });
              
              var tgt = $("#content");
              if (tgt) {
                  tgt.fadeOut(300).load(url,
                    function() {
                        $(this).fadeIn(300);
                    }
                  );
                  
                  //This is where we update the address bar with the 'url' parameter
                  window.history.pushState('object', 'New Title', url);
             
                  //This stops the browser from actually following the link
                  e.preventDefault();
              
              }
         
            }
        );
    
});




