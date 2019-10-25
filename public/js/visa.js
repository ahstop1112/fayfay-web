$(document).ready(function () {
    const $visa = $('#visa');

    const $reviewSlick = $('.reviews-slider');

    $reviewSlick.slick({
        slidesToShow: 3,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $reviewSlick.show();

    $reviewSlick.find('.review-content').each(function (){
        $(this).click(function () {

            const $tmp = $(this).find('p');
            const $viewmore = $(this).find('a.viewmore');
            const $showless = $(this).find('a.showless');

            if (!$(this).hasClass("opened")) {

                $tmp.addClass('opened');
                $(this).addClass('opened');
                $viewmore.addClass('hidden');
                $showless.removeClass('hidden');
            }else{
                $tmp.removeClass('opened');
                $(this).removeClass('opened');
                $viewmore.removeClass('hidden');
                $showless.addClass('hidden');
            }

        })
    })
})
