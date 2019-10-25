const $campaign = $('#musthaves');

$(window).scroll(function () {
    if ($(window).width() > 767 && $campaign.length > 0){
        floatingIcons($(this).scrollTop());
    }
})

$campaign.find('.floating-icons > div').each(function(){
    $(this).click(function(){

        const $tmp = $(this).attr('class');
        const $top = $campaign.find('.experience-title.' + $tmp).position().top - 150;

        $('html, body').animate({
            scrollTop: $top
        }, 800);

        floatingIcons($(window).scrollTop());
    })
})

$campaign.find('.btn-address > div').each(function(){
    $(this).click(function(){

        const $tmp = $(this).attr('class');
        const $top = $campaign.find('.experience-title.' + $tmp).position().top - 150;

        $('html, body').animate({
            scrollTop: $top
        }, 800);

        floatingIcons($(window).scrollTop());
    })
})

function floatingIcons(scrollTop){

    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();

    const $hcmcTitleTop     = $campaign.find('.experience-title.hcmc').position().top;
    const $hanoiTitleTop    = $campaign.find('.experience-title.hanoi').position().top - $campaign.find('.experience-list.hcmc').height() / 2;
    const $daNangTitleTop   = $campaign.find('.experience-title.daNang').position().top - $campaign.find('.experience-list.hanoi').height() / 2;
    const $nhaTrangTitleTop = $campaign.find('.experience-title.nhaTrang').position().top - $campaign.find('.experience-list.daNang').height() / 2;;

    const $hcmcBottom     = $hcmcTitleTop + $campaign.find('.experience-list.hcmc').height() / 2;
    const $hanoiBottom    = $hanoiTitleTop + $campaign.find('.experience-list.hanoi').height() / 2;
    const $daNangBottom   = $daNangTitleTop + $campaign.find('.experience-list.daNang').height() / 3;
    const $nhaTrangBottom = $nhaTrangTitleTop + $campaign.find('.experience-list.nhaTrang').height() / 2;

    if ((scrollHeight - scrollPosition) / scrollHeight === 0){

        $campaign.find('.floating-icons > div').removeClass("active");
        $campaign.find('.floating-icons .nhaTrang').addClass("active");

    }else{

        if (scrollTop > $hcmcTitleTop && scrollTop < $hcmcBottom) {
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.floating-icons .hcmc').addClass("active");
        }else if (scrollTop > $hanoiTitleTop && scrollTop < $hanoiBottom) {
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.floating-icons .hanoi').addClass("active");
        }else if (scrollTop > $daNangTitleTop && scrollTop < $daNangBottom) {
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.floating-icons .daNang').addClass("active");
        }else if ((scrollHeight - scrollPosition) / scrollHeight === 0){
            $campaign.find('.floating-icons > div').removeClass("active");
            $campaign.find('.floating-icons .nhaTrang').addClass("active");
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

    textArea.value = 'VNSHOW18';
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
