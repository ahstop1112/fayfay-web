
    $(window).scroll(function () {
        if ($(window).width() > 767 && $('#christmas').length > 0){
            floatingIconsChristmas($(this).scrollTop());
        }
    })

    $('#christmas .floating-icons > div').each(function(){
        $(this).click(function(){

            if (!$(this).hasClass("active")) {
                const $tmp = $(this).attr('class');
                const $top = $('#christmas .experience-list-container.' + $tmp).position().top - 150;

                $('html, body').animate({
                    scrollTop: $top
                }, 800);

                floatingIconsChristmas($(window).scrollTop());
            }
        })
    })

    $('#christmas .btn-address > .list-item').each(function(){
        $(this).click(function(){

            if (!$(this).hasClass("active")) {

                const $tmp = $(this).attr('class').replace('list-item ', '');
                const $top = $('#christmas .experience-list-container.' + $tmp).position().top - 150;

                $('html, body').animate({
                    scrollTop: $top
                }, 800);

                floatingIconsChristmas($(window).scrollTop());
            }
        })
    })

    function floatingIconsChristmas(scrollTop){

        const scrollHeight = $(document).height();
        const scrollPosition = $(window).height() + $(window).scrollTop();

        const $watersportsTitleTop      = $('#christmas .experience-list-container.watersports').position().top;
        const $fnbTitleTop              = $('#christmas .experience-list-container.fnb').position().top - $('#christmas .experience-list-container.watersports').height() / 2;
        const $naturalTitleTop          = $('#christmas .experience-list-container.naturalExploration').position().top - $('#christmas .experience-list-container.fnb').height() / 2;
        const $showTitleTop             = $('#christmas .experience-list-container.show').position().top - $('#christmas .experience-list-container.naturalExploration').height() / 2;
        const $simcardTitleTop          = $('#christmas .experience-list-container.simcard').position().top - $('#christmas .experience-list-container.show').height() / 2;

        const $watersportsBottom        = $watersportsTitleTop + $('#christmas .experience-list-container.watersports').height() / 2;
        const $fnbBottom                = $fnbTitleTop + $('#christmas .experience-list-container.fnb').height() / 2;
        const $naturalBottom            = $naturalTitleTop + $('#christmas .experience-list-container.naturalExploration').height() / 3;
        const $showBottom               = $showTitleTop + $('#christmas .experience-list-container.show').height() / 2;
        const $simcardBottom            = $simcardTitleTop + $('#christmas .experience-list-container.simcard').height() / 2;

        if ((scrollHeight - scrollPosition) / scrollHeight === 0){

            $('#christmas .floating-icons > div').removeClass("active");
            $('#christmas .floating-icons .simcard').addClass("active");

        }else{

            if (scrollTop > $watersportsTitleTop && scrollTop < $watersportsBottom) {

                $('#christmas .floating-icons > div').removeClass("active");
                $('#christmas .floating-icons .watersports').addClass("active");

            }else if (scrollTop > $fnbTitleTop && scrollTop <  $fnbBottom) {

                $('#christmas .floating-icons > div').removeClass("active");
                $('#christmas .floating-icons .fnb').addClass("active");

            }else if (scrollTop > $naturalTitleTop && scrollTop < $naturalBottom) {

                $('#christmas .floating-icons > div').removeClass("active");
                $('#christmas .floating-icons .naturalExploration').addClass("active");

            }else if (scrollTop > $showTitleTop && scrollTop < $showBottom) {

                $('#christmas .floating-icons > div').removeClass("active");
                $('#christmas .floating-icons .show').addClass("active");

            }else if ((scrollTop > $simcardTitleTop && scrollTop < $simcardBottom) || (scrollHeight - scrollPosition) / scrollHeight === 0){

                $('#christmas .floating-icons > div').removeClass("active");
                $('#christmas .floating-icons .simcard').addClass("active");

            }
        }
    }
