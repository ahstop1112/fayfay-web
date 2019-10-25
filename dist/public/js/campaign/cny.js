const $campaign = $('#cny');

$(window).scroll(function () {
    if ($(window).width() > 767 && $campaign.length > 0){
        floatingIcons($(this).scrollTop());
    }
})

$('.gotoTop').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 800);
})

$campaign.find('.floating-icons > div').each(function(){
    $(this).click(function(){

        const $tmp = $(this).attr('class');
        const $top = $campaign.find('.section-experience.' + $tmp).position().top - 150;

        $('html, body').animate({
            scrollTop: $top
        }, 800);

        floatingIcons($(window).scrollTop());
    })
})

$campaign.find('.btn-address > .list-item').each(function () {
    $(this).click(function () {

        if (!$(this).hasClass("active")) {

            const $tmp = $(this).attr('class').replace('list-item ', '');
            var $top = $campaign.find('.section-experience.' + $tmp).position().top;

            if ($(window).width() > 767) {
                $top = $top - 250;
                console.log($top);
            } else {
                $top = $top - 150;
            }

            $('html, body').animate({
                scrollTop: $top
            }, 800);

            floatingIcons($(window).scrollTop());
        }
    })
})

function floatingIcons(scrollTop){

    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();

    const $sectionOneTop        = $campaign.find('.section-experience.section1').position().top;
    const $sectionTwoTop        = $campaign.find('.section-experience.section2').position().top - $campaign.find('.section-experience.section1').height() / 2;
    const $sectionThreeTop      = $campaign.find('.section-experience.section3').position().top - $campaign.find('.section-experience.section2').height() / 2;
    const $sectionFourTop       = $campaign.find('.section-experience.section4').position().top - $campaign.find('.section-experience.section3').height() / 2;

    const $sectionOneBottom     = $sectionOneTop + $campaign.find('.section-experience.section1').height() / 2;
    const $sectionTwoBottom     = $sectionTwoTop + $campaign.find('.section-experience.section2').height() / 2;
    const $sectionThreeBottom   = $sectionThreeTop + $campaign.find('.section-experience.section3').height() / 2;
    const $sectionFourBottom    = $sectionFourTop + $campaign.find('.section-experience.section4').height() / 2;

    if ((scrollHeight - scrollPosition) / scrollHeight === 0){

        $campaign.find('.floating-icons > div').removeClass("active");
        $campaign.find('.floating-icons .section4').addClass("active");

    }else{

        if (scrollTop > $sectionOneTop && scrollTop < $sectionOneBottom) {
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.floating-icons .section1').addClass("active");
        }else if (scrollTop > $sectionTwoTop && scrollTop < $sectionTwoBottom) {
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.floating-icons .section2').addClass("active");
        }else if (scrollTop > $sectionThreeTop && scrollTop < $sectionThreeBottom) {
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.floating-icons .section3').addClass("active");
        }else if ((scrollTop > $sectionFourTop && scrollTop < $sectionFourBottom) || (scrollHeight - scrollPosition) / scrollHeight === 0){
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.floating-icons .section4').addClass("active");
        }
    }
}
