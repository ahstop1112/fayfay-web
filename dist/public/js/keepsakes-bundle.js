$(window).load(function () {
    if ($(window).width() > 767 && $('#keepsakes').length > 0){
        floatingIconsKeepSakes($(this).scrollTop());
    }
})

$(window).scroll(function () {
    if ($(window).width() > 767 && $('#keepsakes').length > 0){
        floatingIconsKeepSakes($(this).scrollTop());
    }
})

$('#keepsakes .floating-icons > div').each(function(){
    $(this).click(function(){

        if (!$(this).hasClass("active")){
            const $tmp = $(this).attr('class');
            const $top = $('.experience-title.' + $tmp).position().top - 150;


            $('html, body').animate({
                scrollTop: $top
            }, 800);

            floatingIconsKeepSakes($(window).scrollTop());
        }
    })
})

$('#keepsakes .btn-address > div').each(function(){
    $(this).click(function(){

        if (!$(this).hasClass("active")){

            const $tmp = $(this).attr('class');
            const $top = $('#keepsakes .experience-title.' + $tmp).position().top - 150;

            $('html, body').animate({
                scrollTop: $top
            }, 800);

            floatingIconsKeepSakes($(window).scrollTop());
        }
    })
})

function floatingIconsKeepSakes(scrollTop){

    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();

    const $bestTitleTop     = $('#keepsakes .experience-title.best').position().top;
    const $workshopTitleTop    = $('#keepsakes .experience-title.workshop').position().top - $('#keepsakes .experience-list.best').height() / 2;
    const $photographyTitleTop = $('#keepsakes .experience-title.photography').position().top - $('#keepsakes .experience-list.workshop').height() / 2;;

    const $bestBottom           = $bestTitleTop + $('#keepsakes .experience-list.best').height() / 2;
    const $workshopBottom       = $workshopTitleTop + $('#keepsakes .experience-list.workshop').height() / 2;
    const $photographyBottom    = $photographyTitleTop + $('#keepsakes .experience-list.photography').height() / 2;

    if ((scrollHeight - scrollPosition) / scrollHeight === 0){

        $('#keepsakes .floating-icons > div').removeClass("active");
        $('#keepsakes .floating-icons .photography').addClass("active");

    }else{

        if (scrollTop > $bestTitleTop && scrollTop < $bestBottom) {
            $('#keepsakes .floating-icons > div').removeClass("active");
            $('#keepsakes .floating-icons .best').addClass("active");
        }else if (scrollTop > $workshopTitleTop && scrollTop < $workshopBottom) {
            $('#keepsakes .floating-icons > div').removeClass("active");
            $('#keepsakes .floating-icons .workshop').addClass("active");
        }else if ((scrollTop > $photographyTitleTop && scrollTop < $photographyBottom) || (scrollHeight - scrollPosition) / scrollHeight === 0){
            $('#keepsakes .floating-icons > div').removeClass("active");
            $('#keepsakes .floating-icons .photography').addClass("active");
        }
    }
}
