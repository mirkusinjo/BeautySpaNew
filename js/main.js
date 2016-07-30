$(document).ready(function () {

    $("#owl-example").owlCarousel({
        navigation: true,
        navigationText: ["prev", "next"],
    });

    $("a.down").click(function () {
        $(this).next('ul').slideToggle();
        $(this).children().toggleClass("fa-toggle-up");
    });

    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
    });
    //PICTURE VIEW
    $('.displayView .fa-th-list').click(function(){
        $('.twelve-p').show();
        $('.twelve').hide();
    });
     $('.displayView .fa-th').click(function(){
        $('.twelve-p').hide();
        $('.twelve').show();
    });


});