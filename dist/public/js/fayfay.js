$(document).ready(function () {

    $('a[href*="change-ccy"] , a[href*="change-lang"]').click(function (event) {
        const requestUrl = $(this).attr("href");

        $.post(requestUrl, { url: location.href }, function (responseUrl) {
            location.replace(responseUrl);
        });

        event.preventDefault();
    });

    mobileMenu();
    const $window = $(window);
    const $body = $('body');
    const $homeHeader = $('.home-header-section .bg-container');
    const $footer = $('#footer');
    const $activityTabSections = $('.activity-tabs-section');
    const $activityTabContentSections = $('.activity-tabs-content-section');
    const $relatedActivitySection = $('.related-activities-section');
    const $activityBookingPrice = $('.booking-price-container');
    const $activityBookingDetails = $('#booking-details-container');
    const $bookingDetails = $('.booking-details-container');
    const $filterAll = $('.search-container .filter-all');
    const $filterResult = $('.search-container .filter-result');
    const $spotLight = $('#spotlight');
    const $headerTopArea = $('.header-top-area');
    const $goToTop = $('#gotoTop');
    const $filterSortingMobileBtn = $('.filter-sorting-mobile-btn');
    const $sortbyMobileOverlay = $('.sortby-mobile-overlay');
    const $cityLocation = $('.city-location');
    const $paymentRightContainer = $('.payment-right-container');
    const $floatingIconContainer = $('.floating-icons');
    const $isIE11 = !!navigator.userAgent.match(/Trident\/7\./);

    $('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function (element) {
            console.log('error loading ' + element.data('src'));
        }
    });

    $('.provider-register').click(function () {
        const top = $('.experience-provider').position().top
        $('html, body').animate({
            scrollTop: top
        }, 800);
    });

    $('.popup-edit').click(function () {
        $('.popup-details').each(function () {
            $(this).removeClass('opened');
        });

        $body.addClass('opened');
        $(this).parent().find('.popup-details').addClass('opened');
    });

    $('.close-popup-details').click(function () {
        $body.removeClass('opened');
        $('.popup-details.opened').removeClass('opened');
    });

    $('#close-notify').click(function () {
        $('#notification').remove();
    });

    const $destinationSlick = $('.destination-slick');
    const itemCount = $destinationSlick.find('.list-item').length;

    let centerMode = false;

    const windowWidth = window.innerWidth || $(window).width();

    if (windowWidth >= 1440) {
        if (itemCount > 7) {
            centerMode = true;
        }
        $body.removeClass("popup");
    }
    else if (windowWidth > 1025) {
        if (itemCount > 5) {
            centerMode = true;
        }
        $body.removeClass("popup");
    }
    else if (windowWidth > 769) {
        $body.removeClass("popup");
    }

    const $indexSlick = $('.index-slick');

    $indexSlick.slick({
        dots: false,
        infinite: true,
        fade: true,
        autoplay: true,
        arrows: false,
        speed: 2000
    });

    if ($indexSlick.hasClass('slick-slider')) {
        $indexSlick.removeClass('hidden');
    }

    $destinationSlick.slick({
        centerMode: centerMode,
        centerPadding: '5px',
        slidesToShow: 7,
        cssEase: 'ease-in',
        swipeToSlide: true,
        lazyLoad: "progressive",
        speed: 200,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    });

    if (windowWidth > 1441 && itemCount <= 7) {
        $destinationSlick.find('.slick-track').css('margin', 'auto');
    }

    if (!centerMode) {
        $destinationSlick.find('.slick-current').removeClass('slick-current');

        if (itemCount === 7) {
            if (windowWidth < 480) {
                $destinationSlick.find('[data-slick-index=0]').addClass('slick-current');
            }
        }
        else {
            $destinationSlick.find('[data-slick-index=0]').addClass('slick-current');
        }

    }

    $destinationSlick.show();

    $('#indexPopupBanner .close-btn').click(function () {
        $('#indexPopupBanner').fadeOut(500);
        const date = new Date();
        date.setTime(date.getTime() + (8*60*60*1000));
        //the cookie will expire in 8 hours
        const expires = "expires="+ date.toUTCString();
        document.cookie = "hidePopup=true;" + expires + ";path=/";
    });

    $('#leadAdChatPopup').click(function () {
        $(this).fadeOut(500);
        const date = new Date();
        date.setTime(date.getTime() + (8*60*60*1000));
        //the cookie will expire in 8 hours
        const expires = "expires="+ date.toUTCString();
        document.cookie = "hideLeadPopup=true;" + expires + ";path=/";
    });

    //for index header promotions slider
    const $hotPromotionsSlick = $('.hotPromotions-slider');

    $hotPromotionsSlick.slick({
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
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $hotPromotionsSlick.show();

    //for related experiences slider
    const $relatedExperiencesSlick = $('.related-experiences-slider');

    $relatedExperiencesSlick.slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    arrows: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $relatedExperiencesSlick.show();

    $cityLocation.colorbox({
        inline: true,
        width: '80%'
    });

    const $bgrSlick = $('.bg-slick');

    $bgrSlick.slick({
        infinite: true,
        fade: true,
        arrows: true,
        centered: true
    });
    $bgrSlick.show();

    const $promotionSlick = $('.promotion-slider');

    $promotionSlick.slick({
        dots: false,
        infinite: true,
        fade: true,
        autoplay: false,
        arrows: true,
        centered: true,
        onLoad: function () {
            $body.css({
                'position': 'fixed',
                'width': '100%'
            });

            $body.css('height', parseInt($window.height()) + parseInt(modal.css('top')) + 'px')
        },
        onClose: function () {
            $body.css('position', 'relative')
        }
    });
    $promotionSlick.show();

    const $bannerSlick = $('.banner-slick');

    $bannerSlick.slick({
        dots: true,
        infinite: true,
        fade: true,
        autoplay: false,
        arrows: false,
        centered: true,
        onLoad: function () {
            $body.css({
                'position': 'fixed',
                'width': '100%'
            });

            $body.css('height', parseInt($window.height()) + parseInt(modal.css('top')) + 'px')
        },
        onClose: function () {
            $body.css('position', 'relative')
        }
    });

    if (!$isIE11) {
        $bannerSlick.slickLightbox({
            lazy: true,
            slick: {
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                cssEase: 'ease-in'
            },
            src: function (el) {
                const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                const match = el.href.match(regExp);
                if (match && match[2].length === 11) {
                    return 'https://www.youtube.com/embed/' + match[2];
                }

                return el.href;
            }
        });
    }

    if ($bannerSlick.hasClass('slick-slider')) {
        $bannerSlick.removeClass('hidden');
    }

    const videoSlick = $('.video-slick');

    videoSlick.slick({
        dots: false,
        arrows: false,
        prevArrow: '',
        nextArrow: '',
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


    const $btnSearchActivity = $('#btnSearchActivity');
    const $txtSearchActivity = $('#txtSearchActivity');

    $btnSearchActivity.click(function () {
        const keyword = $txtSearchActivity.val();
        if (keyword) {
            window.location.replace('/search?keyword=' + keyword);
        }
    });

    $txtSearchActivity.keypress(function (e) {
        if (e.which === 13) {
            const keyword = $txtSearchActivity.val();

            if (keyword) {
                window.location.replace('/search?keyword=' + keyword);
            }
        }
    });

    const $btnSearchActivityMobile = $('#btnSearchActivityMobile');
    const $txtSearchActivityMobile = $('#txtSearchActivityMobile');

    $btnSearchActivityMobile.click(function () {
        const keyword = $txtSearchActivityMobile.val();
        if (keyword) {
            window.location.replace('/search?keyword=' + keyword);
        }
    });

    $txtSearchActivityMobile.keypress(function (e) {
        if (e.which === 13) {
            const keyword = $txtSearchActivityMobile.val();
            if (keyword) {
                window.location.replace('/search?keyword=' + keyword);
            }
        }
    });

    // GO TO REVIEWS
    $('#showReviewsBtn').click(function () {
        $activityTabSections.find('.nav-pills a[href="#reviews"]').click();
    });

    const winWidth = $window.width();
    if (winWidth > 1199) {
        desktopScroll($window.width());
        // $goToTop.on('click', function () {
        //     goTopFunc($goToTop, '100px');
        // });
    } else {
        mobileScroll($window.width());
        // $goToTop.on('click', function () {
        //     goTopFunc($goToTop,'120px');
        // });
    }

    $window.resize(function () {
        videoSlick.each(function (index) {
            $(this)[0].slick.refresh();
        });

        if ($window.width() > 1199) {
            $body.removeClass('popup');

            desktopFilter($(this).scrollTop());
        } else {
            mobileScroll($window.width());
        }
    });

    $activityTabSections.find('.nav-pills a').each(function () {
        $(this).click(function () {
            activityGoTab($(this).attr('href'));
        });
    });

    $('body').find('.bg').each(function () {
        var img = $(this);
        var imgParent = $(this).parent();

        function parallaxImg() {

            var speed = img.data('speed');
            var imgY = imgParent.offset().top;
            var winY = $(this).scrollTop();
            var winH = $(this).height();
            var parentH = imgParent.innerHeight();

            // The next pixel to show on screen
            var winBottom = winY + winH;

            // If block is shown on screen
            if (winBottom > imgY && winY < imgY + parentH) {
                // Number of pixels shown after block appear
                var imgBottom = ((winBottom - imgY) * speed);
                // Max number of pixels until block disappear
                var imgTop = winH + parentH;
                // Porcentage between start showing until disappearing
                var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
            }
            img.css({
                // top: imgPercent + '%',
                opacity: '1',
                transform: 'translate(-50%, -' + imgPercent + '%)'
            });
        }

        $(document).on({
            scroll: function () {
                parallaxImg();
            }, ready: function () {
                parallaxImg();
            }
        });
    });

    const $panelCollapse = $('.panel-collapse');

    $panelCollapse.on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
    });

    $panelCollapse.on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
    });

    //Tabs Desktop
    const $navTabs = $(".nav-pills");

    $navTabs.find("a").click(function () {

        temp = $(this).attr("href");

        $(".tab-content div").removeClass("active in");
        $(".tab-content div" + temp).addClass("active in");

        $navTabs.find("a").each(function () {

            $(this).parent().removeClass("active");

            if ($(this).attr("href") == "#" + temp) {
                $(this).parent().addClass("active");
            }

        });

    });


    //Tabs Mobile
    const $navTabsMobile = $(".nav-tabs-mobile");

    $navTabsMobile.change(function () {

        var temp = "";

        $navTabsMobile.find("option:selected").each(function () {

            temp = $(this).attr("value");

            $(".tab-content div").removeClass("active in");
            $(".tab-content div#" + temp).addClass("active in");

            $(".nav-tabs a").parent().removeClass("active");
        });
        $navTabsMobile.val(temp);

        //navTabs
        $navTabs.find("a").each(function () {

            $(this).parent().removeClass("active");
        });
        $navTabs.find("a[href$='" + temp + "']").parent().addClass("active");
    });

    function activityGoTab(elementId) {
        $activityTabSections.addClass('scroll');
        const section = $activityTabContentSections.find(elementId);
        if (section.length) {
            $('html, body').animate({
                scrollTop: section.offset().top - 140
            }, 500);
        }
    }


    function desktopScroll(winWidth) {

        $body.removeClass("popup");

        if ($window.scrollTop() > 200) {

            $headerTopArea.addClass('scroll').fadeIn(500);
            $goToTop.addClass("show");

            if ($(this).scrollTop() > 420 && $activityBookingDetails.length) {
                $activityTabSections.addClass('scroll');

                if ($(this).scrollTop() > $activityBookingDetails.offset().top - 500 && $(this).scrollTop() < $activityBookingDetails.offset().top + 200
                    && $activityBookingDetails.hasClass('show-booking-details')) {
                    $activityBookingPrice.removeClass('scroll');
                } else {
                    $activityBookingPrice.addClass('scroll');
                }
            } else {
                $activityTabSections.removeClass('scroll');
                $activityBookingPrice.removeClass('scroll');
            }

            if ($filterAll.length > 0){
                desktopFilter($(this).scrollTop());
            }

        } else {
            $goToTop.removeClass("show");
            $headerTopArea.removeClass('scroll');
            $activityTabSections.removeClass('scroll');
            $activityBookingPrice.removeClass('scroll');
        }

        $window.scroll(function () {

            if ($filterAll.length > 0){
                desktopFilter($(this).scrollTop());
            }

            if ($(this).scrollTop() > 500) {

                $floatingIconContainer.addClass("show");
                $goToTop.addClass("show");
                $headerTopArea.addClass('scroll').fadeIn(500);

                if ($(this).scrollTop() > 250 && $activityBookingDetails.length > 0) {
                    $activityTabSections.addClass('scroll');

                    if ($activityBookingDetails.hasClass('show-booking-details')) {
                        if ($(this).scrollTop() < $activityBookingDetails.offset().top - 400) {
                            $activityBookingPrice.addClass('scroll');
                        } else {
                            $activityBookingPrice.removeClass('scroll');
                        }
                    } else {
                        $activityBookingPrice.addClass('scroll');
                        if ($(this).scrollTop() > $relatedActivitySection.position().top - $activityBookingPrice.height()) {
                            $activityBookingPrice.css('top', 'auto');
                            $activityBookingPrice.css('bottom', $footer.height() + $relatedActivitySection.height());
                        } else {
                            $activityBookingPrice.css('bottom', 'auto');
                            $activityBookingPrice.css('top', '150px');
                        }
                    }
                } else {
                    $activityTabSections.removeClass('scroll');
                    $activityBookingPrice.removeClass('scroll');
                }

            } else {
                $floatingIconContainer.removeClass("show");
                $goToTop.removeClass("show");
                $headerTopArea.removeClass('scroll');
                $activityTabSections.removeClass('scroll');
                $activityBookingPrice.removeClass('scroll');
            }

            if ($activityBookingDetails.length && $(this).scrollTop() > $activityBookingDetails.offset().top - 150) {
                $bookingDetails.addClass('scroll');
                if ($(this).scrollTop() > $footer.position().top - 550) {
                    $bookingDetails.css('top', 'auto');
                    $bookingDetails.css('bottom', $footer.height() + 10);
                } else {
                    $bookingDetails.css('bottom', 'auto');
                    $bookingDetails.css('top', '150px');
                }
            } else {
                $bookingDetails.removeClass('scroll');
            }

            if ($(this).scrollTop() > 110) {
                $paymentRightContainer.addClass('scroll');


                if ($(this).scrollTop() > $footer.position().top - $paymentRightContainer.height() - 100) {
                    $paymentRightContainer.css('top', 'auto');
                    $paymentRightContainer.css('bottom', $footer.height());
                } else {
                    $paymentRightContainer.css('bottom', 'auto');
                    $paymentRightContainer.css('top', '90px');
                }
            } else {
                $paymentRightContainer.removeClass('scroll');
            }

            var idx, wtop = $(this).scrollTop(), list = $('.activity-tabs-content-section .tab-content>.tab-pane');
            for (idx = 0; idx < list.length; idx++) {
                var htop = list.eq(idx).offset().top + list.eq(idx).height();

                if (wtop < parseInt(htop - $headerTopArea.height() - $('.activity-tabs-section').height() - 15)) {
                    break;
                }
            }
            $('.nav-pills>li:eq(' + idx + ')').addClass('active').siblings().removeClass('active');
        });
    }

    function desktopFilter(currentScrollTop) {

        var resultBottom = 0;

        if ($window.width() > 1199 && $('.search-container').length > 0 && currentScrollTop > $('.search-container').offset().top - 50) {

            $filterAll.addClass('scroll');
            $filterAll.removeClass('noScroll');
            $filterAll.css({
                'top': '80px',
                'position': 'fixed'
            });

        } else {
            $body.removeClass('fixed');
            $filterAll.removeClass('scroll');
            $filterAll.addClass('noScroll');
        };
    }

    function mobileScroll(winWidth) {

        if ($('.result-container.open').length > 0) {
            $('body').addClass('popup');
        }

        $window.scroll(function () {
            if ($body.hasClass('popup')) {
                const element = document.getElementById("search-container-scrolling");
                element.scrollIntoView();
            }
            else {
                if ($(this).scrollTop() > 80) {
                    // $goToTop.addClass("show");
                    $headerTopArea.addClass('scroll');
                    mobileFilter($(this).scrollTop());
                } else {
                    // $goToTop.removeClass("show");
                    $headerTopArea.removeClass('scroll');
                }
            }
        });

        // $goToTop.click(goTopFunc($goToTop, '120px'));
    }

    // function goTopFunc($this, bottomPos) {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 800);
    //
    //     var goheight = $(window).height() + 200;
    //
    //     $this.animate({
    //         'bottom': goheight
    //     }, 800);
    //
    //     setTimeout(function () {
    //         $this.css('display', 'none');
    //         $this.css('bottom', bottomPos);
    //     }, 1500);
    //
    //     return false;
    // }

    function mobileFilter(currentScrollTop) {

        var resultBottom = 0;
        var tmpScroll = true;

        if ($spotLight.length > 0) {
            resultBottom = $spotLight.offset().top - $window.height();
        } else {
            resultBottom = $footer.offset().top - $window.height();
        }

        if ($window.width() < 1199 && $('.search-container').length > 0 && currentScrollTop > $('.search-container').offset().top - 100) {

            $filterSortingMobileBtn.addClass('scroll');

            if (currentScrollTop > resultBottom) {
                $filterSortingMobileBtn.css({
                    'top': resultBottom + $window.height() - 50,
                    'bottom': 'auto',
                    'position': 'absolute'
                });

                $sortbyMobileOverlay.css({
                    'top': resultBottom + $window.height() - $sortbyMobileOverlay.height() - $filterSortingMobileBtn.height() - 30,
                    'bottom': 'auto',
                    'position': 'absolute'
                });


            } else {
                $filterSortingMobileBtn.css({
                    'bottom': '20px',
                    'top': 'auto',
                    'position': 'fixed'
                });

                $sortbyMobileOverlay.css({
                    'bottom': '85px',
                    'top': 'auto',
                    'position': 'fixed'
                });
            }

        } else {
            $filterSortingMobileBtn.removeClass('scroll');
            $body.removeClass('fixed');
        }
    }

    function mobileMenu() {
        $('nav#mainNav-mobile').mmenu({
            extensions: ['effect-menu-slide', 'pageshadow', 'pagedim-black'],
            autoHeight: true,
            navbar: {
                title: ''
            },
            offCanvas: {
                position: 'right'
            }
        });
    }
});

// GLOBAL FUNCTIONS

function initMap() {
    const map_container = document.getElementById('map');
    const latitiude = parseFloat(map_container.getAttribute('data-lat'));
    const longitude = parseFloat(map_container.getAttribute('data-lng'));

    const myLatLng = {
        lat: latitiude,
        lng: longitude
    };

    const map = new google.maps.Map(map_container, {
        zoom: 13,
        center: myLatLng
    });

    new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
