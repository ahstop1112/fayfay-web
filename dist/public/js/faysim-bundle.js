const $faysim = $('#faysim');
const $sections = document.querySelectorAll(".faysim-section");
const $sectionsTitleTop = [];
const $sectionsHeight = [];
const $sectionsBottom = [];

$(window).scroll(function () {
    if ($(window).width() > 767 && $faysim.length > 0) {
        floatingIcons($(this).scrollTop());
    }
})

$faysim.find('.floating-icons > div').each(function () {
    $(this).click(function () {

        if (!$(this).hasClass("active")) {

            const $tmp = $(this).attr('class');
            const $top = $faysim.find('.faysim-section.' + $tmp).position().top - $('.header-top-area').height() - 40;

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

        $sectionsHeight[index] = $('.faysim-section.section' + index).height();


        if (index === 0){
            $sectionsTitleTop[0] = $('section.section0').position().top;
            $sectionsBottom[0]  = $sectionsTitleTop[0] + $sectionsHeight[0] / 2;

        }else{
            $sectionsTitleTop[index] = $('.faysim-section.section' + index).position().top;
            $sectionsTitleTop[index] -= $sectionsHeight[index-1] / 2;
            $sectionsBottom[index] = $sectionsTitleTop[index] + $sectionsHeight[index-1] / 2;
        }

        if ((scrollHeight - scrollPosition) / scrollHeight === 0){
            $faysim.find('.floating-icons > div').removeClass("active");
            $faysim.find('.floating-icons .section' + lastIndex).addClass("active");
        }else{

            if (scrollTop > $sectionsTitleTop[index] && scrollTop < $sectionsBottom[index]) {
                $faysim.find('.floating-icons > div').removeClass("active");
                $faysim.find('.floating-icons .section'+index).addClass("active");
            }
        }

    }
}
