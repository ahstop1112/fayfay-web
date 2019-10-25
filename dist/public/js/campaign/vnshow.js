
    $(window).scroll(function () {
        if ($(window).width() > 767 && $('#vnshow').length > 0){
            floatingIconsVnshow($(this).scrollTop());
        }
    })

    $('#vnshow .floating-icons > div').each(function(){
        $(this).click(function(){

            const $tmp = $(this).attr('class');
            const $top = $('#vnshow .experience-title.' + $tmp).position().top - 150;

            $('html, body').animate({
                scrollTop: $top
            }, 800);

            floatingIconsVnshow($(window).scrollTop());
        })
    })

    $('#vnshow .btn-address > div').each(function(){
        $(this).click(function(){

            const $tmp = $(this).attr('class');
            const $top = $('#vnshow .experience-title.' + $tmp).position().top - 150;

            $('html, body').animate({
                scrollTop: $top
            }, 800);

            floatingIconsVnshow($(window).scrollTop());
        })
    })

    function floatingIconsVnshow(scrollTop){

        const scrollHeight = $(document).height();
        const scrollPosition = $(window).height() + $(window).scrollTop();

        const $hcmcTitleTop     = $('#vnshow .experience-title.hcmc').position().top;
        const $hanoiTitleTop    = $('#vnshow .experience-title.hanoi').position().top - $('#vnshow .experience-list.hcmc').height() / 2;
        const $daNangTitleTop   = $('#vnshow .experience-title.daNang').position().top - $('#vnshow .experience-list.hanoi').height() / 2;
        const $nhaTrangTitleTop = $('#vnshow .experience-title.nhaTrang').position().top - $('#vnshow .experience-list.daNang').height() / 2;;

        const $hcmcBottom     = $hcmcTitleTop + $('#vnshow .experience-list.hcmc').height() / 2;
        const $hanoiBottom    = $hanoiTitleTop + $('#vnshow .experience-list.hanoi').height() / 2;
        const $daNangBottom   = $daNangTitleTop + $('#vnshow .experience-list.daNang').height() / 3;
        const $nhaTrangBottom = $nhaTrangTitleTop + $('#vnshow .experience-list.nhaTrang').height() / 2;

        if ((scrollHeight - scrollPosition) / scrollHeight === 0){

            $('#vnshow .floating-icons > div').removeClass("active");
            $('#vnshow .floating-icons .nhaTrang').addClass("active");

        }else{

            if (scrollTop > $hcmcTitleTop && scrollTop < $hcmcBottom) {
                $('#vnshow .floating-icons > div').removeClass("active");
                $('#vnshow .floating-icons .hcmc').addClass("active");
            }else if (scrollTop > $hanoiTitleTop && scrollTop < $hanoiBottom) {
                $('#vnshow .floating-icons > div').removeClass("active");
                $('#vnshow .floating-icons .hanoi').addClass("active");
            }else if (scrollTop > $daNangTitleTop && scrollTop < $daNangBottom) {
                $('#vnshow .floating-icons > div').removeClass("active");
                $('#vnshow .floating-icons .daNang').addClass("active");
            }else if ((scrollHeight - scrollPosition) / scrollHeight === 0){
                $('#vnshow .floating-icons > div').removeClass("active");
                $('#vnshow .floating-icons .nhaTrang').addClass("active");
            }
        }
    }

    $('#vnshow .copy-btn').click(function () {
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
