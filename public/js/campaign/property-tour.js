$(document).ready(function () {

    AOS.init();

    const $campaign = $('#property-tour');
    const $sections = document.querySelectorAll(".section-experience");
    const $sectionsTitleTop = [];
    const $sectionsHeight = [];
    const $sectionsBottom = [];

    $(window).scroll(function () {
        if ($(window).width() > 767 && $campaign.length > 0) {
            floatingIcons($(this).scrollTop());
        }
    })

    $campaign.find('.btn-address > .list-item').each(function () {
        $(this).click(function () {

            if (!$(this).hasClass("active")) {

                const $tmp = $(this).attr('class').replace('list-item ', '');
                let $top = $campaign.find('.section-experience-city.' + $tmp).position().top;


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

            $sectionsHeight[index] = $('.section-experience-city.section' + index).height();

            if (index === 0) {
                $sectionsTitleTop[0] = $('.section-experience-city.section' + index).position().top + 30;
                $sectionsBottom[0] = $sectionsTitleTop[0] + $sectionsHeight[0] / 2;
            } else {
                $sectionsTitleTop[index] = $('.section-experience-city.section' + index).position().top + 30;
                $sectionsTitleTop[index] -= $sectionsHeight[index - 1] / 2;
                $sectionsBottom[index] = $sectionsTitleTop[index] + $sectionsHeight[index - 1] / 2;
            }
        }
    }
});
