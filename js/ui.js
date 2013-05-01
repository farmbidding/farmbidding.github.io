if (typeof jQuery == 'undefined') {
    document.write(unescape("%3Cscript src='script/jquery-1.9.1.min.js' type='text/javascript'%3E%3C/script%3E"));
/*    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);    */        
}


String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}


$(document).ready(function() {
    
    /*
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();
    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);

    $('.play').click(function() {
    audioElement.trigger('play');
    });
    
    
    $('.pause').click(function() {
    audioElement.pause();
    });


    */
    
    var audioElement;       // = $('#hotpockets');
    var loaded = false;
    var n = 0;
    
    function ellipses(tgt) {
        if (loaded) return;
        
        tgt.html("Buffering" + ".".repeat(n++));
        if (n > 3) n = 0;
        window.setTimeout(ellipses, 500,tgt);
        
    }
    
    function attachAudio(){
        var msg = $("#shutup");
        
        if (audioElement) {
            msg.html("stop")
            audioElement.trigger('play');
        } else {
            ellipses(msg);
            
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'media/Wewillhotpockets.mp3');
            audioElement.setAttribute('loop', 'loop');
            audioElement.setAttribute('autoplay', 'autoplay');
            document.appendChild(audioElement);
            
            //audioElement.load()
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        
            $('.play').click(function() {
            audioElement.trigger('play');
            });
            
            
            $('.pause').click(function() {
            audioElement.pause();
            });  
        }
    }
    
    //audioElement.trigger('play');
    
    $('#shutup').click(function() {
        audioElement.trigger('pause');
        $("#shutup").html('');
    });
    
    $('#start').click(function() {
        //audioElement.trigger('play');
        attachAudio()
    });    
   


});