
    $(window).scroll(function () {
        if ($(window).width() > 767 && $('#double11').length > 0){
            floatingIconsDouble11($(this).scrollTop());
        }
    })

    $('#double11 .floating-icons > div').each(function(){
        $(this).click(function(){

            const $tmp = $(this).attr('class');
            const $top = $('.experience-title.' + $tmp).position().top;

            $('html, body').animate({
                scrollTop: $top
            }, 800);

            floatingIconsDouble11($(window).scrollTop());
        })
    })

    $('#double11 .btn-address > div').each(function(){
        $(this).click(function(){

            const $tmp = $(this).attr('class');
            const $top = $('#double11 .experience-title.' + $tmp).position().top;

            $('html, body').animate({
                scrollTop: $top
            }, 800);

            floatingIconsDouble11($(window).scrollTop());
        })
    })

    function floatingIconsDouble11(scrollTop){

        const scrollHeight = $(document).height();
        const scrollPosition = $(window).height() + $(window).scrollTop();

        const $hcmcTitleTop     = $('#double11 .experience-title.hcmc').position().top;
        const $hanoiTitleTop    = $('#double11 .experience-title.hanoi').position().top - $('#double11 .experience-list.hcmc').height() / 2;
        const $daNangTitleTop   = $('#double11 .experience-title.daNang').position().top - $('#double11 .experience-list.hanoi').height() / 2;
        const $nhaTrangTitleTop = $('#double11 .experience-title.nhaTrang').position().top;

        const $hcmcBottom     = $hcmcTitleTop + $('#double11 .experience-list.hcmc').height() / 2;
        const $hanoiBottom    = $hanoiTitleTop + $('#double11 .experience-list.hanoi').height() / 2;
        const $daNangBottom   = $daNangTitleTop + $('#double11 .experience-list.daNang').height() / 3;
        const $nhaTrangBottom = $nhaTrangTitleTop + $('#double11 .experience-list.nhaTrang').height() / 2;

        if ((scrollHeight - scrollPosition) / scrollHeight === 0){

            $('#double11 .floating-icons > div').removeClass("active");
            $('#double11 .floating-icons .nhaTrang').addClass("active");

        }else{

            if (scrollTop > $hcmcTitleTop && scrollTop < $hcmcBottom) {
                $('#double11 .floating-icons > div').removeClass("active");
                $('#double11 .floating-icons .hcmc').addClass("active");
            }else if (scrollTop > $hanoiTitleTop && scrollTop < $hanoiBottom) {
                $('#double11 .floating-icons > div').removeClass("active");
                $('#double11 .floating-icons .hanoi').addClass("active");
            }else if (scrollTop > $daNangTitleTop && scrollTop < $daNangBottom) {
                $('#double11 .floating-icons > div').removeClass("active");
                $('#double11 .floating-icons .daNang').addClass("active");
            }else if ((scrollHeight - scrollPosition) / scrollHeight === 0){
                $('#double11 .floating-icons > div').removeClass("active");
                $('#double11 .floating-icons .nhaTrang').addClass("active");
            }
        }
    }

    $('#double11 .copy-btn').click(function () {
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

        textArea.value = '11NOVIET';
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
