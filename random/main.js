$(document).ready(function(){
    $('#start').click(random);

    function random(){
        var min = $('#min').val();
        var max = $('#max').val();
        var notuse = $('#textarea').val().split('\n');
        var num = max - min + 1;
        $('#start').css({'color':'blue','border-color':'blue','box-shadow':'0px 0px 5px 10px blue'});
        music();
        for (var i = 0; i<100 ; i++) {
            setTimeout(math, i*50, num, notuse);
        }
        setTimeout(function(){
            $('#start').css({'color':'white','border-color':'white','box-shadow':'0px 0px 5px 10px white'});
        }, 5000);
    }

    function math(num, notuse){
        var random = generateRandom(num, notuse);
        $('#start').text(random);
    }

    function generateRandom(num, notuse) {
        var random = Math.floor(Math.random()*num)+1;
        for (var j = 0; j<notuse.length; j++) {
            while (random == parseInt(notuse[j])) {
                random = Math.floor(Math.random()*num)+1;
            }
        }
        return random;
    }

    function music() {
        const audio = document.createElement("audio")
        audio.src = "music.mp3";
        audio.play();
    }
});
