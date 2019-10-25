const $campaign = $('#easter');
let $sections = document.querySelectorAll(".section-experience");
let $sectionsTitleTop = [];
let $sectionsHeight = [];
let $sectionsBottom = [];

$(window).scroll(function () {
    if ($(window).width() > 767 && $campaign.length > 0) {
        floatingIcons($(this).scrollTop());
    }
})

$campaign.find('.floating-icons > div').each(function () {
    $(this).click(function () {

        if (!$(this).hasClass("active")) {

            const $tmp = $(this).attr('class').replace('list-item ', '');
            let $top = $campaign.find('.section-experience.' + $tmp).position().top - $('.header-top-area').height() - 40;

            $('html, body').animate({
                scrollTop: $top
            }, 800);

            floatingIcons($(window).scrollTop());
        }
    })
})

$campaign.find('.btn-address > .list-item').each(function () {
    $(this).click(function () {

        if (!$(this).hasClass("active")) {

            const $tmp = $(this).attr('class').replace('list-item ', '');
            let $top = $campaign.find('.section-experience.' + $tmp).position().top - $('.header-top-area').height() - 40;

            $('html, body').animate({
                scrollTop: $top
            }, 800);

            floatingIcons($(window).scrollTop());
        }
    })
})

function floatingIcons(scrollTop) {

    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    const lastIndex = $sections.length - 1;


    for (let index = 0; index < $sections.length; index++) {

        $sectionsHeight[index] = $('.section-experience.section' + index).height();

        if (index === 0){
            $sectionsTitleTop[0] = $('.experience-title.section' + index).position().top;
            $sectionsBottom[0]  = $sectionsTitleTop[0] + $sectionsHeight[0] / 2;

        }else{

            $sectionsTitleTop[index] = $('.experience-title.section' + index).position().top;
            $sectionsTitleTop[index] -= $sectionsHeight[index-1] / 2;
            $sectionsBottom[index] = $sectionsTitleTop[index] + $sectionsHeight[index-1] / 2;
        }

        if ((scrollHeight - scrollPosition) / scrollHeight === 0){
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.floating-icons .section' + lastIndex).addClass("active");
        }else{

            if (scrollTop > $sectionsTitleTop[index] && scrollTop < $sectionsBottom[index]) {
                $campaign.find('.floating-icons > div').removeClass("active");
                $campaign.find('.btn-address > div').removeClass("active");
                $campaign.find('.btn-address .section'+index).addClass("active");
                $campaign.find('.floating-icons .section'+index).addClass("active");
            }
        }

    }
}
