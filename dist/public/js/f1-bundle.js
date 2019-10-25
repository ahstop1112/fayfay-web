$(document).ready(function(){
    const $f1 = $('#f1');
    const $sections = document.querySelectorAll(".go-section");
    const $sectionsTitleTop = [];
    const $sectionsHeight = [];
    const $sectionsBottom = [];
    const timezone = new Date().getTimezoneOffset() / 60;

    $('ul#countdown').countdown({
        date: '4/5/2020',
        offset: -timezone
    }, function () {
        $('.f1-section.countdown ').addClass('hidden');
    });

    const $anticipatedSlick = $('.anticipated-slider');

    $anticipatedSlick.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        dots: true,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<span>'+(i+1)+'</span>';
        },
        arrows: false
    });
    $anticipatedSlick.show();

    const $videoSlick = $('.video-slider');

    const $isIE11 = !!navigator.userAgent.match(/Trident\/7\./);

    if (!$isIE11) {
        $anticipatedSlick.slickLightbox({
            lazy: true,
            slick: {
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                cssEase: 'ease-in'
            }
        });
    }

    const videoSlick = $('.f1-video-slick');

    videoSlick.slick({
        dots: false,
        arrows: false,
        prevArrow: '',
        nextArrow: '',
        lazyLoad: 'ondemand',
        onLoad: function () {
            $body.css({
                'position': 'fixed',
                'width': '100%'
            });

            $body.css('height', parseInt($window.height()) + parseInt(modal.css('top')) + 'px');
            $('.slick-prev').css('display', 'none !important');
            $('.slick-next').css('display', 'none !important')
        },
        onClose: function () {
            $body.css('position', 'relative')
        }
    });

    if (!$isIE11) {
        videoSlick.slickLightbox().on({
            'show.slickLightbox': function () {
                $('.slick-prev').css('opacity', '0');
                $('.slick-next').css('opacity', '0');
            }
        });
    }

    const $ticketTypeSlick = $('.ticketType-slider');

    $ticketTypeSlick.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    dots: false,
                    arrows: true
                }
            }
        ]
    });
    $ticketTypeSlick.show();

    const $gridSlick = $('.grid-slider');

    $gridSlick.slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });
    $gridSlick.show();

    const $mustHaveSlick = $('.mustHave-slider');

    $mustHaveSlick.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    });
    $mustHaveSlick.show();

    const $authenticExpSlick = $('.authenticExp-slider');

    $authenticExpSlick.slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });
    $authenticExpSlick.show();


    $(window).scroll(function () {
        if ($(window).width() > 767 && $f1.length > 0) {
            floatingIcons($(this).scrollTop());
        }

        if ($(window).scrollTop() >  $('.go-section.section0').height()) {
            $('.floating-icons').addClass("show");
        }else{
            $('.floating-icons').removeClass("show");
        }
    })

    $f1.find('.floating-icons > div').each(function () {
        $(this).click(function () {

            if (!$(this).hasClass("active")) {

                const $tmp = $(this).attr('class');
                const $top = $f1.find('.go-section.' + $tmp).position().top - $('.header-top-area').height() - 40;

                $('html, body').animate({
                    scrollTop: $top
                }, 1200);

                floatingIcons($(window).scrollTop());
            }

        })
    });

    $f1.find('.event-details-showMore').each(function () {
        $(this).click(function () {

            $(this).parent().find('.event-details-wrapper').css({
                'max-height': 'none',
                'overflow': 'visible'
            })

            $(this).css({
                'display': 'none'
            })

        })
    })

    $('.go-general-admission').click(function() {
        $('html, body').animate({
            scrollTop: $('.general-admission').position().top - 50
        }, 800);
    });

    $('.go-grandstand').click(function(){
        $('html, body').animate({
            scrollTop: $('.grandstand').position().top - 50
        }, 800);
    });

    $('.go-hospitality').click(function(){
        $('html, body').animate({
            scrollTop: $('.hospitality').position().top - 50
        }, 800);
    });

    function floatingIcons(scrollTop) {

        const scrollHeight = $(document).height();
        const scrollPosition = $(window).height() + $(window).scrollTop();
        const lastIndex = $sections.length - 1;

        for (let index = 0; index < $sections.length; index++) {

            $sectionsHeight[index] = $('.go-section.section' + index).height();

            if (index === 0){
                $sectionsTitleTop[0] = $('.go-section.section0').position().top;
                $sectionsBottom[0]  = $sectionsTitleTop[0] + $sectionsHeight[0] / 2;

            }else{
                $sectionsTitleTop[index] = $('.go-section.section' + index).position().top;
                $sectionsTitleTop[index] -= $sectionsHeight[index-1] / 2;
                $sectionsBottom[index] = $sectionsTitleTop[index] + $sectionsHeight[index-1] / 2;
            }

            if ((scrollHeight - scrollPosition) / scrollHeight === 0){
                $f1.find('.floating-icons > div').removeClass("active");
                $f1.find('.floating-icons .section' + lastIndex).addClass("active");
            }else{

                if (scrollTop > $sectionsTitleTop[index] && scrollTop < $sectionsBottom[index]) {
                    $f1.find('.floating-icons > div').removeClass("active");
                    $f1.find('.floating-icons .section'+index).addClass("active");
                }
            }

        }
    }
});

// CountDown Clock
// Version   : 1.0.1
// Developer : Ekrem KAYA
// Website   : https://e-piksel.com
// GitHub    : https://github.com/epiksel/countdown

!function(t){t.fn.countdown=function(e,n){function o(){var t=new Date(r.date),e=s(),o=t-e;if(0>o)return clearInterval(d),void(n&&"function"==typeof n&&n());var a=1e3,f=60*a,u=60*f,l=24*u,c=Math.floor(o/l),h=Math.floor(o%l/u),x=Math.floor(o%u/f),g=Math.floor(o%f/a),y=1===c?r.day:r.days,m=1===h?r.hour:r.hours,v=1===x?r.minute:r.minutes,D=1===g?r.second:r.seconds;c=String(c).length>=2?c:"0"+c,h=String(h).length>=2?h:"0"+h,x=String(x).length>=2?x:"0"+x,g=String(g).length>=2?g:"0"+g,i.find(".days").text(c),i.find(".hours").text(h),i.find(".minutes").text(x),i.find(".seconds").text(g)}var r=t.extend({date:null,offset:null,day:"Day",days:"Days",hour:"Hour",hours:"Hours",minute:"Minute",minutes:"Minutes",second:"Second",seconds:"Seconds"},e);r.date||t.error("Date is not defined."),Date.parse(r.date)||t.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");var i=this,s=function(){var t=new Date,e=t.getTime()+6e4*t.getTimezoneOffset(),n=new Date(e+36e5*r.offset);return n},d=setInterval(o,1e3)}}(jQuery);
