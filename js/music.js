$(document).ready(function(){
    $('.open').on('click', function(e){
        e.preventDefault();

        var i = $(this).parent('li').index();

        $('li').addClass('off');
        $('li').eq(i).removeClass('off').addClass('on');

        $('.content>.inner').empty();

        //call data
        $.ajax({
            url : 'data.json',
            dataType : 'json',
        })
        .success(function(data){
            var arr = data.data;

            console.log(data);
            console.log(data.data);
            console.log(arr[i]);

            $('.content .inner')
                .append(
                    $('<h2>').text(arr[i].title),
                    $('<div class="pic">').css({backgroundImage : 'url(img/'+arr[i].img+')'}),
                    $('<span>').text(arr[i].date)
                )
        })
        .error(function(){
            alert("Fail to load data :'(")
        })

        //content.on
        setTimeout(function(){
            $('.content').addClass('on')
        }, 500);

        $('.close').on('click', function(e){
            e.preventDefault();

            $('.content').removeClass('on');
            $('li').removeClass('on');

            setTimeout(function(){
                $('li').removeClass('off');
            }, 500);
        })

    });
});