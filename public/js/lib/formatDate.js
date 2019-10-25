$(function () {
    $('[data-time]').each(function () {
        const time = $(this).attr('data-time');

        $(this).text(moment.utc(time).local().format('DD/MM/YYYY HH:mm'));
    });
    $('[data-date]').each(function () {
        const time = $(this).attr('data-date');

        $(this).text(moment.utc(time).local().format('DD/MM/YYYY'));
    });
});
