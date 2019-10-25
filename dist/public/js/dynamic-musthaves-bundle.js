const $campaign = $('#musthaves');

$(window).scroll(function () {
    if ($(window).width() > 767 && $campaign.length > 0){
        floatingIcons($(this).scrollTop());
    }
})

$campaign.find('.floating-icons > div').each(function(){
    $(this).click(function(){
        if (!$(this).hasClass("active")) {
            const $tmp = $(this).attr('class').replace('list-item ', '');
            const $top = $campaign.find('.experience-list-container.' + $tmp).position().top - 150;

            $('html, body').animate({
                scrollTop: $top
            }, 800);

            floatingIcons($(window).scrollTop());
        }
    })
})

$campaign.find('.btn-address > div').each(function(){
    $(this).click(function(){
        if (!$(this).hasClass("active")) {
            const $tmp = $(this).attr('class').replace('list-item ', '');
            const $top = $campaign.find('.experience-list-container.' + $tmp).position().top - 150;

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

    let $section1TitleTop = 0, $section2TitleTop = 0, $section3TitleTop = 0, $section4TitleTop = 0;
    let $section1Height = 0, $section2Height = 0, $section3Height = 0, $section4Height = 0;
    if ($campaign.find('.experience-title.section1').length) {
        $section1TitleTop     = $campaign.find('.experience-title.section1').position().top;
        $section1Height = $campaign.find('.experience-list-container.section1').height();
    }

    if ($campaign.find('.experience-title.section2').length) {
        $section2TitleTop = $campaign.find('.experience-title.section2').position().top;
        $section2Height = $campaign.find('.experience-list-container.section2').height();
    }

    if ($campaign.find('.experience-title.section3').length) {
        $section3TitleTop = $campaign.find('.experience-title.section3').position().top;
        $section3Height = $campaign.find('.experience-list-container.section3').height();
    }

    if ($campaign.find('.experience-title.section4').length) {
        $section4TitleTop = $campaign.find('.experience-title.section4').position().top;
        $section4Height = $campaign.find('.experience-list-container.section4').height();
    }

    $section2TitleTop    = $section2TitleTop - $section1Height / 2;
    $section3TitleTop    = $section3TitleTop - $section2Height / 2;
    $section4TitleTop    = $section4TitleTop - $section3Height / 2;

    const $section1Bottom     = $section1TitleTop + $section1Height / 2;
    const $section2Bottom    = $section2TitleTop + $section2Height / 2;
    const $section3Bottom   = $section3TitleTop + $section3Height / 3;
    const $section4Bottom = $section4TitleTop + $section4Height / 2;

    if ((scrollHeight - scrollPosition) / scrollHeight === 0){

        $campaign.find('.floating-icons > div').removeClass("active");
        $campaign.find('.floating-icons .section4').addClass("active");

    }else{

        if (scrollTop > $section1TitleTop && scrollTop < $section1Bottom) {
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.btn-address > div').removeClass("active");
            $campaign.find('.btn-address .section1').addClass("active");
            $campaign.find('.floating-icons .section1').addClass("active");
        }else if (scrollTop > $section2TitleTop && scrollTop < $section2Bottom) {
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.btn-address > div').removeClass("active");
            $campaign.find('.btn-address .section2').addClass("active");
            $campaign.find('.floating-icons .section2').addClass("active");
        }else if (scrollTop > $section3TitleTop && scrollTop < $section3Bottom) {
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.btn-address > div').removeClass("active");
            $campaign.find('.btn-address .section3').addClass("active");
            $campaign.find('.floating-icons .section3').addClass("active");
        }else if ((scrollHeight - scrollPosition) / scrollHeight === 0){
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.btn-address > div').removeClass("active");
            $campaign.find('.btn-address .section4').addClass("active");
            $campaign.find('.floating-icons .section4').addClass("active");
        }
    }
}

$campaign.find('.copy-btn').click(function () {
    const textArea = document.createElement('textArea');

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = '200px';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';

    textArea.value = '';
    document.body.appendChild(textArea);

    let range,
        selection;

    if (navigator.userAgent.match(/ipad|iphone/i)) {
        range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
    } else {
        textArea.select();
    }

    document.execCommand('copy');
    document.body.removeChild(textArea);

    $('.copied-btn').addClass('show');
    $(this).removeClass('show');

});
