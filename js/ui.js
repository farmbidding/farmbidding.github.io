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
    
    var audioElement = $('#hotpockets')
    audioElement.trigger('play');
    
    $('#shutup').click(function() {
        audioElement.trigger('pause');
    });
   


});