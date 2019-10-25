$(document).ready(function () {

    AOS.init();

    var labels = '12345678';
    var labelIndex = 0;

    var map_container = document.getElementById('map');

    function initialize() {

        var locations = [
            ['82 Đường 3 Tháng 2', 16.084470,108.220960],
            ['80 Nguyễn Chí Thanh', 16.073030,108.221310],
            ['80 Pasteur', 16.070080, 108.218810],
            ['435 Lê Duẩn', 16.067040, 108.207650],
            ['A4-2 Nguyễn Văn Linh', 16.061030, 108.219160],
            ['1 Núi Thành', 16.048540,108.220880],
            ['195 Nguyễn Văn Thoại', 16.056130,108.242710],
            ['461 Đường Trần Hưng Đạo', 16.055700,108.232510],
        ];

        var map;

        if ($(window).width() > 550){
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: new google.maps.LatLng(16.068102,108.201281)
            });
        }else{
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: new google.maps.LatLng(16.062864,108.226979)
            });
        }

        // Add a marker at the center of the map.
        for (i = 0; i < locations.length; i++) {
            addMarker(locations[i][1], locations[i][2], map)
        }
    }

    // Adds a marker to the map.
    function addMarker(lat, lng, map) {
        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            label: labels[labelIndex++ % labels.length],
            map: map
        });
    }

    initialize();

    const $experienceSlick = $('.experience-list-container .experience-list .list-col');

    $experienceSlick.slick({
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
    $experienceSlick.show();

    $('.btn-voucher').click(function() {
        $('#voucherAddress').removeClass("hide");
        $('body').addClass("fixed");
    })

    $('#voucherAddress .close-btn').click(function () {
        $('#voucherAddress').addClass("hide");
        $('body').removeClass("fixed");
    });
});
